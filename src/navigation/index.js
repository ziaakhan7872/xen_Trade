import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "../constants";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import AppNavigation from "./AppNavigation/AppNavigation";
import { useSelector } from "react-redux";
import { navigationRef } from "./NavigationService/NavigationService";
import { Platform } from "react-native";
import SplashScreen from "../screens/Auth/Splash/SplashScreen";


const Navigation = () => {
  const Stack = createNativeStackNavigator()
  const { token, refreshToken } = useSelector((state) => state.user);
  const initialRoute = Platform.OS === 'ios' ? Routes.splashScreen : undefined;


  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}>
        {Platform?.OS === "ios" &&
          <Stack.Screen name={Routes.splashScreen} component={SplashScreen} />
        }
        {(refreshToken || token) ? (
          <>
            <Stack.Screen name={Routes.BottomNavigator} component={BottomNavigation} />
            <Stack.Screen name={Routes.AppNavigator} component={AppNavigation} />
            <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />

          </>
        ) : (
          <>
            <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />
            <Stack.Screen name={Routes.BottomNavigator} component={BottomNavigation} />
            <Stack.Screen name={Routes.AppNavigator} component={AppNavigation} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
