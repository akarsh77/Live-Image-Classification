// Declaring the variables
var mobilenet;
var video;
var label=' ';

// Will inform if Model is ready to make predictions
function modelReady()
{
	console.log("Model is ready");
	mobilenet.predict(gotResults);
}

// For getting the Results
function gotResults(error, results){
	if(error){
		console.error(error);
	}
	else{
		label=results[0].className;
		
		// Loop the interface by calling itself
		mobilenet.predict(gotResults);
	}
}

// Setup function
function setup(){

	// Set Window Size
	createCanvas(600,550);
	
	//ml5 to create Video Capture
	video=createCapture(VIDEO);
	video.hide();
	background(0);

	// Load the MobileNet and apply it on video feed
	mobilenet=ml5.imageClassifier("MobileNet",video,modelReady);
}

function draw(){
	background(0);
	
	// Show Video
	image(video,0,0);
	fill(255);
	textSize(32);

	//Show prediction label
	text(label,10,height - 20);
}