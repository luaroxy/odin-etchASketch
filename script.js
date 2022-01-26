numberOfSquares = 16;
console.log(numberOfSquares);

const button = document.querySelector('button');
button.addEventListener('click',() => {
  cells.forEach((div) => {
      div.style.background = ""
    });
  
    let numberOfSquares = window.prompt("Please enter the number of squares per side between 1 and 100");
    console.log(numberOfSquares);
})

function createSquares(numberOfSquares){
  for (let i=0; i<(numberOfSquares*numberOfSquares); i++){
    const square = document.createElement("div");
    square.classList.add("cell");
    document.getElementById("grid").appendChild(square);
  }
}

createSquares(numberOfSquares);

let cells = document.querySelectorAll(".cell");
cells.forEach((div) => {
div.addEventListener('mouseover', function(){
div.style.background = "pink"
});
});