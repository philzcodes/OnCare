import { SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Header from "../../components/Home/Header";
import Items from "../../components/Home/Items";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const navigation = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Items navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
});

export default HomeScreen;
