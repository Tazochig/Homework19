// let container = document.getElementById("container");
let add_button = document.getElementById("add_button");
let ul = document.querySelector("ul");

add_button.addEventListener("click", () => {
  let teqsti = prompt("შეიყვანეთ ინფო");
  if (teqsti) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.textContent = teqsti;
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      ul.removeChild(li);
    });
  } else {
    alert("chawere rame");
  }
});
