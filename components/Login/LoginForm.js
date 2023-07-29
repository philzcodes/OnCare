import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { auth } from "../../firebase";
import { useRouter } from "expo-router";

const loginFormSchema = Yup.object().shape({
  email: Yup.string().email().required("An email is required"),
  password: Yup.string()
    .required()
    .min(8, "Your password must have atleast 8 characters"),
});

const LoginForm = () => {
  const [animating, setAnimating] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const router = useRouter();

  const onLogin = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAnimating(false);
      console.log("Firebase Login successfull", email, password);
    } catch (error) {
      Alert.alert("Error", error.message);
      setAnimating(false);
      console.log("Error", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <ActivityIndicator
        animating={animating}
        color="#bc2b78"
        size="large"
        style={styles.activityIndicator}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          setAnimating(true);
          onLogin(values.email, values.password);
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
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderColor="#444"
                placeholder="email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={() => {
                  handleBlur("email");
                }}
                onTextInput={() => setTouched({ ...touched, email: true })}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={() => {
                  handleBlur("password");
                }}
                onTextInput={() => setTouched({ ...touched, password: true })}
                value={values.password}
              />

              {touched.password && errors.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
            </View>
            <View
              style={{
                alignItems: "flex-end",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => router.push("ForgotPasswordScreen")}
              >
                <Text style={{ color: "#6BB0F5" }}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <Pressable
              onPress={handleSubmit}
              style={styles.button(isValid)}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => router.push("/SignupScreen")}>
                <Text style={{ color: "#0096F6" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
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

  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },

  errorMessage: {
    color: "red",
  },
});

export default LoginForm;
