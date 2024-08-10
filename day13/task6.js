// Function to fetch data from an invalid URL
const fetchDataFromInvalidURL = () => {
  fetch("https://invalid-url.example.com/data") // Invalid URL
    .then((response) => {
      // Check if response status is not OK
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse JSON data if response is OK
    })
    .then((data) => {
      console.log(data); // This won't execute if the URL is invalid
    })
    .catch((error) => {
      console.error(`Fetch error: ${error.message}`); // Handle and log the error
    });
};

// Call the function
fetchDataFromInvalidURL();

const fetchInfo = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.error("Error: ", error.message);
  }
};

fetchInfo("http://abc.om/ab");
