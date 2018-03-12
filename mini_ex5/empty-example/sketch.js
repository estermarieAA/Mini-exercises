//variables
let af;
let abc;
let apps=[];
let appsf=[];
var c=0;
var c2=0;
var c3=0;
let iphone;
let facebook;
let mail;
let phone1;
let message;
let gif;
let wave;
/*let r=random(0,255);
let g=random(0,255);
let b=random(0,255);
*/



function preload(){

		//app symboler
		facebook = loadImage('data/facebook.jpg');
		mail= loadImage('data/mail.jpg');
		phone1= loadImage('data/phone1.jpg');
		message=loadImage('data/message.jpg');

		//gif
		gif=createImg('data/ani.gif');

		//wave
		wave= loadImage('data/wave.jpg');
}


function setup() {
	noCursor();
	createCanvas(windowWidth, windowHeight);
	background(130,211,243);


	textSize(50);
	text('collect apps',20,40);
	// image(bbackground,0,0);


	// //array af app symboler
	af=[facebook, mail, phone1, message];

	//array af farver til apps, som passer med længden af symbolarrayen
	abc=['#3b5998','#4ec932','#4ec932','#2a91d6'];



	//new app
	for( let i=0; i<100; i=i+2){
		push();
		let rand = floor(random(abc.length));
		apps[i]= new appb(random(windowWidth/2-50,windowWidth/2+50),windowHeight/2-50,abc[rand],
	0.9,random(1,1.5));
	pop();
	}

	//new app symbol
	for (let i=0; i<100; i=i+2){
		let rand = floor(random(af.length));
			appsf[i]= new appf(random(windowWidth/2-50,windowWidth/2+70),windowHeight/2-50,af[rand],
		random(0.9,1),random(1,1.5), 25,25);

	}



}

function draw() {

//drawing of iphone
push();

translate(windowWidth/2-400,windowHeight/2-250);
fill(53,51,49);

beginShape();
vertex(359,438);
vertex(341,470);
vertex(95,465);
vertex(116,431);
vertex(359,438);
endShape();

beginShape();
vertex(341,472);
vertex(342,485);
vertex(505,209);
vertex(505,193);
vertex(341,472);
endShape();

beginShape();
vertex(507,210);
vertex(505,189);
vertex(312,194);
vertex(312,186);
vertex(321,178);
vertex(331,174);
vertex(346,170);
vertex(483,170);
vertex(504,175);
vertex(511,182);
vertex(513,187);
vertex(513,192);
vertex(513,196);
vertex(507,210);
endShape();

beginShape();
vertex(312,193);
vertex(307,193);
vertex(88,466);
vertex(94,464);
vertex(312,193);
endShape();

beginShape();
vertex(341,471);
vertex(343,487);
vertex(97,483);
vertex(89,466);
vertex(94,466);
vertex(341,471);
endShape();

pop();


//screen that draws continually so the objects doesnt drag a path after them
push();
translate(windowWidth/2-400,windowHeight/2-250);
// noStroke();
fill(130,211,243);
beginShape();
vertex(117,431);
vertex(359,437);
vertex(504,190);
vertex(311,192);
vertex(117,431);

endShape();
pop();


//Counter - needs to be used to control when app background appear
if(frameCount%60 ==0){
	c=c+1;
	if(c==100){
		c=0;
	}
}

//show app background
for( let i=0; i<c; i=i+2){
	apps[i].move();
	apps[i].show();
}

//Counter - needs to be used to control when app symbol appear
if(frameCount%60 ==0){
	c2=c+1;
	if(c2==100){
		c2=0;
	}
}

//show app symbol
for( let i=0; i<c2; i=i+2){
	appsf[i].move();
	appsf[i].show();
}

// makes swimmer gif
gif.size(50,30);
gif.position(mouseX,mouseY);


}



//backgrounds of apps
class appb{
	constructor(tempX,tempY, tempF,tempXS,tempYS){
		this.x=tempX
		this.y=tempY
		this.fill=tempF
		this.xs=tempXS
		this.ys=tempYS
	}

	move(){
		this.x= this.x-this.xs;
		this.y=this.y+this.ys;
		if(this.y>windowHeight/2+150){
			this.y=1000;
		}
	}

	show(){
		// noStroke();
		fill(this.fill);
		rect(this.x,this.y,40,40,7);

	}
}

//front images of apps
class appf{
	constructor(tempX,tempY, tempF,tempXS,tempYS,tempW,tempH){
		this.x=tempX
		this.y=tempY
		this.img=tempF
		this.xs=tempXS
		this.ys=tempYS
		this.imgw=tempW
		this.imgh=tempH
	}

	move(){
		this.x= this.x-this.xs;
		this.y=this.y+this.ys;
		if(this.y>windowHeight/2+150){
			this.y=1000;
		}
	}

	show(){
		image(this.img,this.x,this.y, this.imgw,this.imgh);
	}
}

function mousePressed(){
	console.log(mouseX,mouseY);
}
