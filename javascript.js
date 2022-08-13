const container = document.querySelector('#container');


function createGrid (gridSize){
    for(let i = 0; i < gridSize; i++) {
        const divs1 = document.createElement("div");
        divs1.className = "outerClass";
        for(let j = 0; j < gridSize; j++) {
            const divs2 = document.createElement("div");
            divs2.className = "innerClass";
            divs1.appendChild(divs2);
        }
        container.appendChild(divs1);
    }
    
}

createGrid(4);
