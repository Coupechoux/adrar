let sommets = [];
let x_courant = 0;
let y_courant = 0;

function setup() {
	createCanvas(1200,500);
	background(0);
	
	for(let i = 0; i<3;i++) {
		let x = height/2*cos(i*2*PI/3);
		let y = height/2*sin(i*2*PI/3);
		let vect = createVector(x,y);
		sommets.push(vect);
	}
}


function draw() {
	translate(width/2,height/2);
	stroke(255);
	strokeWeight(1);
	
	for(let i = 0; i<sommets.length; i++)
	{
		point(sommets[i].x, sommets[i].y);
	}
	stroke(255);
	for(let i=0;i<100;i++) {
		// Faire bouger le point
		movePoint();
		// Dessiner le point courant
		point(x_courant,y_courant);
	}
}

function movePoint() {
	let r = int(sommets.length * Math.random());
	if(r == 0) {
		stroke(255,0,0);
	} else if(r==1) {
		stroke(0,255,0);
	} else {
		stroke(0,0,255);
	}
	x_courant = (sommets[r].x+x_courant)/2;
	y_courant = (sommets[r].y+y_courant)/2;
}