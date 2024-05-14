let cor;
let circuloX; // horizontal
let circuloY; // vertical

//console.log mouseIsPressed
function setup() {
  createCanvas(400, 400);// width x height
  background(color(0, 150, 200));
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  circuloX = [0, 0, 0]
  circuloY = [random(height), random(height), random(height)]
}

//circuloX = 0, 0, 0
//circuloY = 150, 300, 50

function draw() {
  fill(cor);
  //consele.log(circuloX.lenght); 
  for(let dedo in circuloX){
    //console.log(dedo)
    circle(circuloX[dedo], circuloY[dedo], 50);
      circuloX[dedo]+= random(0, 3)
      circuloY[dedo]+= random(-3, 3)
    if(circuloX[dedo] >= width) {
      circuloX[dedo] = 0
      circuloY[dedo] = random(height)
    }
  }
  
 
 
  
    if(mouseIsPressed) {
    cor = color(random(0, 255), random(0, 255), random(0, 255))
  }
  }


 
  