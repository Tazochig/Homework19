let container = document.getElementById("container");
let add_button = document.getElementById("add_button");

add_button.addEventListener("click", () => {
  let li = document.createElement("li");
  document.body.appendChild(li);
  let teqsti = prompt("შეიყვანეთ ინფო");
  li.textContent = teqsti;
});
