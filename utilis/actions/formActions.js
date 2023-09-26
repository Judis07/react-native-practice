import {
  validateEmail,
  validatePassword,
  validateString,
} from "../validationConstraints";

const validateInput = (inputID, inputValue) => {
  if (inputID === "firstName" || inputID === "lastName") {
    const errorArr = validateString(inputID, inputValue);

    return errorArr;
  } else if (inputID === "email") {
    const errorArr = validateEmail(inputID, inputValue);

    return errorArr;
  } else if (inputID === "password") {
    const errorArr = validatePassword(inputID, inputValue);
    return errorArr;
  }
};

export default validateInput;
