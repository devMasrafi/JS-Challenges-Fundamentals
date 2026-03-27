const colorPicker = document.querySelectorAll(".color-buttons");
const body = document.querySelector("body");

// console.log(colorPicker);


colorPicker.forEach((buttons) => {
    // console.log(buttons);
    buttons.addEventListener("click", (event) => {
    console.log(event.target);

    if (event.target.id === "green") {
      document.body.style.backgroundColor = "green";
    }
    if (event.target.id === "blue") {
      document.body.style.backgroundColor = "blue";
    }
    if (event.target.id === "red") {
      document.body.style.backgroundColor = "red";
    }
    if (event.target.id === "yellow") {
      document.body.style.backgroundColor = "yellow";
    }
  });
  
});
