import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import WalletHome from '../../screens/App/Deposit/WalletHome';
import { settingMain } from '../../screens/App/Index';
import DepositHistory from '../../screens/App/DepositHistory/DepositHistory';
import * as App from '../../screens/Auth'


const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator  screenOptions={{ headerShown: false }}>
            <Screen name={Routes.WalletHome} component={WalletHome} />
            <Screen name={Routes.DepositHistory} component={DepositHistory} />
          
        </Navigator>
    );
};

export default AppNavigation;