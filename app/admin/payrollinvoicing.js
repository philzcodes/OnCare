import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PayrollInvoicingScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sectionButton}>
        <Icon name="money" size={24} color="#007bff" />
        <Text style={styles.sectionButtonText}>Payroll</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionButton}>
        <Icon name="file-invoice-dollar" size={24} color="#007bff" />
        <Text style={styles.sectionButtonText}>Invoicing</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sectionButton}>
        <Icon name="road" size={24} color="#007bff" />
        <Text style={styles.sectionButtonText}>Mileage Reports</Text>
      </TouchableOpacity>
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
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
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
  sectionButtonText: {
    marginLeft: 10,
    fontSize: 20,
    color: "#007bff",
  },
});

export default PayrollInvoicingScreen;
