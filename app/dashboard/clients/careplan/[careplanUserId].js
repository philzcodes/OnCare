import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CarePlanScreen = () => {
  const [dailyActivities, setDailyActivities] = useState({
    morningRoutine: false,
    afternoonActivities: false,
    eveningRoutine: false,
    bedtimeSchedule: false,
    // Add more activities as needed
  });

  const [medicationSchedule] = useState([
    {
      name: "Medication 1",
      dosage: "10 mg",
      schedule: "Morning, Afternoon, Evening",
      instructions: "Take with water",
    },
    {
      name: "Medication 2",
      dosage: "20 mg",
      schedule: "Morning, Evening",
      instructions: "Take with food",
    },
    // Add more medications as needed
  ]);

  const [dietaryRestrictions] = useState([
    "Gluten-free",
    "Lactose-free",
    "Vegetarian",
    // Add more dietary restrictions as needed
  ]);

  const [healthcareTasks] = useState([
    "Wound Dressing",
    "Physical Therapy",
    "Medication Administration",
    // Add more healthcare tasks as needed
  ]);

  const [appointments] = useState([
    {
      date: "2023-08-01",
      time: "10:00 AM",
      type: "Check-up",
      location: "Medical Clinic A",
    },
    {
      date: "2023-08-10",
      time: "2:30 PM",
      type: "Physical Therapy",
      location: "Therapy Center B",
    },
    // Add more appointments as needed
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Care Plan for [Client Name]</Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Client Information:</Text>
        {/* Display client information */}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Medical History:</Text>
        {/* Display medical history */}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Daily Activities:</Text>
        {/* Display daily activities icons */}
        {Object.keys(dailyActivities).map((activity) => (
          <TouchableOpacity
            key={activity}
            style={styles.activityItem}
            onPress={() =>
              setDailyActivities({
                ...dailyActivities,
                [activity]: !dailyActivities[activity],
              })
            }
          >
            {dailyActivities[activity] ? (
              <Icon name="check" size={20} color="green" /> // Adjust size and color as needed
            ) : (
              <Icon name="times" size={20} color="red" /> // Adjust size and color as needed
            )}
            <Text style={styles.activityLabel}>{activity}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Medication Schedule:</Text>
        {/* Display medication schedule */}
        {medicationSchedule.map((medication, index) => (
          <View key={index} style={styles.medicationItem}>
            <Text style={styles.medicationName}>{medication.name}</Text>
            <Text>{`Dosage: ${medication.dosage}`}</Text>
            <Text>{`Schedule: ${medication.schedule}`}</Text>
            <Text>{`Instructions: ${medication.instructions}`}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Dietary Restrictions:</Text>
        {/* Display dietary restrictions */}
        {dietaryRestrictions.map((restriction, index) => (
          <View key={index} style={styles.dietaryRestrictionItem}>
            {/* Use the icon instead of CheckBox */}
            <Icon name="check" size={20} color="green" />
            <Text style={styles.dietaryRestrictionLabel}>{restriction}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Healthcare Tasks:</Text>
        {/* Display healthcare tasks */}
        {healthcareTasks.map((task, index) => (
          <View key={index} style={styles.healthcareTaskItem}>
            {/* Use the icon instead of CheckBox */}
            <Icon name="check" size={20} color="green" />
            <Text style={styles.healthcareTaskLabel}>{task}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Appointments and Follow-ups:</Text>
        {appointments.map((appointment, index) => (
          <View key={index} style={styles.appointmentItem}>
            <Icon name="calendar" size={20} color="#007BFF" />
            <View style={styles.appointmentDetails}>
              <Text
                style={styles.appointmentDate}
              >{`Date: ${appointment.date}`}</Text>
              <Text
                style={styles.appointmentTime}
              >{`Time: ${appointment.time}`}</Text>
              <Text
                style={styles.appointmentType}
              >{`Type: ${appointment.type}`}</Text>
              <Text
                style={styles.appointmentLocation}
              >{`Location: ${appointment.location}`}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Emergency Contacts:</Text>
        {/* Display emergency contacts */}
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>Notes and Comments:</Text>
        {/* Add text area for notes/comments */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9F9F9",
    padding: 16,
  },
  section: {
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  activityItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  activityLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  medicationItem: {
    marginBottom: 8,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  dietaryRestrictionItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dietaryRestrictionLabel: {
    fontSize: 16,
    marginLeft: 8,
  },
  healthcareTaskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  healthcareTaskLabel: {
    fontSize: 16,
    marginLeft: 8,
  },

  appointmentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  appointmentDetails: {
    flex: 1,
    marginLeft: 12,
  },
  appointmentDate: {
    fontSize: 16,
    color: "#333333",
  },
  appointmentTime: {
    fontSize: 14,
    color: "#666666",
  },
  appointmentType: {
    fontSize: 14,
    color: "#666666",
  },
  appointmentLocation: {
    fontSize: 14,
    color: "#666666",
  },
});
export default CarePlanScreen;
