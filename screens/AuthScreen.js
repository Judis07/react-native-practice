import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";

const AuthScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PageContainer>
        <Input
          label="First Name"
          iconPack={FontAwesome}
          icon="user-o"
          iconSize={20}
          errorText={""}
        />

        <Input
          label="Last Name"
          iconPack={FontAwesome}
          icon="user-o"
          iconSize={20}
          errorText={""}
        />

        <Input
          label="Email"
          iconPack={Feather}
          icon="mail"
          iconSize={20}
          errorText={""}
        />

        <Input
          label="Password"
          iconPack={Feather}
          icon="lock"
          iconSize={20}
          errorText={""}
        />

        <View style={styles.buttonContainer}>
          <SubmitButton
            title="Sign up"
            onPress={() => console.log("submitting...")}
            // disabled={true}
          />
        </View>
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
});

export default AuthScreen;
