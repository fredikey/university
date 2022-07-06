//
//  ResultBox.swift
//  Сamera Translate
//
//  Created by Victor Kozodaev on 07.07.2022.
//

import CoreGraphics

public class ResultBox {
    public var text: String
    public var rect: CGRect
    
    init(text: String, rect: CGRect) {
        self.text = text
        self.rect = rect
    }
}
