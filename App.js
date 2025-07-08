import './shim';
import './globals';
import 'react-native-get-random-values';
import 'whatwg-fetch';
import React, { useEffect } from 'react'
// import Navigation from './src/navigation'
import BootSplash from "react-native-bootsplash";
import { LogBox, View } from 'react-native';
import Navigation from './src/navigation';
// import { Provider } from 'react-redux';
// import { store } from './src/redux/store';

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs()


    setTimeout(() => {
      BootSplash.hide()
    }, 2000);



  }, [])
  return (

    <View style={{ flex: 1 }}>
      <Navigation />
      {/* <Provider 
      >
      </Provider> */}
    </View>

  )
}

export default App 