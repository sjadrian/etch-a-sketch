const container = document.querySelector('.container');
const eraserButton = document.querySelector('.button-eraser');
const colorButton = document.querySelector('.button-color');
const clearButton = document.querySelector('.button-clear');
const slider = document.querySelector(".slider")
const sliderVal = document.querySelector(".slidervalue")

let gridLength = 20;
const containerSize = 600;

colorButton.classList.add("button-active");
let currentColorClass = `color-black`;

let mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
  console.log("mousedown")
}
document.body.onmouseup = function() {
  mouseDown = 0;
  console.log("mouseup")
}

function updateSlider(slideAmount) {
    sliderVal.textContent = `${slideAmount} x ${slideAmount}`
    gridLength = slideAmount;
    createGrid(slideAmount);
}

function activeColor() {
    colorButton.classList.add("button-active");
    eraserButton.classList.remove("button-active");
    currentColorClass = 'color-black';
}

function activeEraser() {
    eraserButton.classList.add("button-active");
    colorButton.classList.remove("button-active");
    currentColorClass = 'color-white';
};

function createGrid(gridLength) {
    container.innerHTML = '';
    for (let i = 0; i < gridLength; i++) {    
        const row = document.createElement('div');
        row.classList.add("row");
        for (let j = 0; j < gridLength; j++) {
            const box = document.createElement('div');
            box.classList.add("box");
            box.style.width = `${(containerSize - gridLength * 2) /gridLength}px`
            box.style.height = `${(containerSize - gridLength * 2) /gridLength}px`
            box.addEventListener("mouseover", colorChangeHandler);
            box.addEventListener("mousedown", colorChangeHandler);
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

eraserButton.addEventListener("click", activeEraser);
colorButton.addEventListener("click", activeColor);
clearButton.addEventListener("click", ()=> createGrid(gridLength));

function colorChangeHandler(event) {
    if (mouseDown || event.type === 'mousedown') {
        console.log("yow")
        this.classList.remove('color-black', 'color-white');
        this.classList.add(currentColorClass);
    }
}

createGrid(gridLength);
