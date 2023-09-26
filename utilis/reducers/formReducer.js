export const reducer = (state, action) => {
  const { validationResult, inputID, inputValue } = action;

  const updatedValues = {
    ...state.inputValues,
    [inputID]: inputValue,
  };

  const updatedValidites = {
    ...state.inputValidites,
    [inputID]: validationResult,
  };

  let updatedFormIsValid = true;

  for (const key in updatedValidites) {
    if (updatedValidites[key] !== undefined) {
      updatedFormIsValid = false;
      break;
    }
  }

  return {
    inputValues: updatedValues,
    inputValidites: updatedValidites,
    formIsValid: updatedFormIsValid,
  };
};
