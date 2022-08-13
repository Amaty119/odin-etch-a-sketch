const container = document.querySelector("#container");
const penBtn = document.querySelector("#penBtn");
const clearBtn = document.querySelector("#clearBtn");
const eraserBtn = document.querySelector("#eraserBtn");
let size = document.querySelector("#slide");
let value = document.querySelector("#value");
value.textContent = size.value + " x " + size.value;
let color = 0;


function createGrid (gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const divs1 = document.createElement("div");
        divs1.className = "outerClass";
        divs1.style.height = 40/gridSize + "vh";
        for(let j = 0; j < gridSize; j++) {
            const divs2 = document.createElement("div");
            divs2.className = "innerClass";
            divs1.appendChild(divs2);
            divs2.style.width = 40/gridSize + "vh";
            divs2.style.height = 40/gridSize + "vh";
        }
        container.appendChild(divs1);
    }
    
}

function clearGrid() {
    const gridRows = document.querySelectorAll(".outerClass");
    const gridBoxes = document.querySelectorAll(".innerClass");
    gridBoxes.forEach((gridBox) => {
        gridBox.remove();
    });
    gridRows.forEach((row) => {
        row.remove();
    });
}

function draw() {
    const gridBoxes = document.querySelectorAll(".innerClass");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener("mouseover", (e) => {
            if(e.buttons == 1) {
                if(color == 0)
                {
                    gridBox.classList.add("active");
                } else {
                    gridBox.classList.remove("active");
                }
            }
        });
    });
}

size.addEventListener("click", () => {
    clearGrid();
    createGrid(size.value);
    value.textContent = size.value + " x " + size.value;
    draw();
});

clearBtn.addEventListener("click", () => {
    const gridBoxes = document.querySelectorAll(".innerClass");
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.remove("active");
    });
});

penBtn.addEventListener("click", () => color = 0);
eraserBtn.addEventListener("click", () => color = 1);

    

createGrid(size.value);
draw();