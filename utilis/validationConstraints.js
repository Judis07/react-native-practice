import { validate } from "validate.js";

export const validateString = (inputID, inputValue) => {
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

  return result && result[inputID];
};

export const validateEmail = (inputID, inputValue) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (inputValue !== "") {
    constraints.email = true;
  }
  const result = validate(
    { [inputID]: inputValue },
    { [inputID]: constraints }
  );

  return result && result[inputID];
};

export const validatePassword = (inputID, inputValue) => {
  const constraints = {
    presence: { allowEmpty: false },
  };

  if (inputValue !== "") {
    constraints.length = {
      minimum: 6,
      message: "must be atleast 6 characters",
    };
  }
  const result = validate(
    { [inputID]: inputValue },
    { [inputID]: constraints }
  );

  return result && result[inputID];
};
