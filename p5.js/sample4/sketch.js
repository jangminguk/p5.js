
let startTime;

function setup() {
  createCanvas(600, 400);
  startTime = millis();
}

function draw() {
  let t = (millis() - startTime) / 10000;
  t = constrain(t, 0, 1);

  background(225);
  strokeWeight(0);


  let sky1 = color(170, 220, 255);
  let sky2 = color(110, 180, 255);
  let sky3 = color(50, 120, 220);
  let sky4 = color(20, 60, 160);

  let 하늘1 = color(225, 200, 84);
  let 하늘2 = color(225, 176, 74);
  let 하늘3 = color(253, 118, 62);
  let 하늘4 = color(209, 77, 62);

  fill(lerpColor(sky1, 하늘1, t));
  quad(600, 0  , 0, 0, 0, 0,   600, 90);

  fill(lerpColor(sky2, 하늘2, t));
  quad(600, 40  , 0, 0  , 0, 80  , 600, 90);

  fill(lerpColor(sky3, 하늘3, t));
  quad(600, 90,   0, 80,   0, 170,   600, 150);

  fill(lerpColor(sky4, 하늘4, t));
  quad(600, 150,   0, 170,   0, 250,   600, 250);

  let land1 = color(60, 110, 90);
  let land2 = color(90, 140, 90);
  let land3 = color(105, 170, 100);
  let land4 = color(110, 180, 110);
  let land5 = color(120, 190, 120);

  let 땅1 = color(49, 42, 46);
  let 땅2 = color(67, 57, 53);
  let 땅3 = color(92, 67, 62);
  let 땅4 = color(108, 78, 67);
  let 땅5 = color(131, 83, 68);

  fill(lerpColor(land5, 땅1, t));
  quad(0, 250  , 0, 400,   600, 400,   600, 250);

  fill(lerpColor(land1, 땅1, t));
  triangle(0, 250,   600, 250  , 0, 260);

  fill(lerpColor(land2, 땅2, t));
  triangle(0, 260,   600, 250,   600, 270);

  fill(lerpColor(land3, 땅3, t));
  triangle(0, 300,   600, 270,   0, 260);

  fill(lerpColor(land4, 땅4, t));
  triangle(0, 300,   600, 270,   600, 320);

  fill(lerpColor(land5, 땅5, t));
  quad(0, 300,   0, 400,   600, 400,   600, 320);


  let startY = 60;
  let endY = 200;
  let sunY = lerp(startY, endY, t);

  let startSize = 50;
  let endSize = 90;
  let sunSize = lerp(startSize, endSize, t);

  fill(253, 255, 78);
  circle(300, sunY, sunSize);

  let arcStart = color(255, 255, 200);
  let arc1 = color(255, 205, 60);
  let arc2 = color(255, 190, 60);

  fill(lerpColor(arcStart, arc1, t));
  arc(300, sunY, sunSize, sunSize, radians(10), radians(50));

  fill(lerpColor(arcStart, arc2, t));
  arc(300, sunY, sunSize, sunSize, radians(30), radians(60));
}

