
var url = "https://api.tumblr.com/v2/tagged";
var api_key="fJzhqxmgdh8P7JG7aK4uj8IZYMfD16L61oLgCwiHDTKsMFNG37";
var query;
var request;
var input;
var getPost;

function setup() {
		noCanvas();

		var button= select("#search"); //button which saves user input
		button.mousePressed(fetchData);//when button is pressed fetchdata is executed

		input=select("#tag");

		fetchData();
}

function fetchData() {

	request = url + "?tag=" + input.value() + "&api_key=" + api_key; // the whole API is created by adding the different elements required
	console.log(request);

	try {
		loadJSON(request, gotData);// when the request is made, the function gotData is executed

	}catch(error) {
			console.error(error);
	}

}

function gotData(data) {

	getPost= data.response; // when data is received it is stored in the varibale getPost

}


function draw(){

	if(getPost){ // if getPost is filled, the for loop is executed
		for( var i=0; i<getPost.length; i++){
			if(getPost[i].type == "photo"){ // to make sure we only display photos
				createImg(getPost[i].photos[0].alt_sizes[4].url);//images is created
			}
		}
	}

}
