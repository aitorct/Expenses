//
//  Use this file to import your target's public headers that you would like to expose to Swift.
//

#import "React/RCTBridgeModule.h"
#import "React/RCTViewManager.h"
#import "React/RCTComponentData.h"

// Adapted from https://betterprogramming.pub/react-native-meets-swiftui-d1606a8e1681

#define RCT_EXPORT_SWIFTUI_STRING_PROPERTY(name, proxyClass)                                                \
RCT_REMAP_VIEW_PROPERTY(name, __custom__, string)                                                           \
- (void)set_##name:(id)json forView:(UIView *)view withDefaultView:(UIView *)defaultView RCT_DYNAMIC {      \
  NSMutableDictionary *storage = [proxyClass storage];                                                      \
  proxyClass *proxy = storage[[NSValue valueWithNonretainedObject:view]];                                   \
  proxy.name = json;                                                                                        \
}

#define RCT_EXPORT_SWIFTUI_PROPERTY(name, type, proxyClass)                                                 \
RCT_REMAP_VIEW_PROPERTY(name, __custom__, type)                                                             \
- (void)set_##name:(id)json forView:(UIView *)view withDefaultView:(UIView *)defaultView RCT_DYNAMIC {      \
  NSMutableDictionary *storage = [proxyClass storage];                                                      \
  proxyClass *proxy = storage[[NSValue valueWithNonretainedObject:view]];                                   \
  proxy.name = [json type##Value];                                                                          \
}

#define RCT_EXPORT_SWIFTUI_CALLBACK(name, type, proxyClass)                                                 \
RCT_REMAP_VIEW_PROPERTY(name, __custom__, type)                                                             \
- (void)set_##name:(id)json forView:(UIView *)view withDefaultView:(UIView *)defaultView RCT_DYNAMIC {      \
  NSMutableDictionary *storage = [proxyClass storage];                                                      \
  proxyClass *proxy = storage[[NSValue valueWithNonretainedObject:view]];                                   \
  void (^eventHandler)(NSDictionary *event) = ^(NSDictionary *event) {                                      \
  RCTComponentEvent *componentEvent = [[RCTComponentEvent alloc] initWithName:@""#name                      \
                                                                        viewTag:view.reactTag               \
                                                                           body:event];                     \
    [self.bridge.eventDispatcher sendEvent:componentEvent];                                                 \
  };                                                                                                        \
  proxy.name = eventHandler;                                                                                \
}

