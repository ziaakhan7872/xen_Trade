import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import * as App from '../../screens/App/Index'

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator  screenOptions={{ headerShown: false }}>
            <Screen name={Routes.WalletHome} component={App.WalletHome} />
            <Screen name={Routes.settingMain} component={App.settingMain} />

        </Navigator>
    );
};

export default AppNavigation;