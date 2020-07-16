import React from "react";
import * as Google from "expo-google-app-auth";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Welcome({ navigation }) {
  console.log("welcome");
  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "881368790168-nbsmfbrfrtd19r9l3jk685uh3iava26d.apps.googleusercontent.com",
        iosClientId:
          "881368790168-k0rslls3il3h8uimevr0717u9rpiu43b.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        navigation.navigate("DashboardScreen");
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  return (
    <ImageBackground
      source={require("../assets/images/upathArt.png")}
      style={styles.imageBack}
    >
      {/* <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo/upathLogo.png")}
          style={styles.logo}
        ></Image>
      </View> */}

      <View style={styles.div}>
        <TextInput
          style={styles.inpt}
          placeholder="  Email"
          placeholderTextColor="#000000"
        />
        <TextInput
          style={styles.inpt}
          placeholder="  Password"
          placeholderTextColor="#000000"
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => navigation.navigate("DashboardScreen")}
        >
          <Text
            style={styles.btnTxt}
            // onPress={() => navigation.navigate("Login")}
          >
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={signInWithGoogleAsync}
        >
          <Text
            style={styles.btnTxt}
            // onPress={() => navigation.navigate("Login")}
          >
            Google Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnTxt2}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000000",
    opacity: 0.5,
  },
  div: {
    width: "70%",
    top: -35,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  txt: {
    top: 20,
  },
  btnTxt: {
    alignSelf: "center",
    color: "#fff5ee",
  },
  btnTxt2: { alignSelf: "center", color: "#000000" },
  inpt: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    borderRadius: 5,
    margin: 3,
  },
  btnLogin: {
    width: "100%",
    height: 50,
    backgroundColor: "#b9a2a2",
    borderRadius: 5,
    padding: 15,
    margin: 3,
    marginTop: 16,
  },
  btnRegister: {
    margin: 5,
  },
});
