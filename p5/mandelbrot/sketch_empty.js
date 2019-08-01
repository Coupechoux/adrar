let xmin=-2;
let xmax=1;
let ymin=-1.5;
let ymax=1.5;
let maxIter = 50;

function setup(){
	createCanvas(600,400);
	strokeWeight(1);
}

function draw()
{
	background(0);
	stroke(255);
	for(let x=0;x<width;x++) {
		for(let y=0; y<height; y++) {
			xR = map(x,0,width,xmin,xmax);
			yR = map(y,0,height,ymin,ymax);
			
			c = createVector(xR,yR);
			z = createVector(0,0);
			
			let i=0;
			while(z.mag() < 3 && i < maxIter) {
					z = iter(z,c);
					i++;
			}
			let col = map(i,0,maxIter,0,255);
			stroke(255-col,0,col);
			if(z.mag() < 3) {
				stroke(0);
			}
			point(x,y);
		}
	}	
}

// Retourne z*z+c
function iter(z,c) {
	let z2 = createVector(z.x*z.x-z.y*z.y + c.x, 2*z.x*z.y + c.y);
	return z2;
}

function mouseClicked() {
	xR = map(mouseX,0,width,xmin,xmax);
	yR = map(mouseY,0,height,ymin,ymax);
	
	let W = xmax-xmin;
	let H = ymax-ymin;
	
	xmin = xR - W/4;
	xmax = xR + W/4;
	ymin = yR - H/4;
	ymax = yR + H/4;
}

function keyPressed() {
	console.log(keyCode);
	if(keyCode == 107) { // +
		maxIter *= 2;
	}
	if(keyCode == 109) { // -
		maxIter /= 2;
	}
}





