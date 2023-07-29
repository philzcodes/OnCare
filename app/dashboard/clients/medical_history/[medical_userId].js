// MedicalHistoryScreen.js

import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

const MedicalHistoryScreen = () => {
  // Dummy data
  const clientName = "John Doe";
  const dateOfBirth = "1985-05-15";
  const gender = "Male";
  const profilePicture =
    "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7"; // Replace with the actual image path

  const summaryMedicalHistory =
    "Summary of the client's medical history goes here.";

  const medicalConditions = [
    {
      name: "Hypertension",
      dateOfDiagnosis: "2010-08-20",
      notes: "High blood pressure",
    },
    {
      name: "Diabetes",
      dateOfDiagnosis: "2012-03-10",
      notes: "Type 2 diabetes",
    },
  ];

  const medications = [
    {
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "2010-08-25",
      prescribingDoctor: "Dr. Smith",
    },
    {
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      startDate: "2012-03-15",
      prescribingDoctor: "Dr. Johnson",
    },
  ];

  const allergies = ["Penicillin", "Peanuts"];

  const medicalProcedures = [
    {
      name: "Appendectomy",
      date: "2015-11-02",
      location: "City Hospital",
      notes: "Successful removal of appendix",
    },
    {
      name: "Colonoscopy",
      date: "2018-07-10",
      location: "Clinic XYZ",
      notes: "No abnormalities found",
    },
  ];

  const familyMedicalHistory = [
    "Heart disease (Father)",
    "Breast cancer (Mother)",
    "Type 2 diabetes (Grandfather)",
  ];

  const immunizationRecords = [
    { name: "Influenza Vaccine", date: "2022-10-05" },
    { name: "Tetanus Vaccine", date: "2019-03-20" },
  ];

  const labResults = [
    { type: "Blood Pressure", date: "2023-06-15", value: "130/80 mmHg" },
    { type: "Blood Glucose", date: "2023-06-10", value: "120 mg/dL" },
  ];

  const additionalNotes =
    "Additional notes or information about the client's medical history.";

  return (
    <ScrollView style={styles.container}>
      {/* Personal Information Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Personal Information</Text>
        <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
        <Text style={styles.personalInfo}>Name: {clientName}</Text>
        <Text style={styles.personalInfo}>Date of Birth: {dateOfBirth}</Text>
        <Text style={styles.personalInfo}>Gender: {gender}</Text>
      </View>

      {/* Summary of Medical History */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Summary of Medical History</Text>
        <Text>{summaryMedicalHistory}</Text>
      </View>

      {/* Medical Conditions and Diagnoses */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>
          Medical Conditions and Diagnoses
        </Text>
        {medicalConditions.map((condition, index) => (
          <View key={index} style={styles.conditionContainer}>
            <Text>Name: {condition.name}</Text>
            <Text>Date of Diagnosis: {condition.dateOfDiagnosis}</Text>
            <Text>Notes: {condition.notes}</Text>
          </View>
        ))}
      </View>

      {/* Medication History */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Medication History</Text>
        {medications.map((medication, index) => (
          <View key={index}>
            <Text>Name: {medication.name}</Text>
            <Text>Dosage: {medication.dosage}</Text>
            <Text>Frequency: {medication.frequency}</Text>
            <Text>Start Date: {medication.startDate}</Text>
            <Text>Prescribing Doctor: {medication.prescribingDoctor}</Text>
          </View>
        ))}
      </View>

      {/* Allergies and Adverse Reactions */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>
          Allergies and Adverse Reactions
        </Text>
        {allergies.map((allergy, index) => (
          <Text key={index}>{allergy}</Text>
        ))}
      </View>

      {/* Medical Procedures and Surgeries */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>
          Medical Procedures and Surgeries
        </Text>
        {medicalProcedures.map((procedure, index) => (
          <View key={index}>
            <Text>Name: {procedure.name}</Text>
            <Text>Date: {procedure.date}</Text>
            <Text>Location: {procedure.location}</Text>
            <Text>Notes: {procedure.notes}</Text>
          </View>
        ))}
      </View>

      {/* Family Medical History */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Family Medical History</Text>
        {familyMedicalHistory.map((history, index) => (
          <Text key={index}>{history}</Text>
        ))}
      </View>

      {/* Immunization Records */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Immunization Records</Text>
        {immunizationRecords.map((record, index) => (
          <View key={index}>
            <Text>Name: {record.name}</Text>
            <Text>Date: {record.date}</Text>
          </View>
        ))}
      </View>

      {/* Lab Results and Tests */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>Lab Results and Tests</Text>
        {labResults.map((result, index) => (
          <View key={index}>
            <Text>Type: {result.type}</Text>
            <Text>Date: {result.date}</Text>
            <Text>Value: {result.value}</Text>
          </View>
        ))}
      </View>

      {/* Notes and Additional Information */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeading}>
          Notes and Additional Information
        </Text>
        <Text>{additionalNotes}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f7f7f7", // Light gray background color
  },
  sectionContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },

  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 10,
  },

  personalInfo: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  conditionContainer: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default MedicalHistoryScreen;
