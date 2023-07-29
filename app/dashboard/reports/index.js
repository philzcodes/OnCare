import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const initialReports = [
  { id: "1", clientName: "John Doe", title: "Report 1", date: "2023-07-20" },
  { id: "2", clientName: "Jane Smith", title: "Report 2", date: "2023-07-21" },
  {
    id: "3",
    clientName: "Alice Johnson",
    title: "Report 3",
    date: "2023-07-22",
  },
  // Add more reports as needed
];

const ReportsListScreen = () => {
  const [reports, setReports] = useState(initialReports);

  const renderReportItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.reportItem}>
        <Text style={styles.reportTitle}>{item.title}</Text>
        <Text style={styles.clientName}>Client: {item.clientName}</Text>
        <Text style={styles.reportDate}>Date: {item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reports List</Text>
      <FlatList
        data={reports}
        renderItem={renderReportItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  listContainer: {
    flexGrow: 1,
  },
  reportItem: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  clientName: {
    fontSize: 16,
    marginBottom: 5,
    color: "#666",
  },
  reportDate: {
    fontSize: 14,
    color: "#666",
  },
});

export default ReportsListScreen;
