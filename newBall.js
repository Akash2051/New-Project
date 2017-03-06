var ball;
var balls=[];
function setup() {
  createCanvas(600,600)

  noFill();
  stroke(30);
  for(var angle=0; angle<2*PI;angle+=0.1){
    var x=300+ 200*cos(angle);
    var y=300+ 200*sin(angle);
    vertex(x,y);
    ball =  new Ball(x,y);
    balls.push(ball);
  }

  
 
}

function draw() {
  
  background('black');
 
 for(var i=0;i<balls.length;i++)
 {
 balls[i].show();
 balls[i].update();
 balls[i].bounce();
 }
}

function mouseClicked () {
 for(var i=0;i<balls.length;i++)
 {
 balls[i].isMouseCollision();

 }
}