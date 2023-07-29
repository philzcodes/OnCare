import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RiskAssessment = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Andy Colemans Risk Assessment" }} />
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 20,
          marginVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginVertical: 5 }}>
          <Text>
            <Text style={{ fontWeight: "600" }}>Risk area: </Text>
            This is the Risk Area{" "}
          </Text>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text>
            <Text style={{ fontWeight: "600" }}>Description: </Text>
            This is the Risk Area This is the Risk AreaThis is the Risk Area{" "}
            This is the Risk Area This is the Risk Area This is the Risk Area{" "}
            This is the Risk Area This is the Risk Area{" "}
          </Text>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text>
            <Text style={{ fontWeight: "600" }}>Who the risk affects: </Text>
            This is the Risk Area{" "}
          </Text>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text>
            <Text style={{ fontWeight: "600" }}>
              Plan to manange/mitigate the risk: :
            </Text>
            This is the Risk Area This is the Risk AreaThis is the Risk Area{" "}
            This is the Risk Area This is the Risk Area This is the Risk Area{" "}
            This is the Risk Area This is the Risk Area{" "}
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>likelyhood</Text>
            <View
              style={{
                backgroundColor: "grey",
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 24 }}>5</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>likelyhood</Text>
            <View
              style={{
                backgroundColor: "grey",
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 24 }}>5</Text>
            </View>
          </View>

          <View>
            <Text style={{ fontSize: 15, marginBottom: 5 }}>likelyhood</Text>
            <View
              style={{
                backgroundColor: "grey",
                width: 45,
                height: 45,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 6,
              }}
            >
              <Text style={{ fontWeight: "600", fontSize: 24 }}>5</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RiskAssessment;
