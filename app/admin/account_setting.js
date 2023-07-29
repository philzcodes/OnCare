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

const SettingsScreen = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [notificationPreferences, setNotificationPreferences] = useState("");

  const handleChangePassword = () => {
    // Implement password change logic here
    // For demonstration purposes, we'll just log the new password
    console.log("New Password:", newPassword);
    // You can add your logic for updating the password in the backend
  };

  const handleSaveNotificationPreferences = () => {
    // Implement notification preferences save logic here
    // For demonstration purposes, we'll just log the preferences
    console.log("Notification Preferences:", notificationPreferences);
    // You can add your logic for saving the notification preferences in the backend
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Change Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Current Password"
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleChangePassword}
        >
          <Icon name="save" size={20} color="#fff" />
          <Text style={styles.saveButtonText}>Save Password</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        <TextInput
          style={styles.notificationInput}
          placeholder="Notification Preferences"
          value={notificationPreferences}
          onChangeText={(text) => setNotificationPreferences(text)}
          multiline
        />
        <TouchableOpacity
          style={styles.saveButton}
          onPress={handleSaveNotificationPreferences}
        >
          <Icon name="save" size={20} color="#fff" />
          <Text style={styles.saveButtonText}>Save Preferences</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  sectionContainer: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
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
  notificationInput: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
    textAlignVertical: "top",
  },
  saveButton: {
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
  saveButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default SettingsScreen;
