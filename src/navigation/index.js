import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation/AuthNavigation";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from "../constants";
import AppNavigation from "./AppNavigation/AppNavigation";
import BottomNavigation from "./BottomNavigation/BottomNavigation";

const Navigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.AuthNavigator} component={AuthNavigation} />
        <Stack.Screen name={Routes.BottomNavigator} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
