import {
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import backgroundImage from "../assets/images/droplet.jpeg";
import colors from "../contants/colors";
import { useCallback, useState } from "react";

const ChatScreen = () => {
  const [message, setMessage] = useState("");

  const sendMessage = useCallback(() => {
    setMessage("");
  }, [message]);
  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : ""}
        keyboardVerticalOffset={100}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.bgImage}
        ></ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.mediumButton} onPress={() => {}}>
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>
          <TextInput
            style={styles.textbox}
            value={message}
            onChangeText={(text) => setMessage(text)}
            onSubmitEditing={sendMessage}
          />

          {message === "" ? (
            <TouchableOpacity style={styles.mediumButton} onPress={() => {}}>
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ ...styles.mediumButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather name="send" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediumButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
    width: 35,
  },
});

export default ChatScreen;
