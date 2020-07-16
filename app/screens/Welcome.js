import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Facebook from 'expo-facebook';


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
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`);
        alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }
  console.log("welcome");
  return (
    <ImageBackground
      source={require("../assets/images/upathArt.png")}
      style={styles.imageBack}
    >
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
          placeholderTextColor="#fff5ee"
        />
        <TextInput
          style={styles.inpt}
          placeholder="  Password"
          placeholderTextColor="#fff5ee"
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
          onPress={this.facebookLogIn}
        >
          <Text style={styles.btnTxt}>Login with Facebook</Text>
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
    width: 100,
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
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
  btnTxt2: { alignSelf: "center", color: "gray" },
  inpt: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#fff5ee",
    color: "#fff5ee",
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
    color: "#fff5ee",
  },
});
