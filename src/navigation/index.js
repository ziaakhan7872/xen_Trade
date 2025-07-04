import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation/AuthNavigation";

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthNavigation />
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