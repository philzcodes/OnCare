import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const ALERTS_DATA = [
  { id: "1", message: "Late visit for Client A at 10:30 AM" },
  { id: "2", message: "Reminder: Client B's medication at 2:00 PM" },
  { id: "3", message: "New appointment scheduled for Client C" },
  // Add more alerts to the ALERTS_DATA array if needed
];

const AlertsScreen = () => {
  const [alerts, setAlerts] = useState(ALERTS_DATA);

  const renderItem = ({ item }) => (
    <View style={styles.alertItem}>
      <Icon name="exclamation-circle" size={24} color="#ff6347" />
      <Text style={styles.alertText}>{item.message}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {alerts.length === 0 ? (
        <Text style={styles.noAlertsText}>No alerts to display</Text>
      ) : (
        <FlatList
          data={alerts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  flatListContent: {
    paddingTop: 10,
  },
  noAlertsText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  alertItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  alertText: {
    marginLeft: 10,
    fontSize: 16,
    color: "#333",
  },
});

export default AlertsScreen;
