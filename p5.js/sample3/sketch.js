let bgColor;

function setup() {
  createCanvas(600, 400);
  bgColor = color(random(255), random(255), random(255));
  background(bgColor);

  
}

function draw() {
  background(bgColor);
    face(width/2, height/2);
}

function keyPressed() {
  if (key === ' ') { 
    bgColor = color(random(255), random(255), random(255)); 
  }
}

function face(x,y) {
  push();
    translate(x, y);
  
    let center = createVector(x,y);
    let mouse = createVector(mouseX, mouseY);
  

    let move = p5.Vector.sub(mouse,center);
  

    move.mult(0.06);
  
    let pupilMove = move.copy();
  
    pupilMove.limit(3);
  
    let eyeMove = move.copy();
    eyeMove.mult(0.5);
  
    let noseMove = move.copy();
    noseMove.mult(0.7);
  
    let mouthMove = move.copy();
    mouthMove.mult(0.4);
  
    let hairMove = move.copy();
    hairMove.mult(0.3);
  
    let browMove = move.copy();
    browMove.mult(0.6);
  
    let earMove = move.copy();
    earMove.mult(-0.5);
  
  

    push();
      translate(earMove.x, earMove.y);
       ellipse(-112,-10,50,80);
    ellipse(112,-10,50,80);
    pop();
  
  
    ellipse(0,0,230,300);
  
    push();
    translate(eyeMove.x, eyeMove.y);
  
    if(mouseIsPressed){
      rectMode(CENTER);
      fill("black");
      rect(-50,0,50,5,5);
      rect(50,0,50,5,5);   
     }
    else {
      
      translate(eyeMove.x, eyeMove.y);
     ellipse(-55,-10,50,35);
    ellipse(55,-10,50, 35);
      
      
      push();
        fill("black");
        translate(pupilMove.x, pupilMove.y);
          ellipse(-55,-13,26,26);
    ellipse(55,-13,26,26);
      pop(); 
    }
    pop();
  
  
    push();
      translate(mouthMove.x, mouthMove.y);
   if(mouseIsPressed){
      rectMode(CENTER);
      fill("black");
     bezier(-40, 75,   -45, 94,   45, 94,   40, 75);
     }
    else {
      fill("black");
       bezier(-40, 66,   -45, 105,   45, 105,   40, 66);
    pop();
    }
    
    push();
      translate(noseMove.x, noseMove.y);
      strokeWeight(5);
      line(0,45,-15,35);
    line(0,45,15,35);
    line(0,-5,  -5,25)
    pop();
  
    push();
      translate(browMove.x, browMove.y);
      fill("black");
      triangle(-70,-35  ,-50,-38,  -35,-31)
    triangle(70,-35  ,50,-38,  35,-31)
    pop();
  

    push();
      translate(hairMove.x, hairMove.y);
      fill("black");
   ellipse(0,-75,200,60);
    ellipse(0,-120,210,110);
    ellipse(-80,-100, 70, 90);
    ellipse(80,-100, 70, 90);
    pop();
  pop();
}