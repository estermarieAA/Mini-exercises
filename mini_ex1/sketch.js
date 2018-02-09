function setup() {

	//baggrund
	createCanvas(500, 300);
		background('#fae');

		rect(10,10,480,200);
		fill(255,255,255);
}



function draw() {



//desk
{fill(255,255,255)
quad(300,300,300,195,350,215,350,300);
quad(170,195,300,195,350,215,220,215);
quad(170,195,220,215,220,300,170,300);
}

//chair
{fill(0,0,0);
rect(250, 260, 55, 5, 30);
rect(275, 260, 5, 55, 30);
rect(275, 230, 5, 30, 30);
rect(250, 230, 55, 15, 30)
}

	//computerbillede
	{fill(255,204,0);
	rect(200, 150, 100, 50);
	fill(0, 0, 255);
	rect(210, 155, 80, 40);
	fill(255,204,0)
	quad(200,200,300,200,330,210,230,210);
	quad(230,214,330,214,330,210,230,210);
	quad(200,200,200,204,230,214,230,210);

	//Button
	fill(255,0,0)
	ellipse(260,205,5,5);}

	//plant
	{
		fill(0,255,0);
			triangle(130, 300, 137, 250, 139, 300);
			triangle(130, 300, 130, 240, 139, 300);
			triangle(125, 300, 127, 230, 130, 300);
		fill(255,255,255);
	quad(120,270,150,270,145,300,125,300);


	}







//random words
if (mouseIsPressed) {

	//color setup values for red blue and green
	var r, g, b;
	r=random(255)
	g=random(0)
	b=random(255)
	fill(r,g,b);

	//word setup
	var words=["Wow! -Senator Mark Warner got caught having extensive contact with a lobbyist for a Russian oligarch. Warner did not want a “paper trail” on a “private” meeting (in London) he requested with Steele of fraudulent Dossier fame. All tied into Crooked Hillary.","Time to end the visa lottery. Congress must secure the immigration system and protect Americans.", "I will be meeting with Henry Kissinger at 1:45pm. Will be discussing North Korea, China and the Middle East.","Our founders invoked our Creator four times in the Declaration of Independence. Our currency declares “IN GOD WE TRUST.” And we place our hands on our hearts as we recite the Pledge of Allegiance and proclaim that we are “One Nation Under God.” #NationalPrayerBreakfast"];
	var word= random(words);


text(word,random(mouseX),random(mouseY));


//possible text setup

	// {
	// 	var p = {
	// 	x:100,
	// 	y:100
	// }
  //
  //
	// 	p.x=random(0,width);
	// 	p.y=random(0,height);
  //
	// 	text(word,p.x,p.y);
	// }
}

{
//possible text on computer
//text på computer
// {
// var s="Please let me learn code please let me understand you";
// textSize(20);
// if (mouseIsPressed) {
// 	fill(255);
// } else {
// 	fill('#fae');
// }
// text(s,10,10,100,100);}

//Text on computer

	if (mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}
textSize(10);
text("Dare to press me",213,175);
}

}
