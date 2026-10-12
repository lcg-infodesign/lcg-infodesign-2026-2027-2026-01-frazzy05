function preload() {
  // put preload code here
}

//variable for sun position at the start
let sunHeight = 750;

//variables for color change
let redVal = 255;
let blueVal = 0;

//variable for X coordinate of cloud
  let cloudOneX = 50;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (redVal, 130, blueVal);

  //sun
  fill(255, 208, 50, 200);
  stroke (255, 180, 50, 200);
  circle(300, sunHeight, 180);
  fill(255, 150, 0, 255);
  stroke (255, 150, 0, 255);
  circle(300, sunHeight, 140);

  //mountains
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400);
  
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400)
  
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

  //palm tree 1
  fill("rgb(118,80,72)");
  stroke(0);
  rect(40, 360, 15, 50);
  
  fill("green");
  triangle(15, 380, 49, 360, 30, 350);
  triangle(89, 370, 47, 360, 60, 345);
  triangle(40, 380, 50, 360, 40, 340);

 //palm tree 2
  fill("rgb(118,80,72)");
  stroke(0);
  rect(280, 370, 15, 50);
  fill("green");
  triangle(255, 387, 285, 373, 280, 354);
  triangle(324, 380, 294, 355, 286, 373);
  triangle(292, 364, 270, 340, 284, 390);

  //cloud 1
  fill(	250,235,215);
  stroke(250,235,215);
  ellipse(cloudOneX, 300, 80, 40);
  cloudOneX = frameCount % width //sets the x coordinate to the frame count
  ellipse(cloudOneX - 40, 300, 50, 20);
  ellipse(cloudOneX + 38, 308, 40, 20);

  //cloud 2
 ellipse(cloudOneX + 300, 280, 50, 30);
 ellipse(cloudOneX + 270, 270, 75, 50);
 ellipse(cloudOneX + 240, 280, 50, 30);
 ellipse(cloudOneX + 265, 255, 50, 30);

  //cloud 3
 ellipse(cloudOneX - 250, 280, 50, 30);
 ellipse(cloudOneX - 220, 270, 75, 50);
 ellipse(cloudOneX - 190, 280, 50, 30);
 ellipse(cloudOneX - 215, 255, 50, 30);
 
 //cloud 4
  ellipse(cloudOneX, 200, 150, 60);
  ellipse(cloudOneX - 60, 205, 70, 40);
  ellipse(cloudOneX + 68, 208, 60, 30);
  ellipse(cloudOneX - 30, 220, 70, 40);
  ellipse(cloudOneX + 20, 180, 70, 40);
  ellipse(cloudOneX - 30, 180, 70, 40);

//condition to move the sun up until it reaches a certain height
  if (sunHeight > 130) {
 sunHeight -= 1.3;
  }

// condition to change the background color from red to blue as the sun rises
if (sunHeight > 130) {
  redVal -= 0.5;
if (redVal < 0) redVal = 0;
  blueVal += 0.6;
}

}
