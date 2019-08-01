let blanc;
let t = 0;
let sens = 1;
let x;
let y;

function setup() {
	createCanvas(800,600);
	x = width/2;
	y = height/2;
	noFill();
	//frameRate(1);
	background(0);
	blanc = color(255);
}

function draw() {
	// Crayon blanc
	stroke(blanc);
	// Couleur intérieure
	t = t+ sens;
	if(t > 255) {
		sens = -1;
	}
	if(t == 0) {
		sens = 1;
	}
	if(t < 128){
		ma_couleur = color(255-2*t,2*t,0);
	} else {
		ma_couleur = color(0,255-2*(t-128),2*(t-128));
	}
	stroke(ma_couleur);
	strokeWeight(2);
	fill(ma_couleur);
	x += random(-10,10);
	y += random(-10,10);
	if(x < 0) {
		x += width;
	}
	if(x > width) {
		x -= width;
	}
	if(y<0) {
		y += height;
	}
	if(y>height) {
		y -= height;
	}
	point(x,y);
	
	// ellipse(mouseX,mouseY,100,100);
}
