// Original code by Owen Roberts

var x = 10;
var y = 100;

var xupdate = 4;
var yupdate = 7;

function setup() { 
   createCanvas(640, 480);
  background('white');
}

function draw() {
   //background(150);
    
    circle(x, y, 50, 50);
    x += xupdate;
		y += yupdate;

    if (x > width || x <= 0) {
      xupdate *= -1;
    }
	
		if (y > height || y <= 0) {
			yupdate *= -1;
		}

}