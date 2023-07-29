import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const ReportsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Reports",
        }}
      />
    </Stack>
  );
};

export default ReportsLayout;
