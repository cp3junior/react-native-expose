#import "AppDelegate.h"
#import "RCCManager.h"
#import <React/RCTRootView.h>
//#import "../Libraries/RCTLinking/RCTLinkingManager.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;
#ifdef DEBUG
    // jsCodeLocation = [NSURL URLWithString:@"http://192.168.1.100:8081/index.ios.bundle?platform=ios&dev=true"];
  jsCodeLocation = [NSURL URLWithString:@"http://10.139.49.115:8081/index.ios.bundle?platform=ios&dev=true"];
   // jsCodeLocation = [NSURL URLWithString:@"http://172.29.221.12:8081/index.ios.bundle?platform=ios&dev=true"];
   //vpn
   // jsCodeLocation = [NSURL URLWithString:@"http://172.29.221.12:8081/index.ios.bundle?platform=ios&dev=true"];
	// jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
#else
  jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
  
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  self.window.backgroundColor = [UIColor whiteColor];
  [[RCCManager sharedInstance] initBridgeWithBundleURL:jsCodeLocation];
  
  return YES;
}

//- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
//  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
//{
//  return [RCTLinkingManager application:application openURL:url
//                      sourceApplication:sourceApplication annotation:annotation];
//}

@end
