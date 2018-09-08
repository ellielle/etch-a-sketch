const container = document.querySelector(".container");
const backgroundColor = document.body.style.backgroundColor;
const slider = document.querySelector(".slider");
const defaultSize = 16;
const colorPicker = document.querySelector("#colorPicker");
const rainbowButton = document.querySelector(".rainbow-button");
let drawColor = "#000000";
let rgb = false;

window.onload = drawGrid(defaultSize);
window.onload = colorPicker.value = "#000000";


function drawGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        container.appendChild(div).classList.add("grid");

        const gridItems = document.querySelectorAll(".grid")[i];
        gridItems.style.height = (600 / size) + "px";
        gridItems.style.width = (600 / size) + "px";

        div.addEventListener("click", (e) =>
            changeColorClick(e)
        );
        div.addEventListener("mousemove", (e) =>
            changeColorDraw(e)
        );

    }
}

function setDrawColor() {
    let newColor = document.getElementById("colorPicker");
    
    newColor.addEventListener("input", (e) => {
        drawColor = newColor.value;
    }, false);

    
}

function changeColorClick(e) {
    if (!rgb) {
        e.target.style.background = drawColor;
    }
    else {
        e.target.style.background = rgbColor();
    }
}
function changeColorDraw(e) {
    if (!rgb) {
        if (e.buttons == 1) {
            e.target.style.background = drawColor;
        }
        else if (e.buttons == 2) {
            e.target.style.background = backgroundColor;
        }
    }
    else {
        if (e.buttons == 1) {
            e.target.style.background = rgbColor();
        }
        else if (e.buttons == 2) {
            e.target.style.background = backgroundColor;
        }
    }
}


function resetGrid() {
    let resetGrid = document.querySelectorAll(".grid");
    for (let i = 0; i < resetGrid.length; i++) {
        resetGrid[i].style.background = backgroundColor;
    }
}

function changeGridSize() {
    let newSize = prompt("Enter a new grid size (Max 64):");
    if (newSize != null) {
        while (newSize > 64 || isNaN(newSize)) {
            console.log(newSize);            
            newSize = prompt("Invalid value. Enter a new grid size (Max 64):");
        }
    }
    else {
        newSize = defaultSize;
    }
    let removeGrid = document.querySelectorAll(".grid");    
    for (let i = 0; i < removeGrid.length; i++) {
        removeGrid[i].parentNode.removeChild(removeGrid[i]);
    }

    drawGrid(newSize);
}

function setRGB() {
    if (!rgb) {
        rgb = true;
        document.getElementById("RGB").style.border = "2px solid #000000";
    }
    else {
        rgb = false;
        document.getElementById("RGB").style.border = "none";
    }    
}

function rgbColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
    return rgbColor;
}