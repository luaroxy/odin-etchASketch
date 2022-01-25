
for (let i=0; i<(16*16); i++){
    const square = document.createElement("div");
    square.classList.add("cell");
    document.getElementById("grid").appendChild(square);
}

let cells = document.querySelectorAll(".cell");

cells.forEach((div) => {
div.addEventListener('mouseover', function(){
  div.style.background = "pink"
});
});