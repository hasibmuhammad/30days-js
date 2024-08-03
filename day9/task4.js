const imgEl = document.getElementById("img");
imgEl.setAttribute("alt", "new demo image");

imgEl.classList.add("newClass", "overlay");

imgEl.classList.remove("overlay");

console.log(imgEl);
