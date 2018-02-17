//program navn
//mb
//date

//Variables
var input;
var p;
var words;
var word;



function setup() {
	createCanvas(windowWidth, windowHeight);
	background(193,66,66,100);
	textAlign(CENTER);
	text("Input name - And press Enter",windowWidth/2,70);

	//textbox
	strokeWeight(3);
	rectMode(CENTER);
	rect(windowWidth/2,90,200,20);

	input= createInput(); //
	input.size(192,11);
	input.position(286,82);

	//loadingbar
	rectMode(CENTER);
	rect(windowWidth/2,windowHeight/2,400,10);
	textAlign(CENTER);
	strokeWeight(6);
	text("%",windowWidth/2+210,windowHeight/2+4);
	p = 0;

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



/*Enter function to create a result
when the user enters his/her name*/
function EnterPressed(){

	if(keyCode === ENTER){
			if(p == 0) {
				p = random(0,400);
				rectMode(CORNER);
				noStroke();
				fill(0,255,0);
				rect(186,269.5,p,7);

				var name = input.value();
				strokeWeight(0);
				fill(0);
				p=p/4;
				p=nf(p,2,1);
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