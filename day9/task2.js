let divEl = document.createElement("div");
divEl.textContent = "Hello world";

const contentEl = document.getElementById("content");
contentEl.appendChild(divEl);

const ulEl = document.createElement("ul");
const liEl = document.createElement("li");
liEl.innerText = "Hello UL";

ulEl.appendChild(liEl);

contentEl.appendChild(ulEl);
