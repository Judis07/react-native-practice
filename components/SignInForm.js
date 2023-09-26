import { useCallback, useReducer } from "react";

import { Feather } from "@expo/vector-icons";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

import { reducer } from "../utilis/reducers/formReducer";
import validateInput from "../utilis/actions/formActions";
import { signIn } from "../utilis/actions/authActions";

const initialState = {
  inputValues: {
    email: "",
    password: "",
  },
  inputValidites: {
    email: false,
    password: false,
  },
  formIsValid: false,
};

const SignInForm = () => {
  const [formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputHandleChange = useCallback(
    (inputID, inputValue) => {
      const result = validateInput(inputID, inputValue);
      dispatchFormState({ validationResult: result, inputID, inputValue });
    },
    [dispatchFormState]
  );

  const authHandler = () => {
    const { email, password } = formState.inputValues;

    signIn(email, password);
  };

  return (
    <>
      <Input
        id="email"
        label="Email"
        iconPack={Feather}
        icon="mail"
        iconSize={20}
        keyboardType="email-address"
        errorText={formState.inputValidites["email"]}
        onInputChange={inputHandleChange}
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
      />

      <SubmitButton
        title="Sign In"
        onPress={authHandler}
        customStyles={{ marginTop: 20 }}
        disabled={!formState.formIsValid}
      />
    </>
  );
};

export default SignInForm;
