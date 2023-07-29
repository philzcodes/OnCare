import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ScheduleLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Schedules",
        }}
      />
    </Stack>
  );
};

export default ScheduleLayout;
