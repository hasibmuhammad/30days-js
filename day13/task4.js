class CustomValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

const validateUserInput = (input) => {
  if (input.trim() === "") {
    throw new CustomValidationError("You can't provide empty string here!");
  }
};

const handleValidation = (input) => {
  try {
    validateUserInput(input);
    console.log("Input is valid!");
  } catch (error) {
    console.error(error.message);
  }
};

handleValidation(" ");
handleValidation("hello");
