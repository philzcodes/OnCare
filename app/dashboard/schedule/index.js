import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
const courses = [
  {
    id: 3,
    title: "Amaka Dollar",
    thumbnail:
      "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    title: "Victor Uche",
    thumbnail:
      "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },

  {
    id: 5,
    title: "Miss Judith ",
    thumbnail:
      "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },

  {
    id: 6,
    title: "Mr James Alabo",
    thumbnail:
      "https://th.bing.com/th/id/OIP.VOnsU2XuuWeDj_0qNe2lCwEREs?w=161&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push("dashboard/clients/1")}
            style={styles.itemContainer}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text>11:30 am</Text>
                <Text>12:40</Text>
                <Text>1h 10m</Text>
              </View>

              <View
                style={{
                  width: 2,
                  height: 60,
                  marginHorizontal: 10,
                  backgroundColor: "black",
                }}
              ></View>

              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text>Last Visit: today</Text>
              </View>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={34}
              color="black"
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },

  header: {
    backgroundColor: "#333",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 16,
    marginVertical: 10,
  },

  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 5,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    elevation: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default index;
