import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import { useState } from "react";
import colors from "../contants/colors";

const AuthScreen = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        {isSignUp ? <SignUpForm /> : <SignInForm />}

        <TouchableOpacity
          onPress={() => setSignUp(!isSignUp)}
          style={styles.linkContainer}
        >
          <Text style={styles.link}>{`Switch to ${
            isSignUp ? "sign in" : "sign up"
          }`}</Text>
        </TouchableOpacity>
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default AuthScreen;
