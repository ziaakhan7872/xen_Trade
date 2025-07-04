import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import * as Auth from '../../screens/Auth'
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name={Routes.splashScreen} component={Auth.splashScreen} />
            <Screen name={Routes.IntroductMainScreem} component={Auth.IntroductionMain} />
            <Screen name={Routes.LoginScreen} component={Auth.LoginScreen} />
            <Screen name={Routes.SignupScreen} component={Auth.SignupScreen} />

        </Navigator>
    );
};

export default AuthNavigation;