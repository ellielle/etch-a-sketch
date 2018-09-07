const container = document.querySelector(".container");
const backgroundColor = document.body.style.backgroundColor;
const slider = document.querySelector(".slider");

window.onload = drawGrid(16);

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

function changeColorClick(e) {
    e.target.style.background = "black";
}
function changeColorDraw(e) {
    
    if (e.buttons == 1) {
        e.target.style.background = "black";
    }
    else if (e.buttons == 2) {
        e.target.style.background = backgroundColor;
    }
}


function resetGrid() {
    let resetGrid = document.querySelectorAll(".grid");
    for (let i = 0; i < resetGrid.length; i++) {
        resetGrid[i].style.background = backgroundColor;
    }
}

function changeGridSize() {
    slider.classList.remove("hide");
    let removeGrid = document.querySelectorAll(".grid");    
    for (let i = 0; i < removeGrid.length; i++) {
        removeGrid[i].parentNode.removeChild(removeGrid[i]);
    }

    drawGrid(newSize);
}