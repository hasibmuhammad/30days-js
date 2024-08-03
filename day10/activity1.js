// const changeTextCotnent = () => {
//   const changeEl = document.getElementById("change");
//   const paragraphEl = document.getElementById("paragraph");

//   changeEl.addEventListener("click", () => {
//     paragraphEl.textContent = "changed";
//   });
// };

const toggleImage = () => {
  const buttonEl = document.getElementById("doubleClick");
  const imageEl = document.getElementById("image");

  buttonEl.addEventListener("dblclick", () => {
    imageEl.classList.toggle("hidden");
  });
};

toggleImage();
// changeTextCotnent();
