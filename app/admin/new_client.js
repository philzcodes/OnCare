import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddClientScreen = () => {
  const [name, setName] = useState("");
  const [medicalHistory, setMedicalHistory] = useState("");
  const [careNeeds, setCareNeeds] = useState("");
  const [preferences, setPreferences] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = () => {
    // Perform form submission here
    // For demonstration purposes, we'll just log the client data
    console.log("New Client Data:", {
      name,
      medicalHistory,
      careNeeds,
      preferences,
      phone,
      email,
      address,
      dateOfBirth,
    });
    // You can add your logic for saving the client data to a database or API
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Add New Client</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.multilineInput}
            placeholder="Medical History"
            value={medicalHistory}
            onChangeText={(text) => setMedicalHistory(text)}
            multiline
          />
          <TextInput
            style={styles.multilineInput}
            placeholder="Care Needs"
            value={careNeeds}
            onChangeText={(text) => setCareNeeds(text)}
            multiline
          />
          <TextInput
            style={styles.multilineInput}
            placeholder="Preferences"
            value={preferences}
            onChangeText={(text) => setPreferences(text)}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.multilineInput}
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={(text) => setDateOfBirth(text)}
          />
        </View>
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Icon name="plus" size={24} color="#fff" />
          <Text style={styles.addButtonText}>Add Client</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    alignSelf: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    textAlignVertical: "top",
  },
  addButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default AddClientScreen;
