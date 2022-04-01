let welcomeMessage = document.getElementById("welcomeMessage");
let pressedKey = document.getElementById("key");
let codeKey = document.getElementById("code");
let whichKey = document.getElementById("which");
let locationKey = document.getElementById("location");

window.addEventListener("keydown", (event) => {
    welcomeMessage.style.display = "none";
    pressedKey.innerHTML = event.key;
    codeKey.innerHTML = event.code;
    whichKey.innerHTML = event.which;
    locationKey.innerHTML = event.location;

});