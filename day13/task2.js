const divideTwoNum = (a, b) => {
  if (b === 0) throw new Error(`Can't divide by ${b}`);
  return a / b;
};
const divideTwoNumWithErrorHandling = () => {
  try {
    const res = divideTwoNum(2, 0);
    console.log(res);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Execution completed!");
  }
};

divideTwoNumWithErrorHandling();
