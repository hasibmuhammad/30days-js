// .then.catch approach
const fetchData = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};
// fetchData("https://jsonplaceholder.typicode.com/todos");

// async await approach
const fetchInfo = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
};
// fetchInfo("https://jsonplaceholder.typicode.com/posts");

// try catch approach with async await;
const getInfo = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
getInfo("https://jsonplaceholder.typicode.com/posts");
