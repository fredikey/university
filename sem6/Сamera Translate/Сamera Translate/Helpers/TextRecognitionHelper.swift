//
//  TextRecognitionHelper.swift
//  Сamera Translate
//
//  Created by Victor Kozodaev on 06.07.2022.
//

import Vision

final class TextRecognitionHelper {
    var onRecognize: (([String]) -> Void)?
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
            var result = [String]()
            for observation in observations {
                let recognizedText = observation.topCandidates(1)[.zero].string
                result.append(recognizedText)
            }
            self.mainQueue.sync {
                self.onRecognize?(result)
                self.isRecognizing = false
            }
        }
    }
}
