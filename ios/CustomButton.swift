//
//  CustomButton.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

struct CustomButton: View {
  let label: LocalizedStringKey
  let action: RCTDirectEventBlock
  
  var body: some View {
    Button(label) {
      action([:])
    }
    .font(.system(size: .FontSizes.title))
    .foregroundColor(Color.black)
    .padding(.horizontal, .Sizes.s16)
    .padding(.vertical, .Sizes.s8)
    .background(Color.Theme.buttonBackground)
    .clipShape(RoundedRectangle(cornerRadius: .Sizes.s12))
  }
}
