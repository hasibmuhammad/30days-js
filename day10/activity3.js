const addItem = () => {
  const list = document.getElementById("list");

  const formContainer = document.getElementById("formContainer");

  formContainer.addEventListener("submit", (e) => {
    if (e.target.tagName === "FORM") {
      e.preventDefault();
      const formData = new FormData(e.target);
      const object = Object.fromEntries(formData.entries());

      const li = document.createElement("li");

      if (object.item) {
        li.textContent = object.item;
        list.appendChild(li);
      }
    }
  });
};

addItem();
