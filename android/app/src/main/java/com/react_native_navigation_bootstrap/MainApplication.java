package com.react_native_navigation_bootstrap;


import android.support.annotation.NonNull;

import com.wix.interactable.Interactable;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;
import com.BV.LinearGradient.LinearGradientPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.theweflex.react.WeChatPackage;
import com.RNAlipay.RNAlipayPackage;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @NonNull
  @Override
  public List<ReactPackage> createAdditionalReactPackages() {
    // Add the packages you require here.
    // No need to add RnnPackage and MainReactPackage
    return Arrays.<ReactPackage>asList(
            new LinearGradientPackage(),
            new VectorIconsPackage(),
            new Interactable(),
            new WeChatPackage(),
            new RNAlipayPackage()
    );
  }

//  @Override
//  protected List<ReactPackage> getPackages() {
//    return Arrays.<ReactPackage>asList(
//            new MainReactPackage(),
//            new RNAlipayPackage(),
//            new WeChatPackage(),
//            new Interactable(),
//            new LinearGradientPackage() // <---- and This!
//    );
//  }
}
