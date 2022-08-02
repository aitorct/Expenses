//
//  UIColor+ThemeColors.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

extension Color {
  private static let white = Color(white: 1)
  private static let offwhite = Color(red: 0.95, green: 0.96, blue: 0.96)
  private static let black = Color(white: 0)
  private static let argent = Color(red: 0.54, green: 0.53, blue: 0.53)
  private static let darkGrayishBlue = Color(red: 0.91, green: 0.94, blue: 0.98)
  
  enum Theme {
    static var text = black
    static var background = offwhite
    static var secondaryBackground = white
    static var subtitle = argent
    static var buttonBackground = darkGrayishBlue
  }
}
