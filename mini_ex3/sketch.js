var b;
var ss;
var s;
var currentMillis;
var milliStart = 0;

function preload(){
	b= loadImage("image/background.jpg");
	ss= loadImage("image/starsmall.png");
	s=loadImage("image/star.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(CENTER);




}

function draw() {
currentMillis = floor(millis() - milliStart);
	// image(b,0,0,b.width, b.height);
	background(174,211,104,200);

Throbber();

}

function Throbber(){


		translate(width/2, height/2);
		push();
		for (var i=0; i<12; i=i+1){
			push();
			rotate(TWO_PI*i/12);
			rotate(radians(frameCount*2));
				var tx=0.09*frameCount;
				translate(tx*0.2,0);
				// stroke(1);
				// fill(255,255,255);
				// text(nf(currentMillis, 2), 0, 0);

				ellipse(0,0,20,20);
				// image(s,0,0,20,20);
				translate();
				push();
				rotate(TWO_PI*i/12);
				rotate(radians(frameCount*2));
					var tx=0.09*frameCount;
					translate(tx*0.2,0);
					// stroke(1);
					// fill(255,255,255);
					// text(nf(currentMillis, 2), 0, 0);
					// noStroke();
					ellipse(0,0,5,5);
					// image(ss,0,0,10,10);
					translate();
			pop();
		}

		// push();
		// rotate(TWO_PI*i/8);
		// 	var tx=0.2*-frameCount;
		// 	translate(tx,0);
		// 	ellipse(0,0,20,20);
		// 	translate();
		// pop();

}
//	for (var tx=0; tx<10; tx=tx*0.2){
