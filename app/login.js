import { Image, View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import LoginForm from "../components/Login/LoginForm";

const APP_LOGO = "../assets/university.png";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require(APP_LOGO)} style={{ width: 200, height: 200 }} />
      </View>

      <LoginForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 10,
  },
});

export default LoginScreen;
