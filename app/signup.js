import { Image, View, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import SignupForm from "../components/SignUp/SignupForm";

const APP_LOGO = "../assets/university.png";

const SignupScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require(APP_LOGO)} style={{ width: 100, height: 100 }} />
      </View>

      <SignupForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingBottom: 50,
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

export default SignupScreen;
