import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  MainStackNavigator,
  LoginStackNavigator,
  ProfileStackNavigator,
} from "../navigation/StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackNavigator}></Drawer.Screen>
      <Drawer.Screen
        name="Login"
        component={LoginStackNavigator}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Profile"
        component={ProfileStackNavigator}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
