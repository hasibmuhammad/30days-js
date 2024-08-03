const fetchData = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

fetchData("Hello 1", 1000).then((message) => {
  console.log(message);
  return fetchData("Hello 2", 2000).then((message) => {
    console.log(message);
    return fetchData("Hello 3", 3000).then((message) => console.log(message));
  });
});
