const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
let timerId = null;

function onColorBody() {
  startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    let random = randomIntegerFromInterval(0, 5);

    colors.forEach(elem => {
      document.body.setAttribute("style", `background-color:${colors[random]};`);
    });
  }, 1000);

}
 
startBtn.addEventListener('click', onColorBody);
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.removeAttribute('disabled');
  document.body.setAttribute("style", `background-color: #FFFFFF;`);
});