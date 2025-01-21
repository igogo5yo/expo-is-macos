#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ExpoIsMacOSModule, NSObject)
RCT_EXTERN_METHOD(isMacOS:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
@end
