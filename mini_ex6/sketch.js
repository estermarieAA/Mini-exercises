//variables
let osc2;
let playing=false;

let x=0;
let y=0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(50)


//oscillator 2
osc2= new p5.Oscillator();
osc2.setType('sine');
osc2.start();

}

function draw() {

//rules
	fill(0)
	textSize(7);
	text("Chance - a generative program \n 1) Take a random number between 0 and 1. \n 2) \n From 0-25 draw line in center of canvas and loop the line 100 times, showing 10. \n From 25-50 draw triangle in center of canvas. \n From 50-75 draw rectangle in center of canvas. \n From 75-100 draw cirkel in center of canvas. \n 3) Increas radius (x,y) of objects by 4 ich time draw runs. \n Try to change the sound by changing the width of the canvas. ",mouseX,mouseY,200,200);

background(255,255,255,10)

//playing oscillator 2
sound();

//painting
		x=x+4;
		y=y+4;
		noFill();

		if(random(1)<0.25){
			for( let i=0; i<100; i=i+10){
				push();
				stroke(255,0,0,30);
				line(windowWidth/2-i,windowHeight/2-i,x,y);
				pop();
			}
		}else if(random(1)<0.5 && random(1)>0.25){
			push();
			stroke(0,0,255);
			triangle(windowWidth/2-x,windowHeight/2+y, windowWidth/2+x,windowHeight/2+y, windowWidth/2,windowHeight/2-y);
			pop();
		}else if(random(1)<0.75 && random(1)>0.5){
			push();
			stroke(0,255,0);
			rectMode(CENTER);
			rect(windowWidth/2,windowHeight/2,x,y);
			pop();
		}else if (random(1)<1 && random(1)>0.75){
			noFill();
			ellipseMode(CENTER);
			ellipse(windowWidth/2,windowHeight/2, x,y);
		}

		//when the shapes touch the widht or height of the screen,
		// they are drawn from the center again
		if(x>width){
			x=0;
		}
		if(y>height){
			y=0;
		}
}


// a function that changes the frequence of the oscillator through a for loop
//denpending on the width of the canvas
function sound(){
	for(let i=0; i<windowWidth; i++){
		osc2.freq(240+i);
		let h=0.01;
		osc2.amp(0.1+h);
	}
}

// to resize the canvas if you begin to change the sound
function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
