import React from "react";
import DrawerNavigator from "./app/navigation/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Header } from "react-native-elements";

const App = () => {
  return (
    <NavigationContainer>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        /* rightComponent={{ icon: "home", color: "#fff" }} */
      />
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
