let ball;
let vBall;
let cpt = 0;

function setup2(){
	createCanvas(800,600);
	background(0);
	stroke(255);
	strokeWeight(10);
	ball = createVector(width/2,height/2);
	vBall = p5.Vector.random2D().mult(3);
}

function draw2(){
	background(0);
	stroke(255);
	point(ball.x,ball.y);
	ball.add(vBall);
	if(ball.x > width) {
		vBall.x = -vBall.x;
	} else if(ball.x < 0) {
		vBall.x = -vBall.x;
	}
	
	if(ball.y > height) {
		vBall.y = -vBall.y;
	} else if(ball.y < 0) {
		vBall.y = -vBall.y;
	}
	vBall.mult(1.001);
}

function setup() {
	createCanvas(800,600);
	background(0);
	stroke(255);
	strokeWeight(10);
	ball = createVector(width/2,height/2);
	vBall = createVector(0,0);
}

function mouseClicked() {
	vBall = createVector(0,-5);
}

function draw() {
	background(0);
	stroke(255);
	point(ball.x,ball.y);
	ball.add(vBall);
	vBall.sub(createVector(0,-0.1));
}
