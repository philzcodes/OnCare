import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ReportScreen = () => {
  const [date, setDate] = useState("");
  const [visitSummary, setVisitSummary] = useState("");
  const [tasksPerformed, setTasksPerformed] = useState("");
  const [clientObservations, setClientObservations] = useState("");
  const [medicationsAdministered, setMedicationsAdministered] = useState("");
  const [incidentsOrConcerns, setIncidentsOrConcerns] = useState("");
  const [notes, setNotes] = useState("");

  const submitReport = () => {
    // Here, you can handle the logic to save and submit the report to the backend or local storage.
    // You may want to connect this functionality to your data management or API services.
    // For this example, we'll just clear the form fields.
    setDate("");
    setVisitSummary("");
    setTasksPerformed("");
    setClientObservations("");
    setMedicationsAdministered("");
    setIncidentsOrConcerns("");
    setNotes("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Report Screen</Text>
      <TextInput
        label="Date and Time"
        placeholder="Enter date and time"
        value={date}
        onChangeText={(text) => setDate(text)}
        style={styles.input}
      />
      <TextInput
        label="Visit Summary"
        placeholder="Enter visit summary"
        value={visitSummary}
        onChangeText={(text) => setVisitSummary(text)}
        style={styles.input}
        multiline
      />
      <TextInput
        label="Tasks Performed"
        placeholder="Enter tasks performed"
        value={tasksPerformed}
        onChangeText={(text) => setTasksPerformed(text)}
        style={styles.input}
        multiline
      />
      <TextInput
        label="Client Observations"
        placeholder="Enter client observations"
        value={clientObservations}
        onChangeText={(text) => setClientObservations(text)}
        style={styles.input}
        multiline
      />
      <TextInput
        label="Medications Administered"
        placeholder="Enter medications administered"
        value={medicationsAdministered}
        onChangeText={(text) => setMedicationsAdministered(text)}
        style={styles.input}
        multiline
      />
      <TextInput
        label="Incidents or Concerns"
        placeholder="Enter incidents or concerns"
        value={incidentsOrConcerns}
        onChangeText={(text) => setIncidentsOrConcerns(text)}
        style={styles.input}
        multiline
      />
      <TextInput
        label="Notes"
        placeholder="Enter additional notes"
        value={notes}
        onChangeText={(text) => setNotes(text)}
        style={styles.input}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={submitReport}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    backgroundColor: "#fff",
    marginBottom: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ReportScreen;
