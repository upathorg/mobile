import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "../screens/Register";
import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ title: "Account Sign up" }}
      />
    </Stack.Navigator>
  );
};

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, LoginStackNavigator, ProfileStackNavigator };
