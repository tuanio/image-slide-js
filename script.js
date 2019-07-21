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
rad[0] = document.getElementById("rad-zero");
rad[1] = document.getElementById("rad-one");
rad[2] = document.getElementById("rad-two");
rad[3] = document.getElementById("rad-three");
rad[4] = document.getElementById("rad-four");


// declare what number index of image present for what image
image[0] = "images/image1.jpg";
image[1] = "images/image2.jpg";
image[2] = "images/image3.jpg";
image[3] = "images/image4.jpg";
image[4] = "images/image5.jpg";

// declare first picture is image1.jpg
mainPic.src = image[0];

// click to right and left button to change picture
back.addEventListener("click", function() {
	
	switch (i) {
		case 0:
			i = 4;
			rad[0],[1],[2],[3].checked = false;
			rad[4].checked = true;
			break;
		case 1:
			i = 0;
			rad[1],[4],[2],[3].checked = false;
			rad[0].checked = true;
			break;
		case 2:
			i = 1;
			rad[0],[4],[2],[3].checked = false;
			rad[1].checked = true;
			break;
		case 3:
			i = 2;
			rad[0],[1],[4],[3].checked = false;
			rad[2].checked = true;
			break;
		case 4:
			i = 3;
			rad[0],[1],[2],[4].checked = false;
			rad[3].checked = true;
			break;
	}
	mainPic.src = image[i];
});
next.addEventListener("click", function() {

	switch (i) {
		case 0:
			i = 1;
			rad[0],[3],[2],[4].checked = false;
			rad[1].checked = true;
			break;
		case 1:
			i = 2;
			rad[0],[1],[3],[4].checked = false;
			rad[2].checked = true;
			break;
		case 2:
			i = 3;
			rad[0],[1],[2],[4].checked = false;
			rad[3].checked = true;
			break;
		case 3:
			i = 4;
			rad[0],[1],[2],[3].checked = false;
			rad[4].checked = true;
			break;
		case 4:
			i = 0;
			rad[3],[1],[2],[4].checked = false;
			rad[0].checked = true;
			break;
	}

	mainPic.src = image[i];
});

// click to radio to change picture

rad[0].addEventListener("click", function () {
	rad[3],[1],[2],[4].checked = false;
	rad[0].checked = true;
	mainPic.src = image[0];
});

rad[1].addEventListener("click", function () {
	rad[3],[0],[2],[4].checked = false;
	rad[1].checked = true;
	mainPic.src = image[1];
});

rad[2].addEventListener("click", function () {
	rad[3],[1],[0],[4].checked = false;
	rad[2].checked = true;
	mainPic.src = image[2];
});

rad[3].addEventListener("click", function () {
	rad[0],[1],[2],[4].checked = false;
	rad[3].checked = true;
	mainPic.src = image[3];
});

rad[4].addEventListener("click", function () {
	rad[3],[1],[2],[0].checked = false;
	rad[4].checked = true;
	mainPic.src = image[4];
});

// catch left arrow and right arrow 
document.addEventListener("keyup", function(e) {
	if (e.keyCode === 37) {
		switch (i) {
			case 0:
				i = 4;
				rad[0],[1],[2],[3].checked = false;
				rad[4].checked = true;
				break;
			case 1:
				i = 0;
				rad[1],[4],[2],[3].checked = false;
				rad[0].checked = true;
				break;
			case 2:
				i = 1;
				rad[0],[4],[2],[3].checked = false;
				rad[1].checked = true;
				break;
			case 3:
				i = 2;
				rad[0],[1],[4],[3].checked = false;
				rad[2].checked = true;
				break;
			case 4:
				i = 3;
				rad[0],[1],[2],[4].checked = false;
				rad[3].checked = true;
				break;
		}
		mainPic.src = image[i];
	}
});

document.addEventListener("keyup", function(e) {
	if (e.keyCode === 39) {
		switch (i) {
			case 0:
				i = 1;
				rad[0],[3],[2],[4].checked = false;
				rad[1].checked = true;
				break;
			case 1:
				i = 2;
				rad[0],[1],[3],[4].checked = false;
				rad[2].checked = true;
				break;
			case 2:
				i = 3;
				rad[0],[1],[2],[4].checked = false;
				rad[3].checked = true;
				break;
			case 3:
				i = 4;
				rad[0],[1],[2],[3].checked = false;
				rad[4].checked = true;
				break;
			case 4:
				i = 0;
				rad[3],[1],[2],[4].checked = false;
				rad[0].checked = true;
				break;
		}

		mainPic.src = image[i];
	}
});
