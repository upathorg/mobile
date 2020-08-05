import React, { useState, useEffect } from "react";
import { CheckBox } from "react-native-elements";
import { AppLoading } from "expo";
import {
  useFonts,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
} from "@expo-google-fonts/muli";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Register({ navigation }) {
  const [nameDisplayed, setName] = useState("");
  const [LastnameDisplayed, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState("");
  const [checkd, setCheck] = useState(false);

  const validate = () => {
    if (
      nameDisplayed.length > 3 &&
      LastnameDisplayed.length > 3 &&
      email.length > 6 &&
      password.lenght >= 8
    ) {
      return setFormValid(true);
    } else {
      return setFormValid(false);
    }
  };

  React.useEffect(() => {
    validate(), [isFormValid];
  });

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
    return (
      <View style={styles.bigDiv}>
        <View style={styles.div}>
          <Text style={styles.title}>let's go!</Text>
          <TextInput
            style={styles.inpt}
            placeholder="First Name*"
            value={nameDisplayed}
            placeholderTextColor="#000000"
            onChangeText={(name) => {
              setName(name), validate;
            }}
          />
          <TextInput
            style={styles.inpt}
            placeholder="Last Name*"
            value={LastnameDisplayed}
            placeholderTextColor="#000000"
            onChangeText={(name) => {
              setLastName(name), validate;
            }}
          />
          <TextInput
            style={styles.inpt}
            placeholder="E-mail*"
            value={email}
            placeholderTextColor="#000000"
            onChangeText={(em) => {
              setEmail(em), validate;
            }}
          />
          <TextInput
            style={styles.inpt}
            placeholder="Confirm E-mail*"
            value={confirmEmail}
            placeholderTextColor="#000000"
            onChangeText={(em) => {
              setConfirmEmail(em), validate;
            }}
          />
          <TextInput
            style={styles.inpt}
            placeholder="Password*"
            value={password}
            placeholderTextColor="#000000"
            secureTextEntry={true}
            onChangeText={(pas) => {
              setPass(pas), validate;
            }}
          />

          <CheckBox
            style={styles.checkBox}
            center
            title="Terms and Conditions"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checkd}
          ></CheckBox>

          <TouchableOpacity
            style={styles.btnLogin}
            disabled={isFormValid}
            // onsubmit={handleSubmit}
          >
            <Text style={styles.btnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={styles.btnTxt2}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigDiv: { flex: 1, justifyContent: "center", alignItems: "center" },
  div: {
    width: "80%",
    // top: -45,
  },
  title: {
    fontFamily: "Muli_700Bold",
    fontSize: 40,
    margin: 30,
    alignSelf: "center",
  },
  inpt: {
    width: "100%",
    fontFamily: "Muli_300Light",
    borderWidth: 0.3,
    borderColor: "#000000",
    borderRadius: 5,
    padding: 17,
    margin: 3,
  },
  btnLogin: {
    width: "100%",
    backgroundColor: "#9370db",
    borderRadius: 5,
    padding: 18,
    margin: 3,
    marginTop: 20,
  },
  btnTxt: {
    fontFamily: "Muli_500Medium",
    alignSelf: "center",
    color: "#fff5ee",
  },
  terms: {
    fontFamily: "Muli_300Light",
    marginTop: 25,
    marginBottom: 10,
  },
  btnTxt2: {
    alignSelf: "center",
    fontFamily: "Muli_300Light",
    color: "#000000",
    margin: 5,
  },
  checkBox: {
    color: "#000000",
    backgroundColor: "gray",
  },
});
