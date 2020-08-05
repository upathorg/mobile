import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Muli_300Light,
  Muli_400Regular,
  Muli_500Medium,
  Muli_600SemiBold,
  Muli_700Bold,
  Muli_900Black,
} from "@expo-google-fonts/muli";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from "expo-constants";
import { Header } from "react-native-elements";
export default function Welcome({ navigation }) {
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
      <View style={styles.imageBack}>
        {/* <Header
          leftComponent={{ icon: "menu", color: "#404040" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        /> */}
        <ScrollView style={styles.scroll}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/logo/upathLogo.png")}
              style={styles.logo}
            ></Image>
          </View>
          <View>
            <Text style={styles.title}>The Best Way to Learn & Grow</Text>
            <Image
              source={require("../assets/images/upathArt.png")}
              style={styles.img}
            ></Image>
            {/* <ImageBackground
        source={require("../assets/images/upathArt.png")}
        style={styles.imageBack}
      > */}
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              euismod, est a vehicula laoreet, nisl dolor tempor lectus, in
              ultricies metus sapien eu libero.
            </Text>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate("Register")}
            >
              <Text style={styles.btnTxt}>GET STARTED</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={styles.title}>HOW IT WORKS</Text>
            <View>
              <Text style={styles.title}>UPath</Text>
              <Image></Image>
              <Text style={styles.text}>
                Donec ac odio tempor orci dapibus. Feugiat nibh sed pulvinar
                proin. Et sollicitudin ac orci phasellus egestas tellus rutrum
                tellus. Pharetra convallis posuere morbi leo urna molestie at.
                Elementum facilisis leo vel fringilla est. Auctor neque vitae
                tempus quam.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Road Map</Text>
              <Image></Image>
              <Text style={styles.text}>
                Donec ac odio tempor orci dapibus. Feugiat nibh sed pulvinar
                proin. Et sollicitudin ac orci phasellus egestas tellus rutrum
                tellus. Pharetra convallis posuere morbi leo urna molestie at.
                Elementum facilisis leo vel fringilla est. Auctor neque vitae
                tempus quam.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Lesson Modules</Text>
              <Image></Image>
              <Text style={styles.text}>
                Donec ac odio tempor orci dapibus. Feugiat nibh sed pulvinar
                proin. Et sollicitudin ac orci phasellus egestas tellus rutrum
                tellus. Pharetra convallis posuere morbi leo urna molestie at.
                Elementum facilisis leo vel fringilla est. Auctor neque vitae
                tempus quam.
              </Text>
            </View>
            <View>
              <Text style={styles.title}>Mentorship</Text>
              <Image></Image>
              <Text style={styles.text}>
                Donec ac odio tempor orci dapibus. Feugiat nibh sed pulvinar
                proin. Et sollicitudin ac orci phasellus egestas tellus rutrum
                tellus. Pharetra convallis posuere morbi leo urna molestie at.
                Elementum facilisis leo vel fringilla est. Auctor neque vitae
                tempus quam.
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBack: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // justifyContent: "flex-end",
    // alignItems: "center",
    // backgroundColor: "#00000000",
  },
  scroll: { marginHorizontal: 20 },
  logoContainer: {
    alignSelf: "center",
  },
  logo: {
    width: 110,
    height: 110,
  },
  title: {
    width: "70%",
    textAlign: "center",
    color: "#404040",
    fontFamily: "Muli_700Bold",
    alignSelf: "center",
    fontSize: 25,
    margin: 32,
  },
  div: {
    width: "80%",
    top: -45,
  },
  img: {
    alignSelf: "center",
    width: 248,
    height: 332,
  },
  text: {
    fontFamily: "Muli_500Medium",
    color: "#404040",
    marginHorizontal: 23,
    fontSize: 15,
    marginTop: 25,
  },
  btn: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#9370db",
    borderRadius: 5,
    padding: 18,
    margin: 3,
    marginTop: 20,
  },
  btnTxt: {
    color: "#fff5ee",
    alignSelf: "center",
    fontFamily: "Muli_500Medium",
  },
});
