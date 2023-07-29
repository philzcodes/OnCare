import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
// import ErrorMessage from "../components/ErrorMessage";
import { auth } from "../firebase";

const ForgotPasswordScreen = ({ navigation }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label("Email")
      .email("Enter a valid email")
      .required("Please enter a registered email"),
  });

  const passwordReset = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const handlePasswordReset = async (values, actions) => {
    const { email } = values;

    try {
      await passwordReset(email);
      console.log("Password reset email sent successfully");
      navigation.push("LoginScreen");
    } catch (error) {
      actions.setFieldError("general", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Forgot Password?</Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(values, actions) => {
          handlePasswordReset(values, actions);
          console.log(12);
        }}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          touched,
          handleBlur,
          isSubmitting,
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
                placeholderTextColor={"#444"}
                style={{ color: "#FAFAFA" }}
                placeholder="Enter email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            {/* <ErrorMessage errorValue={touched.email && errors.email} /> */}
            <View style={styles.buttonContainer}>
              <Button
                buttonType="outline"
                onPress={handleSubmit}
                title="Send Email"
                buttonColor="#039BE5"
                disabled={!isValid || isSubmitting}
              />
            </View>
            {/* <ErrorMessage errorValue={errors.general} /> */}
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00003f",
    marginTop: 150,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginLeft: 25,
  },
  buttonContainer: {
    margin: 25,
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

export default ForgotPasswordScreen;
