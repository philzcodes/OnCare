import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Print from "expo-print";
import * as FileSystem from "expo-file-system";

const ViewInvoiceScreen = (
  {
    /* route */
  }
) => {
  // Dummy invoice object with sample data
  const dummyInvoice = {
    invoiceNumber: "INV-2023-001",
    date: "2023-07-30",
    dueDate: "2023-08-15",
    client: "Client X",
    amount: 1200,
    description: "Service provided for July 2023",
    paymentStatus: "Pending",
  };

  // const { invoice } = route.params; // Uncomment this line when using with route

  const handleMarkAsPaid = () => {
    // Update the payment status in the database or perform relevant actions
    // For example, you could make an API call to update the payment status.
    // For now, let's just change the paymentStatus in the dummyInvoice.
    dummyInvoice.paymentStatus = "Paid";
    Alert.alert(
      "Invoice Marked as Paid",
      "The invoice has been marked as paid."
    );
  };

  const handleDownloadInvoice = async () => {
    try {
      // Create a HTML template for the invoice content
      const htmlContent = `
        <div>
          <h1>Invoice Details</h1>
          <p><strong>Invoice Number:</strong> ${dummyInvoice.invoiceNumber}</p>
          <p><strong>Date:</strong> ${dummyInvoice.date}</p>
          <p><strong>Due Date:</strong> ${dummyInvoice.dueDate}</p>
          <p><strong>Client Name:</strong> ${dummyInvoice.client}</p>
          <p><strong>Invoice Amount:</strong> $${dummyInvoice.amount}</p>
          <p><strong>Description:</strong> ${dummyInvoice.description}</p>
          <p><strong>Payment Status:</strong> ${dummyInvoice.paymentStatus}</p>
        </div>
      `;

      // Generate the PDF file
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
      });

      // Show success message to the user
      Alert.alert("Invoice Downloaded", "The invoice has been downloaded.");

      // Use the URI for any further actions, such as sharing or uploading the PDF
      console.log("PDF URI:", uri);
    } catch (error) {
      console.error("Error generating PDF:", error);
      Alert.alert("Error", "Failed to generate PDF.");
    }
  };

  const handleDownloadInvoicePermanent = async () => {
    try {
      // ... Rest of the code ...

      // Generate the PDF file
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
      });

      // Create a new directory in the app's documents directory
      const documentsDirectory = FileSystem.documentDirectory + "invoices/";
      await FileSystem.makeDirectoryAsync(documentsDirectory, {
        intermediates: true,
      });

      // Generate a unique filename for the PDF
      const pdfFilename = "invoice.pdf";
      const pdfPath = documentsDirectory + pdfFilename;

      // Move the PDF from the cache directory to the documents directory
      await FileSystem.moveAsync({
        from: uri,
        to: pdfPath,
      });

      // Show success message to the user
      Alert.alert("Invoice Downloaded", "The invoice has been downloaded.");

      // Use the pdfPath for any further actions, such as sharing or uploading the PDF
      console.log("PDF Path:", pdfPath);
    } catch (error) {
      console.error("Error generating PDF:", error);
      Alert.alert("Error", "Failed to generate PDF.");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.invoiceTitle}>Invoice Details</Text>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Invoice Number</Text>
        <Text style={styles.invoiceValue}>{dummyInvoice.invoiceNumber}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Date</Text>
        <Text style={styles.invoiceValue}>{dummyInvoice.date}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Due Date</Text>
        <Text style={styles.invoiceValue}>{dummyInvoice.dueDate}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Client Name</Text>
        <Text style={styles.invoiceValue}>{dummyInvoice.client}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Invoice Amount</Text>
        <Text style={styles.invoiceValue}>${dummyInvoice.amount}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Description</Text>
        <Text style={styles.invoiceValue}>{dummyInvoice.description}</Text>
      </View>
      <View style={styles.invoiceDetails}>
        <Text style={styles.invoiceLabel}>Payment Status</Text>
        <Text style={[styles.invoiceValue, styles.paymentStatus]}>
          {dummyInvoice.paymentStatus}
        </Text>
      </View>
      {/* Add more details about the invoice as needed */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={[styles.button, styles.markAsPaidButton]}
          onPress={handleMarkAsPaid}
        >
          <Text style={styles.buttonText}>Mark as Paid</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.downloadButton]}
          onPress={handleDownloadInvoice}
        >
          <Text style={[styles.buttonText, styles.downloadText]}>
            Download Invoice
          </Text>
        </TouchableOpacity>
      </View>
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
  invoiceTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  invoiceDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  invoiceLabel: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  invoiceValue: {
    flex: 2,
    fontSize: 18,
    color: "#333",
  },
  paymentStatus: {
    fontWeight: "bold",
    color: "#007bff",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  downloadButton: {
    backgroundColor: "#333",
  },
  downloadText: {
    fontSize: 14,
  },
});

export default ViewInvoiceScreen;
