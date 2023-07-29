import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { auth, db } from "../../firebase";

const loginFormSchema = Yup.object().shape({
  fullname: Yup.string()
    .required()
    .min(2, "Your full name must be at least 2 characters"),
  email: Yup.string().email().required("An email is required"),
  username: Yup.string()
    .required()
    .min(2, "Your username must be at least 2 characters"),
  password: Yup.string()
    .required()
    .min(8, "Your password must have at least 8 characters"),
  phoneno: Yup.string().required(),
});

const getRandomProfilePicture = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  return data.results[0].picture.large;
};

const onSignup = async (values) => {
  try {
    const authUser = await auth.createUserWithEmailAndPassword(
      values.email,
      values.password
    );

    await db
      .collection("users")
      .doc(authUser.user.email)
      .set({
        owner_uid: authUser.user.uid,
        fullname: values.fullname,
        username: values.username,
        phoneno: values.phoneno,
        email: authUser.user.email,
        profilePicture: await getRandomProfilePicture(),
      });

    Alert.alert("Firebase sign up successful", values.email);
  } catch (error) {
    Alert.alert("Error", error.message);
  }
};

const LoginForm = () => {
  const [animating, setAnimating] = useState(false);

  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <ActivityIndicator
          animating={animating}
          color="#bc2b78"
          size="large"
          style={styles.activityIndicator}
        />
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            username: "",
            phoneno: "",
            password: "",
          }}
          onSubmit={(values) => {
            setAnimating(true);
            onSignup(values);
          }}
          validationSchema={loginFormSchema}
          validateOnMount={true}
        >
          {({
            handleBlur,
            handleSubmit,
            handleChange,
            values,
            errors,
            isValid,
          }) => (
            <>
              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.fullname.length < 1 || values.fullname.length >= 2
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderColor="#444"
                  placeholder="Full Name"
                  autoCapitalize="none"
                  autoFocus={true}
                  onChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  value={values.fullname}
                />
                {errors.fullname && (
                  <Text style={styles.errorMessage}>{errors.fullname}</Text>
                )}
              </View>

              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderColor="#444"
                  placeholder="Email"
                  autoCapitalize="none"
                  textContentType="emailAddress"
                  autoFocus={true}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                {errors.email && (
                  <Text style={styles.errorMessage}>{errors.email}</Text>
                )}
              </View>

              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.username.length < 1 || values.username.length >= 2
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderColor="#444"
                  placeholder="Username"
                  autoCapitalize="none"
                  autoFocus={true}
                  onChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  value={values.username}
                />
                {errors.username && (
                  <Text style={styles.errorMessage}>{errors.username}</Text>
                )}
              </View>

              <View
                style={[
                  styles.inputField,
                  {
                    borderColor:
                      values.phoneno.length < 1 || values.phoneno.length >= 2
                        ? "#ccc"
                        : "red",
                  },
                ]}
              >
                <TextInput
                  placeholderColor="#444"
                  placeholder="Phone Number"
                  autoCapitalize="none"
                  autoFocus={true}
                  onChangeText={handleChange("phoneno")}
                  onBlur={handleBlur("phoneno")}
                  value={values.phoneno}
                />
                {errors.phoneno && (
                  <Text style={styles.errorMessage}>{errors.phoneno}</Text>
                )}
              </View>

              <View
                style={[
                  styles.inputField,
                  {
                    borderColor: values.password.length < 8 ? "red" : "#ccc",
                  },
                ]}
              >
                <TextInput
                  placeholderColor="#444"
                  placeholder="Password"
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && (
                  <Text style={styles.errorMessage}>{errors.password}</Text>
                )}
              </View>

              <Pressable
                onPress={handleSubmit}
                style={styles.button(isValid)}
                disabled={!isValid}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>

              <View style={styles.signUpContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => useRouter.goBack()}>
                  <Text style={{ color: "#0096F6" }}> Log In</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    backgroundColor: " #FAFAFA",
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 10,
    padding: 12,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: { color: "white", fontSize: 20, fontWeight: "600" },
  signUpContainer: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  errorMessage: {
    color: "red",
  },
});

export default LoginForm;
