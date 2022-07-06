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
    private var translateService: TranslateService!
    private var boxHelper: BoxHelper!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        initHelpers()
    }
    
    private func initHelpers () {
        self.cameraHelper = CameraHelper(outputView: cameraOutputView)
        
        self.textRecognitionHelper = TextRecognitionHelper(recognizeRectSize: cameraOutputView.bounds.size)
        
        self.translateService = TranslateService()
        
        self.boxHelper = BoxHelper(rectWidth: cameraOutputView.bounds.width)
        
        cameraHelper.onMove = {
            print("CameraHelper: onMove")
            
            self.translateService.stopTranslate()
            self.cameraHelper.clearPreviewLayer()
            self.cameraHelper.setReceiving(true)
        }
        
        cameraHelper.onReceive = { frame in
            print("CameraHelper: onReceive")
            self.cameraHelper.setReceiving(false)
            self.textRecognitionHelper.recognize(by: frame)
        }
        
        textRecognitionHelper.onRecognize = { result in
            print("TextRecognitionHelper: onRecognize", result)
            if !result.isEmpty {
                self.translateService.translate(result: result)
            } else {
                self.cameraHelper.setReceiving(true)
            }
        }
        
        translateService.onTranslate = { result in
            print("TranslateService: onTranslate", result)
            
            let layers = self.boxHelper.updateLayout(boxes: result)
            self.cameraHelper.draw(layers: layers)
            
            self.cameraHelper.setReceiving(true)
        }
    }
}
