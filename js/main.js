const darkmode = document.getElementById("dark-mode-button");
const lightmode = document.getElementById("light-mode-button");
const bodyElement = document.querySelector("body");

darkmode.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#3D2B1F";
});

lightmode.addEventListener("click", function (event) {
  bodyElement.style.backgroundColor = "#fff0db";
});

const nameElement = document.getElementById("heading");
const inputElement = document.getElementById("name");
const buttonElemt = document.getElementById("send-message-button");

buttonElemt.addEventListener("click", function (event) {
  let enteredName = inputElement.value;

  if (enteredName !== "") {
    nameElement.innerText = " Thank you for your message " + enteredName;
  } else {
    nameElement.innerText = "Please fill in all the boxes!";
  }
});
