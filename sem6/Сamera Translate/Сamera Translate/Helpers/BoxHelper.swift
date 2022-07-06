//
//  BoxHelper.swift
//  Сamera Translate
//
//  Created by Victor Kozodaev on 07.07.2022.
//

import UIKit

final class BoxHelper {
    private let rectWidth: CGFloat

    init?(rectWidth: CGFloat) {
        guard rectWidth > .zero else { return nil }
        self.rectWidth = rectWidth
    }
    
    func updateLayout(boxes: [ResultBox]) -> [CATextLayer] {
        var layers = [CATextLayer]()
        for i in 0..<boxes.count {
            var leftFreeSpace: CGFloat = .zero
            var rightFreeSpace: CGFloat = .zero
            if i > .zero && (abs(boxes[i].rect.midY - boxes[i - 1].rect.midY) < (boxes[i].rect.height / 2 + boxes[i - 1].rect.height / 2)) {
                leftFreeSpace = boxes[i].rect.minX - boxes[i - 1].rect.maxX
            } else {
                leftFreeSpace = boxes[i].rect.minX
            }
            if i < boxes.count - 1 && (abs(boxes[i].rect.midY - boxes[i + 1].rect.midY) < (boxes[i].rect.height / 2 + boxes[i + 1].rect.height / 2)) {
                rightFreeSpace = boxes[i + 1].rect.minX - boxes[i].rect.maxX
            } else {
                rightFreeSpace = rectWidth - boxes[i].rect.maxX
            }
            let layer = CATextLayer()
            layer.alignmentMode = .center
            layer.backgroundColor = #colorLiteral(red: 0, green: 0, blue: 0, alpha: 0.6669910282)
            layer.foregroundColor = #colorLiteral(red: 1, green: 1, blue: 1, alpha: 1)
            layer.string = boxes[i].text
            layer.font = UIFont(name: "Menlo", size: .zero)
            layer.fontSize = boxes[i].rect.height * 0.99
            while (boxes[i].text as NSString).size(withAttributes: [NSAttributedString.Key.font: UIFont(name: "Menlo", size: layer.fontSize)!]).width > (boxes[i].rect.width + rightFreeSpace + leftFreeSpace) || layer.fontSize > 14 {
                layer.fontSize *= 0.99
            }
            var missingWidth = layer.preferredFrameSize().width - boxes[i].rect.width
            if missingWidth > .zero {
                var leftAddSpace: CGFloat = .zero
                var rightAddSpace: CGFloat = .zero
                if leftFreeSpace >= missingWidth / 2 && rightFreeSpace >= missingWidth / 2 {
                    leftAddSpace = leftFreeSpace - missingWidth / 2
                    rightAddSpace = rightFreeSpace - missingWidth / 2
                } else if leftFreeSpace >= missingWidth / 2 {
                    missingWidth -= rightFreeSpace
                    leftAddSpace = missingWidth
                    rightAddSpace = rightFreeSpace
                } else if rightFreeSpace >= missingWidth / 2 {
                    missingWidth -= leftFreeSpace
                    rightAddSpace = missingWidth
                    leftAddSpace = leftFreeSpace
                }
                let newWidth = leftAddSpace + boxes[i].rect.width + rightAddSpace
                print(newWidth)
                let newX = boxes[i].rect.minX - ((leftAddSpace + rightAddSpace) / 2)
                layer.frame = CGRect(x: newX, y: boxes[i].rect.midY, width: newWidth, height: layer.preferredFrameSize().height)
            } else {
                layer.frame = CGRect(x: boxes[i].rect.minX, y: boxes[i].rect.minY, width: boxes[i].rect.width, height: layer.preferredFrameSize().height)
            }
            layer.cornerRadius = layer.bounds.height / 8
            layers.append(layer)
        }
        return layers
    }
}

