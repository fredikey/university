//
//  ViewController.swift
//  Сamera Translate
//
//  Created by Viсtor Kozodaev on 4/4/22.
//

import UIKit
import AVFoundation
import Vision

class ViewController: UIViewController {
    
    @IBOutlet weak var imageView: UIImageView!
    var session = AVCaptureSession()
    var requests = [VNRequest]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        startLiveVideo()
        startTextDetection()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func startLiveVideo() {
        //1
        session.sessionPreset = AVCaptureSession.Preset.photo
        let captureDevice = AVCaptureDevice.default(for: AVMediaType.video)
        
        //2
        let deviceInput = try! AVCaptureDeviceInput(device: captureDevice!)
        let deviceOutput = AVCaptureVideoDataOutput()
        deviceOutput.videoSettings = [kCVPixelBufferPixelFormatTypeKey as String: Int(kCVPixelFormatType_32BGRA)]
        deviceOutput.setSampleBufferDelegate(self, queue: DispatchQueue.global(qos: DispatchQoS.QoSClass.default))
        session.addInput(deviceInput)
        session.addOutput(deviceOutput)
        
        //3
        let imageLayer = AVCaptureVideoPreviewLayer(session: session)
        imageLayer.frame = imageView.bounds
        imageView.layer.addSublayer(imageLayer)
        
        session.startRunning()
    }
    
    override func viewDidLayoutSubviews() {
        imageView.layer.sublayers?[0].frame = imageView.bounds
    }
    
    func startTextDetection() {
        let textRequest = VNRecognizeTextRequest(completionHandler: self.detectTextHandler)
//        textRequest.reportCharacterBoxes = true
        self.requests = [textRequest]
    }
    
    func detectTextHandler(request: VNRequest, error: Error?) {
        guard let observations =
                request.results as? [VNRecognizedTextObservation] else {
            return
        }
        let candidates = observations.compactMap { observation in
            // Return the string of the top VNRecognizedText instance.
            return observation.topCandidates(1).first
        }
        
        // Process the recognized strings.
        print(candidates)
        // Todo render text into camera sublayers
//        DispatchQueue.main.async() {
//            self.imageView.layer.sublayers?.removeSubrange(1...)
//            for candidate in candidates {
//                guard var c = candidate else {
//                    continue
//                }
//
//                self.highlightWord(box: rg?.boundingBox)
//            }
//        }
    }
    
    func highlightWord(box: VNTextObservation) {
        guard let boxes = box.characterBoxes else {
            return
        }
        
        var maxX: CGFloat = 9999.0
        var minX: CGFloat = 0.0
        var maxY: CGFloat = 9999.0
        var minY: CGFloat = 0.0
        
        for char in boxes {
            if char.bottomLeft.x < maxX {
                maxX = char.bottomLeft.x
            }
            if char.bottomRight.x > minX {
                minX = char.bottomRight.x
            }
            if char.bottomRight.y < maxY {
                maxY = char.bottomRight.y
            }
            if char.topRight.y > minY {
                minY = char.topRight.y
            }
        }
        
        let xCord = maxX * imageView.frame.size.width
        let yCord = (1 - minY) * imageView.frame.size.height
        let width = (minX - maxX) * imageView.frame.size.width
        let height = (minY - maxY) * imageView.frame.size.height
        
        let outline = CALayer()
        outline.frame = CGRect(x: xCord, y: yCord, width: width, height: height)
        outline.borderWidth = 2.0
        outline.borderColor = UIColor.red.cgColor
        
        imageView.layer.addSublayer(outline)
    }
}

extension ViewController: AVCaptureVideoDataOutputSampleBufferDelegate {
    func captureOutput(_ output: AVCaptureOutput, didOutput sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection) {
        guard let pixelBuffer = CMSampleBufferGetImageBuffer(sampleBuffer) else {
            return
        }
        
        var requestOptions:[VNImageOption : Any] = [:]
        
        if let camData = CMGetAttachment(sampleBuffer, key: kCMSampleBufferAttachmentKey_CameraIntrinsicMatrix, attachmentModeOut: nil) {
            requestOptions = [.cameraIntrinsics:camData]
        }
        
        let imageRequestHandler = VNImageRequestHandler(cvPixelBuffer: pixelBuffer, orientation: CGImagePropertyOrientation(rawValue: 6)!, options: requestOptions)
        
        do {
            try imageRequestHandler.perform(self.requests)
        } catch {
            print(error)
        }
    }
}
