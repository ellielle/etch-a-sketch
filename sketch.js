const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    for (let x = 0; x < 16; x++) {
        const div = document.createElement("div");
        div.textContent = "test";
        div.setAttribute("class", "grid");
        div.style.backgroundColor = "rgb(255, 255, 255)";
        div.addEventListener("mouseover", (e) =>
            changeColor(e)
        );
        container.appendChild(div);
    }
}

function changeColor(e) {
    // rgb(255, 255, 255)  - 51
    e.target.style.backgroundColor = "black";
    //let color = e.target.style.backgroundColor.toString().split(/[1-9]/g,);
    console.log(e);
}

function setNewGridSize(num) {
    
}