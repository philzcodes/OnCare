import { Stack } from "expo-router";
// VisitRecordsScreen.js

import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text, List, Divider, Title } from "react-native-paper";

const VisitRecordsScreen = () => {
  const [visitRecords, setVisitRecords] = useState([
    // Sample data - replace this with your actual visit records data
    {
      id: "1",
      date: "2023-07-25",
      time: "10:00 AM",
      duration: "1 hour",
      tasks: "Task 1, Task 2",
      notes: "Client seemed satisfied with the progress.",
    },
    {
      id: "2",
      date: "2023-07-25",
      time: "10:00 AM",
      duration: "1 hour",
      tasks: "Task 1, Task 2",
      notes: "Client seemed satisfied with the progress.",
    },
    // Add more sample data here if needed
  ]);

  const renderItem = ({ item }) => (
    <List.Item
      title={`Date: ${item.date}`}
      description={`Time: ${item.time}\nDuration: ${item.duration}\nTasks: ${item.tasks}\nNotes: ${item.notes}`}
      descriptionNumberOfLines={4}
      left={() => <List.Icon icon="calendar" />}
      style={styles.visitItem}
    />
  );

  return (
    <View style={styles.container}>
      <Title style={styles.header}>Visit Records</Title>
      <Divider />
      <List.Section>
        <FlatList
          data={visitRecords}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Divider />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  visitItem: {
    marginBottom: 16,
    backgroundColor: "#fff", // Set the background color for each item
    elevation: 2, // Add a subtle shadow to each item
    borderRadius: 8, // Rounded corners for the item
    padding: 16,
  },
});

export default VisitRecordsScreen;
