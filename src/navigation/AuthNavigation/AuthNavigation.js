import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import * as Auth from '../../screens/Auth'
import { Platform } from 'react-native';
const { Navigator, Screen } = createNativeStackNavigator();

const AuthNavigation = (props) => {
    // useEffect(() => {
    //     if (Platform.OS === 'ios') {
    //         props?.navigation?.navigate?.(Routes.splashScreen)
    //     }
    // }, [])

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {/* {Platform.OS ==="ios" &&
                        <Screen name={Routes.splashScreen} component={Auth.splashScreen} />

            } */}
            <Screen name={Routes.IntroductMainScreem} component={Auth.IntroductionMain} />
            <Screen name={Routes.LoginScreen} component={Auth.LoginScreen} />
            <Screen name={Routes.SignupScreen} component={Auth.SignupScreen} />
            <Screen name={Routes.EmailVerificationScreen} component={Auth.EmailVerificationScreen} />
            <Screen name={Routes.LoginVerificationScreen} component={Auth.LoginVerification} />
            <Screen name={Routes.ForgotPassword} component={Auth.ForgotPassword} />
            <Screen name={Routes.ChangePasswordForgot} component={Auth.ChangePasswordForgot} />
            <Screen name={Routes.EmailVerForgotPass} component={Auth.EmailVerForgotPass} />
        </Navigator>
    );
};

export default AuthNavigation;