//
//  ExpensesDetailView.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

import SwiftUI

class ExpensesDetailViewProps : ObservableObject {
  @Published var merchant: String = ""
  @Published var amount: String = ""
  @Published var date: String = ""
  @Published var userName: String = ""
  @Published var userEmail: String = ""
  @Published var comment: String = ""
  @Published var onReceiptsButtonPress: RCTDirectEventBlock = { _ in }
}

struct ExpensesDetailView: View {
  @ObservedObject var props = ExpensesDetailViewProps()
  
  var body: some View {
    BackgroundView {
      VStack(alignment: .leading, spacing: .Sizes.s36) {
        Header(props.merchant, props.amount, props.date)
        VStack(alignment: .leading, spacing: .Sizes.s16) {
          Box(title: "spent_by") {
            BoxRow(label: "name", value: props.userName)
            BoxRow(label: "email", value: props.userEmail, withDivider: false)
          }
          if(!props.comment.isEmpty){
            Box(title: "comment") {
              Text(props.comment).font(.system(size: .FontSizes.largeText))
            }
          }
        }
        Spacer()
        HStack(alignment: .center) {
          CustomButton(label: "share_transaction", action: props.onReceiptsButtonPress)
        }.frame(maxWidth: .infinity)
      }
      .padding(.vertical, .Sizes.s24)
      .padding(.horizontal, .Sizes.s16)
    }
  }
}
