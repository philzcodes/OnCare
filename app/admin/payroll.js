import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PAYROLL_DATA = [
  { id: "1", employee: "John Doe", hoursWorked: 160, ratePerHour: 20 },
  { id: "2", employee: "Jane Smith", hoursWorked: 140, ratePerHour: 18 },
  { id: "3", employee: "Michael Johnson", hoursWorked: 180, ratePerHour: 22 },
  // Add more payroll data to the PAYROLL_DATA array if needed
];

const PayrollScreen = () => {
  const [payroll, setPayroll] = useState(PAYROLL_DATA);

  const calculateTotalPay = (hoursWorked, ratePerHour) => {
    return hoursWorked * ratePerHour;
  };

  const renderItem = ({ item }) => (
    <View style={styles.payrollItem}>
      <Text style={styles.employeeName}>{item.employee}</Text>
      <Text style={styles.hoursWorked}>Hours Worked: {item.hoursWorked}</Text>
      <Text style={styles.ratePerHour}>Rate Per Hour: ${item.ratePerHour}</Text>
      <Text style={styles.totalPay}>
        Total Pay: ${calculateTotalPay(item.hoursWorked, item.ratePerHour)}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {payroll.length === 0 ? (
        <Text style={styles.noPayrollText}>No payroll data to display</Text>
      ) : (
        <FlatList
          data={payroll}
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
  noPayrollText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  payrollItem: {
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
  employeeName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  hoursWorked: {
    fontSize: 16,
    color: "#333",
  },
  ratePerHour: {
    fontSize: 16,
    color: "#333",
  },
  totalPay: {
    fontSize: 16,
    color: "#007bff",
    marginTop: 8,
  },
});

export default PayrollScreen;
