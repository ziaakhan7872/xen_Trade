import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import WalletHome from '../../screens/App/Deposit/WalletHome';
import DepositHistory from '../../screens/App/DepositHistory/DepositHistory';
import * as App from '../../screens/App/Index'


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.WalletHome} component={App.WalletHome} />
            <Screen name={Routes.DepositHistory} component={App.DepositHistory} />
            <Screen name={Routes.settingMain} component={App.settingMain} />
            <Screen name={Routes.settingProfile} component={App.settingProfile} />
            
        </Navigator>
    );
};

export default AppNavigation;