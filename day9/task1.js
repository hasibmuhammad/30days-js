const contentEl = document.getElementById("content");
const nameEl = document.getElementsByClassName("name");

contentEl.textContent = "This is the new content!";

for (let i = 0; i < nameEl.length; i++) {
  nameEl[i].style.backgroundColor = "red";

  if (i === 3) {
    nameEl[i].style.backgroundColor = "green";
  }
}
