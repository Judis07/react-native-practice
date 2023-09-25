import { Feather } from "@expo/vector-icons";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

import inputHandleChange from "../utilis/actions/formActions";

const SignInForm = () => {
  return (
    <>
      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        icon="mail"
        iconSize={20}
        keyboardType="email-address"
        errorText={""}
        onInputChange={inputHandleChange}
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
      />

      <SubmitButton
        title="Sign In"
        onPress={() => console.log("submitting...")}
        customStyles={{ marginTop: 20 }}
        // disabled={true}
      />
    </>
  );
};

export default SignInForm;
