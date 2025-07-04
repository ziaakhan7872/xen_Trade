import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "../constants";
import AppNavigation from "./AppNavigation/AppNavigation";

const Navigation = () => {
  const Stack = createNativeStackNavigator()
    return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />
        <Stack.Screen name={Routes.AppNavigator} component={AppNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};

export default Navigation;

// import { NavigationContainer } from "@react-navigation/native";
// import AuthNavigation from "./AuthNavigation/AuthNavigation";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Routes } from "../constants";
// import { useEffect } from "react";
// // import { useSelector } from 'react-redux';

//    const { Navigator, Screen } = createNativeStackNavigator();

   
// const Navigation = () => {
//     // const appLanguage = useSelector(state => state.userdataReducer.getAppLanguage);
//     useEffect(() => {
//         // if (appLanguage) {
//         //     // i18next.changeLanguage(appLanguage);
//         // }
//     }, [])

//     return (


//         <NavigationContainer>
//             <Navigator screenOptions={{ headerShown: false, navigationBarColor: "#100D26" }}
//                 initialRouteName={Routes.splashScreen}>
//                 <Screen name={Routes.splashScreen} component={AuthNavigation} />
//                 <Screen name={Routes.loginMainScreen} component={AuthNavigation} />
//                 {/* <Screen name={Routes.appStack} component={AppNavigation} /> */}

//             </Navigator>
//         </NavigationContainer>

//     )
// }
// export default Navigation