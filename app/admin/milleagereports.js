import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const MileageReportsScreen = () => {
  // Dummy data for mileage reports (replace this with your actual data)
  const [mileageReports, setMileageReports] = useState([
    {
      id: "1",
      date: "2023-07-15",
      startLocation: "Home",
      endLocation: "Client A's Home",
      distance: "10 miles",
    },
    {
      id: "2",
      date: "2023-07-16",
      startLocation: "Client A's Home",
      endLocation: "Client B's Home",
      distance: "5 miles",
    },
    // Add more mileage reports as needed
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mileage Reports</Text>
      <FlatList
        data={mileageReports}
        renderItem={({ item }) => (
          <View style={styles.reportItem}>
            <Text style={styles.reportDate}>{item.date}</Text>
            <Text style={styles.reportLocation}>
              {item.startLocation} to {item.endLocation}
            </Text>
            <Text style={styles.reportDistance}>{item.distance}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
  reportItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
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
  reportDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 5,
  },
  reportLocation: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  reportDistance: {
    fontSize: 16,
    color: "#666",
  },
});

export default MileageReportsScreen;
