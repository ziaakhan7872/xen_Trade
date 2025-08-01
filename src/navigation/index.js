import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "../constants";
import BottomNavigation from "./BottomNavigation/BottomNavigation";
import AppNavigation from "./AppNavigation/AppNavigation";
import { useSelector } from "react-redux";


const Navigation = () => {
  const Stack = createNativeStackNavigator()
  const { token, refreshToken } = useSelector((state) => state.user);

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {(refreshToken || token) ? (
          <>
            {/* <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} /> */}
            <Stack.Screen name={Routes.BottomNavigator} component={BottomNavigation} />
            <Stack.Screen name={Routes.AppNavigator} component={AppNavigation} />
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
