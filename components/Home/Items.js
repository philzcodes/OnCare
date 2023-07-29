import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; // Assuming you want to use the FontAwesome icons

const MENU_ITEMS = [
  {
    name: "Clients",
    icon: "users",
    screen: "ClientListScreen",
  },
  {
    name: "Staff",
    icon: "user-circle-o",
    screen: "StaffListScreen",
  },
  {
    name: "Schedule",
    icon: "calendar",
    screen: "ScheduleScreen",
  },
  {
    name: "Reports",
    icon: "bar-chart",
    screen: "ReportsScreen",
  },
  {
    name: "Messaging",
    icon: "comments",
    screen: "MessagingScreen",
  },
  {
    name: "Location",
    icon: "map-marker",
    screen: "LocationTrackingScreen",
  },
];

const MenuItem = ({ text, icon, action }) => {
  return (
    <TouchableOpacity onPress={action} style={styles.menuItemContainer}>
      <View style={styles.iconContainer}>
        <Icon name={icon} size={40} color="black" />
      </View>
      <Text style={styles.menuItemText}>{text}</Text>
    </TouchableOpacity>
  );
};

const Items = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.menuContainer}>
        {MENU_ITEMS.map((item, index) => (
          <MenuItem
            key={index}
            text={item.name}
            icon={item.icon}
            action={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  menuItemContainer: {
    height: 160,
    width: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: "#ffffff",
  },
  iconContainer: {
    width: 40,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  menuItemText: {
    color: "black",
    fontSize: 18,
    margin: 10,
  },
});

export default Items;
