numberOfSquares = 16;

const button = document.querySelector('button');
button.addEventListener('click',() => {
  let cells = document.querySelectorAll(".cell");
  cells.forEach((div) => {
      div.style.background = ""
    });
  
    let numberOfSquares = window.prompt("Please enter the number of squares per side between 1 and 100");
    if (numberOfSquares>=1 && numberOfSquares<=100){
      deleteSquares();
      start(numberOfSquares);
    }
    else window.alert("The number of squares per side must be between 1 and 100");
})

function createSquares(numberOfSquares){
  for (let i=0; i<(numberOfSquares*numberOfSquares); i++){
    const square = document.createElement("div");
    square.classList.add("cell");
    document.getElementById("grid").appendChild(square);
  }
}

function deleteSquares(){
  while (document.getElementById("grid").firstChild) {
    document.getElementById("grid").removeChild(document.getElementById("grid").lastChild);
  }
}

function start(numberOfSquares){
  createSquares(numberOfSquares);
  document.documentElement.style.setProperty("--squareNum", numberOfSquares);

  let cells = document.querySelectorAll(".cell");
  cells.forEach((div) => {
  div.addEventListener('mouseover', function(){
  div.style.background = random_rgb();
  });
  });
}

function random_rgb() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgb(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

start(numberOfSquares);