//
//  MainController.swift
//  Сamera Translate
//
//  Created by Viсtor Kozodaev on 4/4/22.
//

import UIKit
import AVFoundation
import Vision

class MainController: UIViewController {
    
    @IBOutlet weak var cameraOutputView: UIView!
    private var cameraHelper: CameraHelper!
    private var textRecognitionHelper: TextRecognitionHelper!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        initHelpers()
    }
    
    private func initHelpers () {
        self.cameraHelper = CameraHelper(outputView: cameraOutputView)
        
        self.textRecognitionHelper = TextRecognitionHelper(recognizeRectSize: cameraOutputView.bounds.size)
        
        cameraHelper.onMove = {
            print("CameraHelper: onMove")
            self.cameraHelper.setReceiving(true)
        }
        
        cameraHelper.onReceive = { frame in
            print("CameraHelper: onReceive")
            self.cameraHelper.setReceiving(false)
            self.textRecognitionHelper.recognize(by: frame)
        }
        
        textRecognitionHelper.onRecognize = { result in
            print("TextRecognitionHelper: onRecognize", result)
            self.cameraHelper.setReceiving(true)
        }
    }
}
