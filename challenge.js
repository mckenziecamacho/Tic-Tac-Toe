let button = document.createElement("button");
button.innerHTML = "Reset";
document.body.appendChild(button);

button.addEventListener("click", function(){
    console.log("Button Clicked");
});