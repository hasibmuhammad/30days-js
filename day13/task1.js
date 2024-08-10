const throwError = () => {
  throw new Error("Intentional Error!");
};

const handleError = () => {
  try {
    throwError();
  } catch (error) {
    console.error("Caught an error: ", error);
  }
};

handleError();
