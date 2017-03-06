//absgasashlsjbas
function Ball(x,y) {
this.x=x;
this.y=y;
this.d;
this.acc_x=random(-0.1,0.1);
this.acc_y=random(-0.1,0.1);
this.vel_x=random(-1,2);
this.vel_y=random (-1,2);
this.isMouseClicked=false;
 this.show = function () {
 
 fill(120,200,150);
ellipse(this.x,this.y,10,10);
 
 }
 this.update = function() {
  if(this.isMouseClicked)
  {
   this.x+=this.vel_x;
   this.y+=this.vel_y;
   this.vel_x+=this.acc_x;
   this.vel_y+=this.acc_y;
  }
 }
 this.bounce = function() {
 
   if(this.x>600 || this.x<0)
   {
   this.vel_x*=-1;
   }
   if(this.y<0 || this.y>600)
  {
  
  this.vel_y*=-1;
  }
 
 } 
 
 this.isMouseCollision = function () {
 
 var d= dist(this.x,this.y,mouseX,mouseY);
 
 if( d<10 )
  {
  this.isMouseClicked=true; 
  }
 
 }
}