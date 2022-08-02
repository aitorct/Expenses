//
//  NativeCamera.m
//  Expenses
//
//  Created by Aitor Cubeles Torres on 29/7/22.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NativeCamera, NSObject)
RCT_EXTERN_METHOD(takePhoto:
  (RCTPromiseResolveBlock) resolve
  reject: (RCTPromiseRejectBlock)
)

RCT_EXTERN_METHOD(isPermissionGranted:
  (RCTPromiseResolveBlock) resolve
  reject: (RCTPromiseRejectBlock)
)

RCT_EXTERN_METHOD(requestPermission:
  (RCTPromiseResolveBlock) resolve
  reject: (RCTPromiseRejectBlock)
)
@end
