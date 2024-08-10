// promise
const myPromise = new Promise((resolve, reject) => {
  return setTimeout(() => {
    resolve("This promise is resolved after 2 seconds!");
  }, 5000);
});

// cosumer with async/await
const asyncFunc = async () => {
  const res = await myPromise;

  console.log(res);
};
asyncFunc();

// promise to reject
const newPromise = new Promise((resolve, reject) => {
  return setTimeout(() => {
    reject("This is the rejection from another promise after 10 seconds!");
  }, 10000);
});

// consumer with async/await
const anotherAsync = async () => {
  try {
    const res = await newPromise;
    console.log("Response: ", res);
  } catch (error) {
    console.error("Error: ", error);
  }
};
anotherAsync();
