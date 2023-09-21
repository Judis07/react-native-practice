import { View, Text, StyleSheet, Button } from "react-native";

const ChatListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Poppins-Regular" }}>Chat List Screen</Text>
      <Button
        title="Go to settings"
        onPress={() => {
          navigation.navigate("Setting");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatListScreen;
