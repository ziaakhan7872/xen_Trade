import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import WalletHome from '../../screens/App/Deposit/WalletHome';
import { settingMain } from '../../screens/App/Index';
import DepositHistory from '../../screens/App/DepositHistory/DepositHistory';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.settingMain} component={App.settingMain} />
            <Screen name={Routes.settingProfile} component={App.settingProfile} />
            <Screen name={Routes.WalletHome} component={WalletHome} />
            <Screen name={Routes.DepositHistory} component={DepositHistory} />
        </Navigator>
    );
};

export default AppNavigation;