import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
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
  const id = "591468395094095";
  facebookLogIn = async () => {
    try {
      await Facebook.initializeAsync(id);
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`
        );
        alert("Logged in!", `Hi ${(await response.json()).name}!`);
        navigation.navigate("DashboardScreen");
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };
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
    <View style={styles.imageBack}>
      <Image
        source={require("../assets/images/upathArt.png")}
        style={styles.img}
      ></Image>
      {/* <ImageBackground
        source={require("../assets/images/upathArt.png")}
        style={styles.imageBack}
      > */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo/upathLogo.png")}
          style={styles.logo}
        ></Image>
      </View>

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
          // onPress={() => navigation.navigate("DashboardScreen")}
        >
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>
        <FontAwesome.Button
          name="google"
          style={styles.btnFc}
          backgroundColor={"#f5f5f5"}
          onPress={signInWithGoogleAsync}
        >
          <Text style={styles.btnTxt}>Login with Google</Text>
        </FontAwesome.Button>

        <FontAwesome.Button
          name="facebook"
          style={styles.btnGoo}
          backgroundColor={"#ffffff"}
          onPress={facebookLogIn}
        >
          <Text style={styles.btnTxt}>Login with Facebook</Text>
        </FontAwesome.Button>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.btnTxt2}>Already have an account?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#00000000",
  },
  img: {
    //flex: 1,
    width: 260,
    height: 350,
    top: -200,
    right: 10,
  },
  div: {
    width: "70%",
    top: -45,
  },
  logoContainer: {
    position: "absolute",
    top: 330,
    alignItems: "center",
  },
  logo: {
    width: 115,
    height: 115,
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
    height: 45,
    backgroundColor: "#9370db",
    borderRadius: 5,
    padding: 15,
    margin: 3,
    marginTop: 20,
  },
  btnFc: {
    borderRadius: 5,
    padding: 13,
    justifyContent: "center",
    height: 45,
    backgroundColor: "#3b5998",
    margin: 3,
  },
  btnGoo: {
    borderRadius: 5,
    padding: 13,
    justifyContent: "center",
    height: 45,
    backgroundColor: "#c94131",
    margin: 3,
  },
  btnRegister: {
    margin: 5,
  },
});
