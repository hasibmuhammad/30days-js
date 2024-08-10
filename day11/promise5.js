// promise all and promise race

const fetchPosts = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

const fetchTodos = (url) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.error(error));
};

Promise.all([
  fetchPosts("https://jsonplaceholder.typicode.com/posts"),
  fetchTodos("https://jsonplaceholder.typicode.com/todos"),
])
  .then((result) => console.log("All promises resolved: ", result))
  .catch((error) => console.error("One of the promises rejected.", error));

Promise.race([
  fetchTodos("https://jsonplaceholder.typicode.com/todos"),
  fetchPosts("https://jsonplaceholder.typicode.com/posts"),
])
  .then((res) => console.log(res))
  .catch((error) => console.error(error));
