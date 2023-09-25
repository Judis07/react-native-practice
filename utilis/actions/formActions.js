import {
  validateEmail,
  validatePassword,
  validateString,
} from "../validationConstraints";

const inputHandleChange = (inputID, inputValue) => {
  if (inputID === "firstName" || inputID === "lastName") {
    const errorArr = validateString(inputID, inputValue);
    console.log(errorArr);
  } else if (inputID === "email") {
    const errorArr = validateEmail(inputID, inputValue);

    console.log(errorArr);
  } else if (inputID === "password") {
    const errorArr = validatePassword(inputID, inputValue);
    console.log(errorArr);
  }
};

export default inputHandleChange;
