//
//  TextRecognitionHelper.swift
//  Сamera Translate
//
//  Created by Victor Kozodaev on 06.07.2022.
//

import Vision

final class TextRecognitionHelper {
    var onRecognize: (([ResultBox]) -> Void)?
    private(set) var isRecognizing = false
    private let mainQueue = DispatchQueue.main
    private let queue = DispatchQueue(label: "TextRecognitionHelper", qos: .background)
    private let recognizeRectSize: CGSize
    private var request: VNRecognizeTextRequest!
    
    init?(recognizeRectSize: CGSize) {
        self.recognizeRectSize = recognizeRectSize
        queue.async {
            self.request = VNRecognizeTextRequest(completionHandler: self.handleRecognizedText)
            self.request.recognitionLevel = .fast
        }
    }
    
    func recognize(by pixelBuffer: CVPixelBuffer) {
        queue.async {
            let imageRequestHandler = VNImageRequestHandler(cvPixelBuffer: pixelBuffer, orientation: .right, options: [:])
            try? imageRequestHandler.perform([self.request])
        }
    }
    
    private func handleRecognizedText(request: VNRequest, error: Error?) {
        queue.async {
            guard error == nil,
                  let observations = request.results?.compactMap({$0 as? VNRecognizedTextObservation}),
                  observations.filter({$0.confidence < 0.97}).count == .zero else {
                self.onRecognize?([])
                return
            }
            self.mainQueue.sync {
                self.isRecognizing = true
            }
            
            var result = [ResultBox]()
            for observation in observations {
                let recognizedText = observation.topCandidates(1)[.zero].string
                
                let rect = self.convertCoordinates(of: observation.boundingBox)
                
                result.append(ResultBox(text: recognizedText, rect: rect))
            }
            
            self.mainQueue.sync {
                self.onRecognize?(result)
                self.isRecognizing = false
            }
        }
    }
    
    private func convertCoordinates(of recognizedBoundingBox: CGRect) -> CGRect {
        let x = recognizedBoundingBox.minX * recognizeRectSize.width
        let y = (1 - recognizedBoundingBox.maxY) * recognizeRectSize.height
        let width = (recognizedBoundingBox.maxX - recognizedBoundingBox.minX) * recognizeRectSize.width
        let height = (recognizedBoundingBox.maxY - recognizedBoundingBox.minY) * recognizeRectSize.height
        return CGRect(x: x, y: y, width: width, height: height)
    }
}
