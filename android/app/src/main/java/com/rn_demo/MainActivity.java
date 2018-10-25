package com.rn_demo;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;          //**********需要添加的************
import com.facebook.react.bridge.ReactContext;           //**********需要添加的************
import com.mehcode.reactnative.splashscreen.SplashScreen;//**********需要添加的************

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "rn_demo";
    }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
      // Show the js-controlled splash screen
      SplashScreen.show(this, getReactInstanceManager());  //**********需要添加的************

      super.onCreate(savedInstanceState);

  }

}
