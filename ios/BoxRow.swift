//
//  BoxRow.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

struct BoxRow: View {
  let label: LocalizedStringKey
  let value: String
  let withDivider: Bool
  
  init(label: LocalizedStringKey, value: String) {
    self.label = label
    self.value = value
    self.withDivider = true
  }
  
  init(label: LocalizedStringKey, value: String, withDivider: Bool){
    self.label = label
    self.value = value
    self.withDivider = withDivider
  }
  
  var body: some View {
    VStack(spacing: 0) {
      HStack {
        Group {
          Text(label).font(.system(size: .FontSizes.text))
          Spacer()
          Text(value).font(.system(size: .FontSizes.largeText))
        }.foregroundColor(Color.Theme.text)
      }
      if(withDivider) {
        Divider().padding(.vertical, .Sizes.s8).foregroundColor(Color.Theme.subtitle)
      }
    }
  }
}
