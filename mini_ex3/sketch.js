//variables
var currentSecs;
var secStart= 0;
var s;
var n;
var number;
var words;


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255,200,0);
	frameRate(10);

//Static texts
	text('While you have been waiting',windowWidth/2-200,windowHeight/2-3);
	push();
	textSize(10);
	fill(0,0,0,51);
	text('Try clicking the mouse', 10,10);
	pop();

//Random statements arrays
	number=[10.056,375,2090,2750,2,35000,205.000,23.000, 1.860,
	8.666,17,47,300,21,10,9,15.800];
	words=['pounds of edible food is thrown away in the United States',
	'McDonalds burgers are sold.','KitKat fingers are consumed worldwide.',
	'hot dogs are eaten in America.','jars of Nutella are sold.',
	'Coca-Cola products are consumed.','Facebook posts are posted.',
'tweets are posted.','people search for porn on Google.',
'Snapchats are sent.','million emails are sent.','new websites are created.',
'new Instagram pictures are uploaded.','babies are born in the world',
'babies are born into poverty.','people die in the world.',
'tons of water flows over Niagara Falls.'];
}

function draw() {

	//time counters
		s=second();
		n=currentSecs/5;
		secStart = 0;
		currentSecs = floor(second() - secStart);

	//rectangle drawn upon the trobber, to make a dissapearing effect
		push();
		fill(255,200,0, 40);
		rectMode(CENTER);
		noStroke();
		rect(windowWidth/2,windowHeight/2,70,70);
		pop();

	//moving throbber
		throbber(26,20,1);

	//counting static throbber
		throbber(10,20,2);

}

function mousePressed(){
	push();//rectangle drawn upon the previous text
	noStroke();
	fill(255,200,0);
	rect(windowWidth/2+50,windowHeight/2-15,1000,20);
	pop();

	translate(windowWidth/2+50,windowHeight/2-3);
	var rand = floor(random(words.length));//random number/word
	text(number[rand]*n + " " + words[rand],0,0);//statements
}

function throbber(num,ts,x){

		push();
		translate(width/2, height/2);
		var r=360/num*(frameCount*10%num);
		rotate(radians(r*5));
		noStroke();
		textSize(ts);
		strokeWeight(x);
		stroke(1);
		fill(255,255,255);
		text(nf(currentSecs, 3), 0, 0);
		pop();

}
