import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const NotificationsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="notifications/index"
        options={{ title: "notifications" }}
      ></Stack.Screen>
    </Stack>
  );
};

export default NotificationsLayout;
