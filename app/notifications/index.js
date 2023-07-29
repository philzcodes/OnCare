import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // You can use any other icon library you prefer

const notificationsData = [
  {
    id: 1,
    content: "John Doe liked your post.",
  },
  {
    id: 2,
    content: "Jane Smith commented on your photo.",
  },
  // Add more notifications here
];

const NotificationsScreen = () => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Icon
        name="notifications"
        size={24}
        color="#1877F2"
        style={styles.notificationIcon}
      />
      <Text style={styles.notificationText}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notificationsData}
        renderItem={renderNotificationItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationText: {
    fontSize: 16,
    color: "#000",
  },
});

export default NotificationsScreen;
