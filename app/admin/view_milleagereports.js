import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewMileageReportScreen = ({ route }) => {
  //const { mileageReport } = route.params; // Assume mileageReport is passed as a prop
  const mileageReport = {
    date: "2023-07-29",
    startLocation: "Home",
    endLocation: "Office",
    distance: "15 miles",
    purpose: "Work commute",
    staffName: "John Doe",
    notes: "Traffic was heavy in the morning.",
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mileage Report Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Date:</Text>
        <Text style={styles.detailValue}>{mileageReport.date}</Text>

        <Text style={styles.detailLabel}>Start Location:</Text>
        <Text style={styles.detailValue}>{mileageReport.startLocation}</Text>

        <Text style={styles.detailLabel}>End Location:</Text>
        <Text style={styles.detailValue}>{mileageReport.endLocation}</Text>

        <Text style={styles.detailLabel}>Distance:</Text>
        <Text style={styles.detailValue}>{mileageReport.distance}</Text>

        {/* Additional Details */}
        <Text style={styles.detailLabel}>Purpose of Trip:</Text>
        <Text style={styles.detailValue}>{mileageReport.purpose}</Text>

        <Text style={styles.detailLabel}>Staff Name:</Text>
        <Text style={styles.detailValue}>{mileageReport.staffName}</Text>

        <Text style={styles.detailLabel}>Notes:</Text>
        <Text style={styles.detailValue}>{mileageReport.notes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  detailLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
});

export default ViewMileageReportScreen;
