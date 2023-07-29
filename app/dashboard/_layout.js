import React from "react";
import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

const DashboardLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="clients"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <FontAwesome name="home" size={24} color={"black"} />
          ),
        }}
      />

      <Tabs.Screen
        name="reports"
        options={{
          title: "reports",
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="ios-notifications-circle-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="schedule"
        options={{
          title: "schedule",
          headerShown: false,
          tabBarIcon: () => (
            <MaterialIcons name="schedule" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
