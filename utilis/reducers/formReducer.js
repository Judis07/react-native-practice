export const reducer = (state, action) => {
  const { validationResult, inputID } = action;

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
    inputValidites: updatedValidites,
    formIsValid: updatedFormIsValid,
  };
};
