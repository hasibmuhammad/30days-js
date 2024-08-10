class CustomError extends Error {
  constructor(message) {
    // pass this message the the parent class
    super(message);
  }
}

const triggerErrorMessage = () => {
  throw new CustomError("This is the error message from custom error message!");
};

try {
  triggerErrorMessage();
} catch (error) {
  console.error(error.message);
}
