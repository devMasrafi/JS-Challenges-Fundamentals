// i need 6hex code/number to make it into a color
// set interval on that color to make it run every 2-1 sec
// make the button work so start or stop btn to controll it.

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

const hexValue = "0123456789ABCDEF";

const randomColor = () => {
  let colorValue = "#";

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.random() * 16;
    colorValue = colorValue + hexValue[Math.floor(randomNumber)];
  }

  return colorValue;
};

// randomColor();
const randomBgColor = () => {
  document.body.style.backgroundColor = randomColor();
};

startBtn.addEventListener("click", startChange);
stopBtn.addEventListener("click", stopChange);

let intervalId;

const startChange = () => {
  if (!intervalId) {
    intervalId = setInterval(randomBgColor, 2000);
    console.log(`started`);
  }
};
const stopChange = () => {
  clearInterval(intervalId);
  intervalId = null;
  console.log(`stoped`);
};
