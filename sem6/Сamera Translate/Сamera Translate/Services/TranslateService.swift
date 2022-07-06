//
//  TranslateService.swift
//  Сamera Translate
//
//  Created by Victor Kozodaev on 07.07.2022.
//

import Foundation
import Alamofire
import SwiftyJSON


final class TranslateService {
    var onTranslate: (([String]) -> Void)?
    private(set) var isTranslating = false
    private let mainQueue = DispatchQueue.main
    private let queue = DispatchQueue(label: "TranslateService", qos: .background)
    private var currentTranslating = [String]()
    
    func stopTranslate() {
        mainQueue.async {
            self.isTranslating = false
        }
    }
    
    func translate(result: [String]) {
        mainQueue.async {
            guard !self.isTranslating else { return }
            self.isTranslating = true
            self.currentTranslating = result
            self.translateNext(index: .zero)
        }
    }
    
    func translateNext(index: Int) {
        mainQueue.async {
            guard self.isTranslating else { return }
            guard index < self.currentTranslating.count else {
                self.onTranslate?(self.currentTranslating)
                self.isTranslating = false
                return
            }
            let parameters = ["q": self.currentTranslating[index],
                              "langpair": "en|ru",
                              "de": "viktor7778123@gmail.com"]
            self.queue.async {
                AF.request("https://api.mymemory.translated.net/get", parameters: parameters).responseJSON { response in
                    self.mainQueue.async {
                        guard self.isTranslating,
                              let value = response.value,
                              let text = JSON(value)["responseData"]["translatedText"].string else { return }
                        self.currentTranslating[index] = text
                        self.translateNext(index: index + 1)
                    }
                }
            }
        }
    }
}
