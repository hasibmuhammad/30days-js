const changeBg = () => {
  const bgEl = document.getElementById("bg");

  bgEl.addEventListener("mouseover", () => {
    bgEl.style.backgroundColor = "red";
  });
  bgEl.addEventListener("mouseout", () => {
    bgEl.style.backgroundColor = "";
  });
};

const watchInput = () => {
  const nameEl = document.getElementById("inputName");

  //   nameEl.addEventListener("keydown", () => {
  //     console.log(nameEl.value);
  //   });
  nameEl.addEventListener("keyup", () => {
    console.log(nameEl.value);
  });
};

watchInput();

changeBg();
