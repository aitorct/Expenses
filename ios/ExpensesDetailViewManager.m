//
//  ExpensesDetailViewManager.m
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"
#import "React/RCTComponentEvent.h"
#import "Expenses-Swift.h"

@interface ExpensesDetailViewManager : RCTViewManager
@end

@implementation ExpensesDetailViewManager

RCT_EXPORT_MODULE()


RCT_EXPORT_SWIFTUI_STRING_PROPERTY(merchant, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_STRING_PROPERTY(amount, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_STRING_PROPERTY(date, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_STRING_PROPERTY(userName, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_STRING_PROPERTY(userEmail, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_STRING_PROPERTY(comment, ExpensesDetailViewProxy);
RCT_EXPORT_SWIFTUI_CALLBACK(onReceiptsButtonPress, RCTBubblingEventBlock, ExpensesDetailViewProxy);

- (UIView *)view {
  ExpensesDetailViewProxy *proxy = [[ExpensesDetailViewProxy alloc] init];
  UIView *view = [proxy view];
  NSMutableDictionary *storage = [ExpensesDetailViewProxy storage];
  storage[[NSValue valueWithNonretainedObject:view]] = proxy;
  return view;
}

@end
