const container = document.querySelector('#container');

const divs1 = document.createElement("div");
divs1.className = "outerClass";
const divs2 = document.createElement("div");
divs2.className = "innerClass";
divs2.style.border = "thick solid black";

for(let i = 0; i < 4; i++) {
    divs1.append((divs2).cloneNode());
}


for(let i = 0; i < 4; i++) {
    container.appendChild(divs1.cloneNode(true));
}
