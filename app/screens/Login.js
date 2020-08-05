import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
} from "@expo-google-fonts/muli";
import { FontAwesome } from "@expo/vector-icons";
import * as Google from "expo-google-app-auth";
import * as Facebook from "expo-facebook";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState("");

  handleChangeEmail = (value) => {
    setEmail(value);
    //alert(email);
  };

  handleChangePass = (value) => {
    if (value.length >= 6) {
      setPassword(password);
    }
  };

  handleSubmit = () => {
    if (password.length === 6 && email >= 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  let [fontsLoaded] = useFonts({
    Muli_300Light,
    Muli_400Regular,
    Muli_500Medium,
    Muli_600SemiBold,
    Muli_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    //Facebook Login Function
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

    // Google Login Function

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
        <View style={styles.div}>
          <Text style={styles.title}>let's go!</Text>
          <TextInput
            style={styles.inpt}
            placeholder="Email*"
            value={email}
            placeholderTextColor="#000000"
            onChangeText={handleChangeEmail}
          />
          <TextInput
            style={styles.inpt}
            placeholder="Password*"
            value={password}
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={handleChangePass}
          />
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnTxt2}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnLogin}
            // disabled={valid}
            // onsubmit={handleSubmit}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Text style={styles.btnTxt}>LOGIN</Text>
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
          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.btnTxt2}>
              Don't have an account? Sign up here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000000",
  },
  title: {
    fontFamily: "Muli_700Bold",
    fontSize: 40,
    margin: 30,
    alignSelf: "center",
  },
  img: {
    //flex: 1,
    width: 260,
    height: 350,
    top: -200,
    right: 10,
  },
  div: {
    width: "80%",
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
    fontFamily: "Muli_500Medium",
    alignSelf: "center",
    color: "#fff5ee",
  },
  btnTxt2: {
    alignSelf: "center",
    color: "#000000",
    fontFamily: "Muli_300Light",
  },
  inpt: {
    width: "100%",
    fontFamily: "Muli_300Light",
    borderWidth: 0.3,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 17,
    margin: 10,
  },
  btnLogin: {
    width: "100%",
    height: 45,
    backgroundColor: "#9370db",
    borderRadius: 5,
    padding: 14,
    margin: 3,
    marginTop: 20,
  },
  btnFc: {
    borderRadius: 5,
    fontFamily: "Muli_500Medium",
    padding: 13,
    justifyContent: "center",
    height: 45,
    backgroundColor: "#c94131",
    margin: 3,
  },
  btnGoo: {
    borderRadius: 5,
    fontFamily: "Muli_500Medium",
    padding: 13,
    justifyContent: "center",
    height: 45,
    backgroundColor: "#3b5998",
    margin: 3,
  },
  btnRegister: {
    margin: 8,
  },
});
