import { useCallback, useReducer } from "react";

import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

import validateInput from "../utilis/actions/formActions";
import { reducer } from "../utilis/reducers/formReducer";

const initialState = {
  inputValidites: {
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignUpForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputHandleChange = useCallback(
    (inputID, inputValue) => {
      const result = validateInput(inputID, inputValue);
      dispatchFormState({ validationResult: result, inputID });
    },
    [dispatchFormState]
  );

  return (
    <>
      <Input
        id="firstName"
        label="First Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconSize={20}
        errorText={formState.inputValidites["firstName"]}
        onInputChange={inputHandleChange}
      />

      <Input
        id="lastName"
        label="Last Name"
        iconPack={FontAwesome}
        icon="user-o"
        iconSize={20}
        errorText={formState.inputValidites["lastName"]}
        onInputChange={inputHandleChange}
      />

      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        icon="mail"
        iconSize={20}
        errorText={formState.inputValidites["email"]}
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
        errorText={formState.inputValidites["password"]}
        secureTextEntry={true}
        onInputChange={inputHandleChange}
        autoCapitalize="none"
      />

      <SubmitButton
        title="Sign up"
        onPress={() => console.log("submitting...")}
        customStyles={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignUpForm;
