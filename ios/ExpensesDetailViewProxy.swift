//
//  ExpensesDetailViewProxy.swift
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

import SwiftUI

@objcMembers class ExpensesDetailViewProxy: NSObject {
  private var vc = UIHostingController(rootView: ExpensesDetailView())
  
  static let storage = NSMutableDictionary()
  
  var merchant: String {
    set { vc.rootView.props.merchant = newValue }
    get { return vc.rootView.props.merchant }
  }
  
  var amount: String {
    set { vc.rootView.props.amount = newValue }
    get { return vc.rootView.props.amount }
  }
  
  var date: String {
    set { vc.rootView.props.date = newValue }
    get { return vc.rootView.props.date }
  }
  
  var userName: String {
    set { vc.rootView.props.userName = newValue }
    get { return vc.rootView.props.userName }
  }
  
  var userEmail: String {
    set { vc.rootView.props.userEmail = newValue }
    get { return vc.rootView.props.userEmail }
  }
  
  var comment: String {
    set { vc.rootView.props.comment = newValue }
    get { return vc.rootView.props.comment }
  }
  
  var onReceiptsButtonPress: RCTBubblingEventBlock {
    set { vc.rootView.props.onReceiptsButtonPress = newValue }
    get { return vc.rootView.props.onReceiptsButtonPress }
  }
  
  var view: UIView {
    return vc.view
  }
}
