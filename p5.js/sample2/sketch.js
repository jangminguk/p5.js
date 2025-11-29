function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(253, 245, 230);
  face(width/2, height/2);
}

function face(x,y) {
  push();
    translate(x, y);
  
    //귀
    ellipse(-112,-10,50,80);
    ellipse(112,-10,50,80);
  
    //얼굴
    ellipse(0,0,230,300);
  
    //흰자
   ellipse(-55,-10,50,35);
    ellipse(55,-10,50, 35);

  
    //검은자
    fill("black");
    ellipse(-55,-13,26,26);
    ellipse(55,-13,26,26);
  
    //입
   
   bezier(-40, 66,   -45, 105,   45, 105,   40, 66);
  
    //코
    strokeWeight(5);
    line(0,45,-15,35);
    line(0,45,15,35);
    line(0,-5,  -5,25)
    //눈썹

    triangle(-70,-35  ,-50,-38,  -35,-31)
    triangle(70,-35  ,50,-38,  35,-31)
  
    //머리카락
    ellipse(0,-75,200,60);
    ellipse(0,-120,210,110);
    ellipse(-80,-100, 70, 90);
    ellipse(80,-100, 70, 90);
  pop();
}