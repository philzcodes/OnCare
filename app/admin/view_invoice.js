import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import PDFLib, { PDFDocument, PDFPage } from "react-native-pdf-lib";
import RNFS from "react-native-fs";

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
   // try {
    //   // Create a new PDF document
    //   const pdfDoc = await PDFDocument.create();

    //   // Add a new page to the document
    //   const page = pdfDoc.addPage([400, 600]);

    //   // Write the invoice details on the page
    //   const { width, height } = page.getSize();
    //   page.drawText(`Invoice Number: ${dummyInvoice.invoiceNumber}`, {
    //     x: 50,
    //     y: height - 100,
    //     size: 20,
    //   });
    //   page.drawText(`Date: ${dummyInvoice.date}`, {
    //     x: 50,
    //     y: height - 150,
    //     size: 20,
    //   });
    //   page.drawText(`Due Date: ${dummyInvoice.dueDate}`, {
    //     x: 50,
    //     y: height - 200,
    //     size: 20,
    //   });
    //   page.drawText(`Client Name: ${dummyInvoice.client}`, {
    //     x: 50,
    //     y: height - 250,
    //     size: 20,
    //   });
    //   page.drawText(`Invoice Amount: $${dummyInvoice.amount}`, {
    //     x: 50,
    //     y: height - 300,
    //     size: 20,
    //   });
    //   page.drawText(`Description: ${dummyInvoice.description}`, {
    //     x: 50,
    //     y: height - 350,
    //     size: 20,
    //   });
    //   page.drawText(`Payment Status: ${dummyInvoice.paymentStatus}`, {
    //     x: 50,
    //     y: height - 400,
    //     size: 20,
    //   });
    //   // Add more details here, if needed

    //   // Generate the PDF as a base64 string
    //   const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });

    //   // Write the PDF to a file
    //   const pdfPath = `${RNFS.DocumentDirectoryPath}/invoice.pdf`;
    //   await RNFS.writeFile(pdfPath, pdfBytes, "base64");

    //   // Show success message to the user
    //   Alert.alert("Invoice Downloaded", "The invoice has been downloaded.");

    //   // Use the pdfPath for any further actions, such as sharing or uploading the PDF
    //   console.log("PDF Path:", pdfPath);
    // } catch (error) {
    //   console.error("Error generating PDF:", error);
    //   Alert.alert("Error", "Failed to generate PDF.");
    // }
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
