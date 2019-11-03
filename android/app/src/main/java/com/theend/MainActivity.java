package com.theend;

import com.facebook.react.ReactActivity;

<<<<<<< HEAD
import android.os.Bundle; // here
import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen; // here


public class MainActivity extends ReactActivity {
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
=======
public class MainActivity extends ReactActivity {

>>>>>>> 07401726b62b74ead77bd4eb6f04c3e3146034c4
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Theend";
  }
}
