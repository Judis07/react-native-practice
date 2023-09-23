import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Feather } from "@expo/vector-icons";

import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

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
      </PageContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthScreen;
