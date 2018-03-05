var button;
var question;
var questionImage;
var v;


function preload(){
	imga=loadImage('gender.png');
	imgb=loadImage('color.png');
	imgc=loadImage('path.png');
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255,255,255);


	//button setup
	button= createButton('New Question');
	button.position(windowWidth/2-50,windowHeight/2+210);
	button.mousePressed(newQuestion);

	//Question array
	questionImage=[imga, imgb,];

	//Layout text
	textSize(30);
	text('Choose your preference',windowWidth/2-165,60);

	push();
	textSize(12);
	fill(255,0,0);
	text('Alert!:',windowWidth/2-110, windowHeight/2+201);
	pop();

	push();
	textSize(10);
	text('Your thoughts are being tracked', windowWidth/2-70, windowHeight/2+200);
	pop();

	push();
	textSize(15);
	text('Example of your\nconsiderationspath:',windowWidth/10-50,windowHeight/2-20);
	pop();

	image(imgc,windowWidth/10-50,windowHeight/2, imgc.width/2,imgc.height/2);
}


function draw(){

	//thinkingpath drawing
	if (mouseX>windowWidth/2-145 && mouseX<windowWidth/2+145 &&
		mouseY>windowHeight/2-145 && mouseY<windowHeight/2+145){
			push();
			fill(255,255,255,255);
			noStroke();
			ellipse(mouseX,mouseY,5,5);
			pop();
		}

	//picture chosen visual
	if(mouseIsPressed && mouseX>windowWidth/2-145 && mouseX<windowWidth/2+145 &&
		mouseY>windowHeight/2-145 && mouseY<windowHeight/2+145){
			ellipse(mouseX,mouseY,50,50);
			push();
			textSize(20);
			fill(0,255,0);
			text('x',mouseX,mouseY);
			pop();
		}
}

function newQuestion(){

	var rand= floor(random(questionImage.length));
	imageMode(CENTER);
	image(questionImage[rand],windowWidth/2,windowHeight/2);

	}
