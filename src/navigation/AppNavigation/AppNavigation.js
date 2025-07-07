import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import * as App from '../../screens/App/Index';


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.WalletHome} component={App.WalletHome} />
            <Screen name={Routes.DepositHistory} component={App.DepositHistory} />
            <Screen name={Routes.settingMain} component={App.settingMain} />
            <Screen name={Routes.settingProfile} component={App.settingProfile} />
            <Screen name={Routes.settingSecurity} component={App.settingSecurity} />
            <Screen name={Routes.twoFactorAuth} component={App.twoFactorAuth} />
            {/* <Screen name={Routes.WalletHome} component={WalletHome} />
            <Screen name={Routes.DepositHistory} component={DepositHistory} /> */}

        </Navigator>
    );
};

export default AppNavigation;