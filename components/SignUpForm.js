import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

import inputHandleChange from "../utilis/actions/formActions";

const SignUpForm = () => {
  inputHandleChange;

  return (
    <>
      <Input
        id="firstName"
        label="First Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconSize={20}
        errorText={""}
        onInputChange={inputHandleChange}
      />

      <Input
        id="lastName"
        label="Last Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconSize={20}
        errorText={""}
        onInputChange={inputHandleChange}
      />

      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        icon="mail"
        iconSize={20}
        errorText={""}
        keyboardType="email-address"
        onInputChange={inputHandleChange}
        autoCapitalize="none"
      />

      <Input
        id="password"
        label="Password"
        iconPack={Feather}
        icon="lock"
        iconSize={20}
        errorText={""}
        secureTextEntry={true}
        onInputChange={inputHandleChange}
        autoCapitalize="none"
      />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log("submitting...")}
        customStyles={{ marginTop: 20 }}
        // disabled={true}
      />
    </>
  );
};

export default SignUpForm;
