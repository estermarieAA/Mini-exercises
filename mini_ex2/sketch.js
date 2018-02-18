//Name: "What you really are"
//made by Ester Marie Aagaard
//17/02/2018 mini exercise 2

//Variables
var input;
var p;
var words;
var word;





function setup() {
	createCanvas(windowWidth, windowHeight);
	background(63,127,230,150);

	//Welcome text
	textAlign(CENTER);
	text("Input name - And press Enter",windowWidth/2,70);

	//textbox
	strokeWeight(3);
	rectMode(CENTER);
	rect(windowWidth/2,90,200,20);

	input= createInput(); //creates a space that can contain a input
	input.size(192,11);
	input.position(windowWidth/2-99,82);

	//loadingbar
	rectMode(CENTER);
	rect(windowWidth/2,windowHeight/2,400,10);
	textAlign(CENTER);
	strokeWeight(6);
	text("%",windowWidth/2+210,windowHeight/2+4);
	p = 0;//p is made to ensure that the Enter funtion only execute ones

	//results
	words = ['red', 'blue', 'dangerous', 'expensive',
	 'false', 'true', 'cool', 'lovely', 'wearing your best outfit',
	  'a coding pirate', 'into learning about software',
		 'feminist', 'socialist', 'against waste of plastic',
		  'trying to save the rainforest', 'careless', 'oblivious',
			 'careful', 'happy', 'sad', 'eating a pizza tonight',
			  'using cybermind whenever in doubt'];

}

function draw() {

	EnterPressed();

}


/*Enter function creates a result
when the user enters his/her name*/
function EnterPressed(){

	if(keyCode === ENTER){
			if(p == 0) {
				p = random(0,400);
				rectMode(CORNER);
				noStroke();
				for (var g=0; g<=255; g+=20){
					fill(0,g,0);}
				rect(windowWidth/2-198.5,windowHeight/2-3,p,7);


				var name = input.value();
				strokeWeight(0);
				fill(0);
				p=p/4;
				p=nf(p,2,1);//number of decimals
				word= random(words);
				textSize(30);
				text('Hello ' +name+ ' - you are: '+p+'% '+word,
				windowWidth/2,windowHeight/2+100);
			}
	}

}

function mousePressed(){
	console.log(mouseX,mouseY);
}
