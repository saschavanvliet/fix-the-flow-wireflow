// Selects the FIRST occurance of <button>;
var button = document.querySelector("button");
var element = document.querySelector("div");

button.addEventListener("click", function() {
  element.classList.toggle("yay");
});
