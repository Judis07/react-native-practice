import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../contants/colors";
import logo from "../assets/images/logo.png";

const AuthScreen = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        <ScrollView>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.OS === "ios" ? "height" : ""}
            keyboardVerticalOffset={100}
          >
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.image} />
            </View>
            {isSignUp ? <SignUpForm /> : <SignInForm />}

            <TouchableOpacity
              onPress={() => setSignUp(!isSignUp)}
              style={styles.linkContainer}
            >
              <Text style={styles.link}>{`Switch to ${
                isSignUp ? "sign in" : "sign up"
              }`}</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "40%",
    resizeMode: "contain",
  },
  buttonContainer: {
    marginVertical: 20,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  link: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.3,
  },

  keyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AuthScreen;
