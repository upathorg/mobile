//import { StatusBar } from 'expo-status-bar';
import React from "react";
import Register from "./app/screens/Register";
import Welcome from "./app/screens/Welcome";
import DashboardScreen from "./app/screens/DashboardScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Register" component={Register} />
        <Screen name="DashboardScreen" component={DashboardScreen} />
      </Navigator>
    </NavigationContainer>
  );
}
