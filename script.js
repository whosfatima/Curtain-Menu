const button = document.querySelector("button");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");

// button.onclick = () => {
//     red.classList.toggle('red-bg')
//     yellow.classList.toggle('yellow-bg')
//     green.classList.toggle('green-bg')
// }
button.addEventListener("click", () => {
  red.classList.toggle("red-bg");
  yellow.classList.toggle("yellow-bg");
  green.classList.toggle("green-bg");
});
