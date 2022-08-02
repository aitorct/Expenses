//
//  Box.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

struct Box<Content: View>: View {
  let title: LocalizedStringKey
  let content: Content
  
  init(title: LocalizedStringKey, @ViewBuilder content: () -> Content) {
    self.title = title
    self.content = content()
  }
  
  var body: some View {
    VStack(alignment: .leading, spacing: 0) {
      Text(title)
        .font(.system(size: .FontSizes.smallText))
        .padding(.bottom, .Sizes.s8)
        .foregroundColor(Color.Theme.subtitle)
      content
    }.padding(.Sizes.s16)
      .frame(maxWidth: .infinity, alignment: .leading)
      .background(Color.Theme.background)
      .clipShape(RoundedRectangle(cornerRadius: .Sizes.s12))
  }
}
