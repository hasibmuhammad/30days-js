const changeBg = () => {
  const bgEl = document.getElementById("bg");

  bgEl.addEventListener("mouseover", () => {
    bgEl.style.backgroundColor = "red";
  });
  bgEl.addEventListener("mouseout", () => {
    bgEl.style.backgroundColor = "";
  });
};

// const watchInput = () => {
//   const nameEl = document.getElementById("inputName");

//   //   nameEl.addEventListener("keydown", () => {
//   //     console.log(nameEl.value);
//   //   });
//   nameEl.addEventListener("keyup", () => {
//     console.log(nameEl.value);
//   });
// };

const onSubmit = () => {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const formDataOject = Object.fromEntries(formData.entries());

    console.log(formDataOject);
  });
};

const onChangeCountry = () => {
  const countryEl = document.getElementById("country");

  countryEl.addEventListener("change", (e) => {
    const selectedCountry = document.getElementById("selectedCountry");

    selectedCountry.textContent = e.target.value;
  });
};

const watchList = () => {
  const listEl = document.getElementById("list");
  listEl.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("You clicked on: ", e.target.textContent);
    }
  });
};

watchList();
onChangeCountry();
onSubmit();
// watchInput();
// changeBg();
