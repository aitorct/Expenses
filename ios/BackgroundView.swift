//
//  BackgroundView.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

struct BackgroundView<Content: View>: View {
  let content: Content
  
  init(@ViewBuilder content: () -> Content) {
    self.content = content()
  }
  
  var body: some View {
    ZStack {
      Color.Theme.secondaryBackground
      content
    }
  }
}
