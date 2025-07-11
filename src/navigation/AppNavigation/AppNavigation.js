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
            <Screen name={Routes.settingProfile} component={App.SettingProfile} />
            <Screen name={Routes.settingSecurity} component={App.settingSecurity} />
            <Screen name={Routes.twoFactorAuth} component={App.twoFactorAuth} />
            <Screen name={Routes.changePassword} component={App.changePassword} />
            <Screen name={Routes.antiPhishingCode} component={App.antiPhishingCode} />
            <Screen name={Routes.SelectNetwork} component={App.SelectNetwork} />
            <Screen name={Routes.Barcode} component={App.Barcode} />
            <Screen name={Routes.settingSystem} component={App.SettingSystem} />
            <Screen name={Routes.addressBook} component={App.AddressBook} />
            <Screen name={Routes.addressDetailsExpanded} component={App.AddressDetailsExpanded} />
            <Screen name={Routes.addNewAddress} component={App.AddNewAddress} />
            <Screen name={Routes.settingEmailNotification} component={App.SettingEmailNotification} />
            <Screen name={Routes.Home} component={App.HomeScreen} />
        </Navigator>
    );
};

export default AppNavigation;