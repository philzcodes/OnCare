import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const DATA = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "philz Doe" },
  // Add more clients to the DATA array if needed
];

const ClientListScreen = ({ navigation }) => {
  const [clients, setClients] = useState(DATA);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate an API call or data filtering delay
    setTimeout(() => {
      // Filter the clients based on the search query
      const filteredClients = DATA.filter((client) =>
        client.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setClients(filteredClients);
      setLoading(false);
    }, 1000);
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() =>
        navigation.navigate("ClientDetailScreen", { client: item })
      }
    >
      <Image
        source={{ uri: "https://via.placeholder.com/60" }}
        style={styles.avatar}
      />
      <View style={styles.clientDetails}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.clientId}>ID: {item.id}</Text>
      </View>
      <Icon name="chevron-right" size={20} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search clients..."
          placeholderTextColor="#9a9a9a"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchIconContainer}>
          <Icon name="search" size={20} color="#007bff" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#007bff"
        />
      ) : clients.length > 0 ? (
        <FlatList
          data={clients}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text style={styles.emptyText}>No clients found.</Text>
      )}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("AddClientScreen")}
      >
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 2,
  },
  searchBar: {
    flex: 1,
    height: 40,
    paddingHorizontal: 16,
    color: "#333",
    fontSize: 16,
  },
  searchIconContainer: {
    paddingHorizontal: 12,
  },
  flatListContent: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  clientId: {
    fontSize: 14,
    color: "#666",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  clientDetails: {
    flex: 1,
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    bottom: 72, // Adjusted position to avoid overlapping with last item
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  emptyText: {
    textAlign: "center",
    marginVertical: 16,
    fontSize: 16,
    color: "#999",
  },
});

export default ClientListScreen;
