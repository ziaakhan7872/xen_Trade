import './shim';
import './globals';
import 'react-native-get-random-values';
import 'whatwg-fetch';
import React, { useEffect, useState } from 'react';
import BootSplash from "react-native-bootsplash";
import { LogBox } from 'react-native';
import Navigation from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';
import { enableScreens } from 'react-native-screens';
import { colors } from './src/constants';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import Toast from 'react-native-toast-message';
import { ToastConfig } from './src/components/ToastConfig';
import { Camera } from 'react-native-vision-camera';
import { SocketProvider } from './src/Backend/SocketContextProvider/Socket';
import { AssetsComponent, BuyForm, CurrentOrderComponent, FavoutiteBottomSheetComponnet, OrderBookForm, SellForm } from './src/screens/App/Exchange/ExchangeScreen/Component/LazyComponnet';

enableScreens(false);

const App = () => {

   useEffect(() => {
    // preload chunks when app starts
    BuyForm.preload();
    SellForm.preload();
    CurrentOrderComponent.preload();
    AssetsComponent.preload();
    FavoutiteBottomSheetComponnet.preload();
    OrderBookForm.preload();
  }, []);

  useEffect(() => {
    LogBox.ignoreAllLogs();

    // Hide splash after 4s
    setTimeout(() => {
      BootSplash.hide({ fade: true });
    }, 4000);

    const requestPermissions = async () => {
      const permission = await Camera.requestCameraPermission();
    };

    requestPermissions();

  }, []);




  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.black }}>
      <Host>
        <Provider store={store}>
          <SocketProvider>
            <PersistGate loading={null} persistor={persistor}>
              <Navigation />
              <Toast config={ToastConfig} />
            </PersistGate>
          </SocketProvider>

        </Provider>
      </Host>
    </GestureHandlerRootView>
  );
};

export default App;
