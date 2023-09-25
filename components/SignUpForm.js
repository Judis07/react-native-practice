import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import { validate } from "validate.js";

const SignUpForm = () => {
  const inputHandleChange = (inputID, inputValue) => {
    if (inputID === "firstName" || inputID === "lastName") {
      const constraints = {
        presence: { allowEmpty: false },
        format: {
          pattern: "[a-z]+",
          flags: "i",
          message: "value can only contains letters",
        },
      };
      const result = validate(
        { [inputID]: inputValue },
        { [inputID]: constraints }
      );

      console.log(result);
    } else if (inputID === "email") {
    } else if (inputID === "password") {
    }
  };

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
        onInputChange={inputHandleChange}
      />

      <Input
        id="password"
        label="Password"
        iconPack={Feather}
        icon="lock"
        iconSize={20}
        errorText={""}
        onInputChange={inputHandleChange}
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
