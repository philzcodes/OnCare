import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

const ClientLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "All Clients",
          headerRight: () => (
            <Link href={"/notifications"}>
              <Ionicons
                name="ios-notifications-circle-outline"
                size={34}
                color="black"
              />
            </Link>
          ),
        }}
      />
    </Stack>
  );
};

export default ClientLayout;
