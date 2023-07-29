import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { auth } from "../../firebase";

const Header = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ marginBottom: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 5,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 15,
          flexDirection: "row",
        }}
        onPress={handleLogout}
      >
        <Image
          style={{ width: 20, height: 20 }}
          source={{
            uri: "https://img.icons8.com/material/ffffff/back--v1.png",
          }}
        />
        <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>
          Logout
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 35 }}>OnCare Management</Text>
      <Text style={{ color: "grey" }}>Please choose an option</Text>
    </View>
  );
};

export default Header;
