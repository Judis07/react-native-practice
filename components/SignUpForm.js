import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  return (
    <>
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
