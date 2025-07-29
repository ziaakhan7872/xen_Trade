import './shim';
import './globals';
import 'react-native-get-random-values';
import 'whatwg-fetch';
import React, { useEffect } from 'react';
import BootSplash from "react-native-bootsplash";  // Ensure BootSplash is imported
import { LogBox, View } from 'react-native';
import Navigation from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { enableScreens } from 'react-native-screens';
import { colors } from './src/constants';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
enableScreens(false); // Disable optimized screens

const App = () => {
  useEffect(() => {
    // Disable any unnecessary warnings
    LogBox.ignoreAllLogs();

    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 5000);

  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.black }}>
      <Host>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
      </Host>
    </GestureHandlerRootView>
  );
}

export default App;
