const randomPromise = () => {
  return new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum > 0.5) {
      resolve("This is the resolve case here!");
    } else {
      reject(new Error("This is the reject case here!"));
    }
  });
};

randomPromise()
  .then((res) => console.log(res))
  .catch((error) => console.error(error.message));
