import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const INVOICES_DATA = [
  { id: "1", client: "Client A", amount: 1200 },
  { id: "2", client: "Client B", amount: 800 },
  { id: "3", client: "Client C", amount: 1500 },
  // Add more invoice data to the INVOICES_DATA array if needed
];

const InvoicingScreen = () => {
  const [invoices, setInvoices] = useState(INVOICES_DATA);

  const renderItem = ({ item }) => (
    <View style={styles.invoiceItem}>
      <Text style={styles.clientName}>{item.client}</Text>
      <Text style={styles.invoiceAmount}>Amount: ${item.amount}</Text>
      <TouchableOpacity
        style={styles.viewButton}
        onPress={() => handleViewInvoice(item.id)}
      >
        <Text style={styles.viewButtonText}>View Invoice</Text>
      </TouchableOpacity>
    </View>
  );

  const handleViewInvoice = (invoiceId) => {
    // Implement logic to view the selected invoice
    // For demonstration purposes, we'll just log the invoiceId
    console.log("View Invoice:", invoiceId);
    // You can add your logic to navigate to the detailed invoice screen or display the invoice details in a modal
  };

  return (
    <View style={styles.container}>
      {invoices.length === 0 ? (
        <Text style={styles.noInvoicesText}>No invoices to display</Text>
      ) : (
        <FlatList
          data={invoices}
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
  noInvoicesText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
  invoiceItem: {
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
  clientName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  invoiceAmount: {
    fontSize: 16,
    color: "#333",
  },
  viewButton: {
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InvoicingScreen;
