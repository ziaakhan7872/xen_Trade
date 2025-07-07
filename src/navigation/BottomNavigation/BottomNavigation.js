import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, Routes } from '../../constants';
import * as App from '../../screens/App/Index';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons or another icon set
import AntDesign from 'react-native-vector-icons/AntDesign'; // Import Ionicons or another icon set
import { Image, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { hp, wp } from '../../components/ResponsiveComponent';
import images from '../../images';
import Spacer from '../../components/Spacer';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    paddingTop: hp(0.9),
                    backgroundColor: colors.bottomTabColor, 
                    borderTopWidth: 0,
                },
                tabBarActiveTintColor: colors.mainColor,
                tabBarInactiveTintColor: colors.iconColor,
            }}
        >
            <Screen
                name={Routes.Home}
                component={App.HomeScreen}
                options={{
                    tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp(18),
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={images.home}
                                style={[styles.iconSize, { tintColor: focused ? colors.mainColor : colors.iconColor }]}
                                resizeMode={'contain'}
                            />
                            <Spacer height={hp(0.7)}/>
                            {/* <Text style={{ color: focused ? colors.mainColor : colors.iconColor, fontSize: 10 }} numberOfLines={1}>
                                Home
                            </Text> */}
                        </View>
                    ),
                    tabBarLabel: 'Home', // Remove the default label for this tab
                }}
            />
            <Screen
                name={Routes.MarketScreen}
                component={App.MarketScreen}
                options={{
                     tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp(18),
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={images.market}
                                style={[styles.iconSize, { tintColor: focused ? colors.mainColor : colors.iconColor }]}
                                resizeMode={'contain'}
                            />
                            <Spacer height={hp(0.7)}/>
                            
                        </View>
                    ),
                     tabBarLabel: 'Markets',// Remove the default label for this tab
                }}
            />
            <Screen
                name={Routes.ExchangeScreen}
                component={App.Exchangescreen}
                options={{
                     tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp(18),
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={images.Exchange}
                                style={[styles.iconSize, { tintColor: focused ? colors.mainColor : colors.iconColor }]}
                                resizeMode={'contain'}
                            />
                            <Spacer height={hp(0.7)}/>
                            
                        </View>
                    ),
                     tabBarLabel: 'Exchange',// Remove the default label for this tab
                }}
            />
             <Screen
                name={Routes.WalletScreen}
                component={App.WalletScreen}
                options={{
                     tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp(18),
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={images.Wallet}
                                style={[styles.iconSize, { tintColor: focused ? colors.mainColor : colors.iconColor }]}
                                resizeMode={'contain'}
                            />
                            <Spacer height={hp(0.7)}/>
                            
                        </View>
                    ),
                     tabBarLabel: 'Wallets',// Remove the default label for this tab
                }}
            />
                         <Screen
                name={Routes.settingMain}
                component={App.settingMain}
                options={{
                     tabBarButton: (props) => (
                        <TouchableOpacity
                            {...props}
                            activeOpacity={1}
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: wp(18),
                            }}
                        />
                    ),
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={images.Setting}
                                style={[styles.iconSize, { tintColor: focused ? colors.mainColor : colors.iconColor }]}
                                resizeMode={'contain'}
                            />
                            <Spacer height={hp(0.7)}/>
                            
                        </View>
                    ),
                     tabBarLabel: 'Settings',// Remove the default label for this tab
                }}
            />
        </Navigator>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({
    iconSize: {
        width: wp(7.5),
        height: wp(6.5),
        alignSelf: 'center',
    },
});
