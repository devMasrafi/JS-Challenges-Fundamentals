const form = document.querySelector("form");
const result = document.querySelector(".bmiResult");
console.log(result);

form.addEventListener("submit", (input) => {
  input.preventDefault();
  //   console.log(input);
  const inputHeight = document.querySelector("#height").value;
  const inputWeight = document.querySelector("#weight").value;

  //   console.log(height);
  //   console.log(typeof height);

  const validHeight = inputHeight.trim();
  const validWeight = inputWeight.trim();
  const height = parseFloat(validHeight);
  const weight = parseFloat(validWeight);
  //   console.log(typeof weight);

  if ( isNaN(height) || height <= 0) {
    result.innerHTML = `enter valid Height`;
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = `enter valid Weight`;
  } else {
    const bmiResult = (weight / (height * height)).toFixed(2);

    // result to DOM
    result.innerHTML = `${bmiResult}`;
  }
});
