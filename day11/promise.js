const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is resolved after 2 seconds!");
  }, 2000);
});

const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is rejected after 2 seconds!");
  }, 2000);
});

myPromise.then((res) => console.log(res));
anotherPromise.catch((error) => console.log(error));
