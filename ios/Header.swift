//
//  Header.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 2/8/22.
//

import SwiftUI

struct Header: View {
  let merchant: String
  let amount: String
  let date: String
  
  init(_ merchant: String, _ amount: String, _ date: String) {
    self.merchant = merchant
    self.amount = amount
    self.date = date
  }
  
  var body: some View {
    VStack(spacing: .Sizes.s2) {
      Group {
        Text(amount).font(.system(size: .FontSizes.main, weight: .bold))
        Text(merchant).font(.system(size: .FontSizes.title))
        Text(date).font(.system(size: .FontSizes.largeText))
      }.foregroundColor(Color.Theme.text)
        .frame(maxWidth: .infinity, alignment: .leading)
    }
  }
}
