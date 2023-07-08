let base = "black";
let click = true;
const DEFAULT_COLOR = "#333333";
const DEFAULT_MODE = "color";

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;

const colorBtn = document.getElementById("colorBtn");

function setCurrentMode(newMode) {
  colorSquare(newMode);
  currentMode = newMode;
}

function setCurrentColor(newColor) {
  currentColor = newColor;
}

const colorPicker = document.getElementById("colorPicker");
colorPicker.oninput = (e) => setCurrentColor(e.target.value);

colorBtn.onclick = () => setCurrentMode("color");

function popularBoard(size) {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

popularBoard(16);

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    popularBoard(input);
  } else {
    alert("wrong size");
  }
}

function colorSquare() {
  if (click) {
    if (base === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = base;
    }
  }
}

function multicolor() {
  if (currentMode === "color") {
    this.style.backgroundColor = currentColor;
  }
}
multicolor();
function changeColor(choice) {
  base = choice;
}

function resetBoard() {
  let board = document.querySelector(".board");
  let square = board.querySelectorAll("div");
  square.forEach((div) => (div.style.backgroundColor = "white"));
}

document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Mode: Coloring";
    } else {
      document.querySelector(".mode").textContent = "Mode: Not Coloring";
    }
  }
});
