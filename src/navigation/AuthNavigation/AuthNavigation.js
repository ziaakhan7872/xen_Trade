import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import * as Auth from '../../screens/Auth'
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.splashScreen} component={Auth.splashScreen} />
            <Screen name={Routes.loginMainScreen} component={Auth.loginMainScreen} />
            <Screen name={Routes.welcome} component={Auth.Welcome} />
        </Navigator>
    );
};

export default AuthNavigation;






