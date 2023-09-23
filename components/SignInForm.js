import { Feather } from "@expo/vector-icons";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignInForm = () => {
  return (
    <>
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
        title="Sign In"
        onPress={() => console.log("submitting...")}
        customStyles={{ marginTop: 20 }}
        // disabled={true}
      />
    </>
  );
};

export default SignInForm;
