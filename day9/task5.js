const handleTextChange = () => {
  const changeButtonEl = document.getElementById("changeButton");
  changeButtonEl.addEventListener("click", () => {
    const paragraphEl = document.getElementById("paragraph");
    paragraphEl.textContent = "Replaced";
  });
};

const toggleBorderColor = () => {
  const paragraphEl = document.getElementById("paragraph");
  paragraphEl.addEventListener("mouseover", () => {
    paragraphEl.style.border = "2px solid red";
  });

  paragraphEl.addEventListener("mouseleave", () => {
    paragraphEl.style.border = "none";
  });
};

handleTextChange();
toggleBorderColor();
