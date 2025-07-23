import './shim';
import './globals';
import 'react-native-get-random-values';
import 'whatwg-fetch';
import React, { useEffect } from 'react'
// import Navigation from './src/navigation'
import BootSplash from "react-native-bootsplash";
import { LogBox, View } from 'react-native';
import Navigation from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';
import { enableScreens } from 'react-native-screens';
enableScreens(false); // Disable optimized screens

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs()


    setTimeout(() => {
      BootSplash.hide()
    }, 2000);



  }, [])
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <Navigation />

      </Host>
      {/* <Provider 
      >
      </Provider> */}
    </GestureHandlerRootView>

  )
}

export default App 