package com.xen_trade

import android.os.Bundle
import org.devio.rn.splashscreen.SplashScreen
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "xen_Trade"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // Show splash screen when the app loads
    SplashScreen.show(this)

    // Optionally hide splash screen after a delay to simulate loading time
    // You can hide it as soon as the app is initialized
    // The following example hides the splash screen after a 2-second delay:

    // Handler to delay splash screen hiding
    android.os.Handler().postDelayed({
      // Hide splash screen once app is ready
      SplashScreen.hide(this)
    }, 6000) // 2000ms = 2 seconds
  }
}
