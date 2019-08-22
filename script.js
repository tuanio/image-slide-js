// first declare
var back = document.getElementById("back");
var next = document.getElementById("next");
var mainPic = document.getElementById("main-pic");

// image
var image = [];

// index of image
var i = 0;

// declare radio choises
var rad = [];
// rad[0] = document.getElementById("rad-zero");
// rad[1] = document.getElementById("rad-one");
// rad[2] = document.getElementById("rad-two");
// rad[3] = document.getElementById("rad-three");
// rad[4] = document.getElementById("rad-four");

for (j = 0; j <= 4; j++) {
	rad[j] = document.getElementById("rad" + j);
}



// declare what number index of image present for what image
// image[0] = "images/image1.jpg";
// image[1] = "images/image2.jpg";
// image[2] = "images/image3.jpg";
// image[3] = "images/image4.jpg";
// image[4] = "images/image5.jpg";

for (var j = 0; j <= 4; j++) {
	image[j] = "images/image" + (j + 1) + ".jpg";
}

mainPic.src = image[0];

// declare first picture is image1.jpg
// mainPic.src = image[0];

// click to right and left button to change picture

back.addEventListener("click", function() {
	i = (i+4) %5;
	console.log(i);
	
	rad[i].checked = true;

	mainPic.src = image[i];
});
next.addEventListener("click", function() {
	i = (i+1)%5;

	console.log(i);
	
	rad[i].checked = true;

	mainPic.src = image[i];
});

// // click to radio to change picture

for (var j = 0; j <= 4; j++) {
	rad[j].addEventListener("click", function() {
		this.checked = true;
		mainPic.src = image[this.id.substring(3,4)];
	});
}



// // catch left arrow and right arrow 
document.addEventListener("keyup", function(e) {
	if (e.keyCode === 37) {
		i = (i+4) %5;
		console.log(i);
		
		rad[i].checked = true;

		mainPic.src = image[i];

	}
});

document.addEventListener("keyup", function(e) {
	if (e.keyCode === 39) {
		i = (i+1) % 5;

		rad[i].checked = true;

		mainPic.src = image[i];
	}
});
