import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { Link, Stack, useRouter, useSearchParams } from "expo-router";
import { FontAwesome, AntDesign, Fontisto } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const ClientProfile = () => {
  const { id } = useSearchParams();
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ title: "Client Profile" }} />
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 30,
            marginBottom: 6,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Mr Humphrey Brown
            </Text>

            <Image
              source={{
                uri: "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7",
              }}
              style={styles.thumbnail}
            />
          </View>
          <Button title="Check In" />
        </View>

        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 30,
            marginBottom: 6,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Contact details
          </Text>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <FontAwesome name="home" size={15} color={"black"} />
            <Text style={{ marginLeft: 7 }}>
              NO 17 aka street, by linjo supermarket , Port Harcourt, Rivers
              State
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <FontAwesome name="home" size={15} color={"black"} />
            <Text style={{ marginLeft: 7 }}>
              NO 17 aka street, by linjo supermarket , Port Harcourt, Rivers
              State
            </Text>
          </View>

          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <FontAwesome name="home" size={15} color={"black"} />
            <Text style={{ marginLeft: 7 }}>05089747851</Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            marginBottom: 6,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => router.push("./visits/1")}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Recent Visits
          </Text>

          <Fontisto name="arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 30,
            marginBottom: 6,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Care Outcomes
          </Text>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <AntDesign name="arrowright" size={24} color="black" />
            <Text style={{ marginLeft: 7 }}>DNAR in her bedroom</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <AntDesign name="arrowright" size={24} color="black" />
            <Text style={{ marginLeft: 7 }}>No allergies 1</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 4 }}>
            <AntDesign name="arrowright" size={24} color="black" />
            <Text style={{ marginLeft: 7 }}>
              Independently mananged nutrition
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            marginBottom: 6,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => router.push("./risks/1")}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Risk Assessment
          </Text>

          <Fontisto name="arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            marginBottom: 6,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => router.push("./medical_history/1")}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Medical History
          </Text>

          <Fontisto name="arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            marginBottom: 6,
            paddingHorizontal: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
          onPress={() => router.push("./careplan/1")}
        >
          <Text style={{ fontWeight: "600", fontSize: 20, marginBottom: 10 }}>
            Care Plans
          </Text>

          <Fontisto name="arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ClientProfile;
