let N=7;
let size=100;
let newGameButton;
let infoTextArea;
let sliderN;

let posCop;
let posRobber;
let lastClick;

let gameState;
let turn;

function setup() {
	createCanvas(1000,500);
	textSize(32);
	
	infoTextArea = createElement('div');
	infoTextArea.position(10,height+50);
	
	sliderN = createSlider(2,10,6);
	sliderN.position(50,height-50);
	
	newGameButton = createButton("Nouvelle partie");
	newGameButton.mousePressed(newGame);
	newGameButton.position(230,height-50);
	
	posCop = createVector(-1,-1);
	posRobber = createVector(-1,-1);
	lastClick = createVector(-1,-1);
	
	gameState = "newGame";
}

function draw() {
	background(150);
	fill(0);
	text("Largeur = "+sliderN.value(), 50, height-70);
	text(turn,width/2,100);
	window[gameState]();
	drawGraph();
	if(gameState == "victory") {
		drawVictory();
	} else {
		drawCop();
		drawRobber();
	}
}

function drawGraph() {
	translate((width-(N-1)*size)/2,200);
	stroke(0);
	strokeWeight(2);
	// Draw edges
	for(let i=0; i<N; i++)
	{
		line(size*i,0,size*i,size);
	}
	line(0,0,(N-1)*size,0);
	line(0,size,(N-1)*size,size);
	
	// Draw loops
	noFill();
	let offset=size/6;
	let diameter=2*offset*sqrt(2);
	ellipse(-offset,-offset,diameter,diameter);
	ellipse((N-1)*size+offset,-offset,diameter,diameter);
	
	// Draw vertices
	fill(255);
	for(let i=0; i<N; i++) {
		ellipse(size*i,0,size/4,size/4);
		ellipse(size*i,size,size/4,size/4);
	}
}

function drawCop() {
	if(posCop.x >= 0) {
		fill(0,0,255);
		ellipse(posCop.x*size, posCop.y*size, size/6, size/6);
	}
}

function drawRobber() {
	if(posRobber.x >= 0) {
		fill(255,0,0);
		ellipse(posRobber.x*size, posRobber.y*size, size/6, size/6);
	}
}

function drawVictory() {
	if(posRobber.x >= 0) {
		fill(255,0,255);
		ellipse(posRobber.x*size, posRobber.y*size, size/3, size/3);
	}
}

function positionFromXY(x,y) {
	i = Math.floor(y/size+0.5);
	j = Math.floor(x/size+0.5);
	if(i>=0 && i<2 && j>=0 && j<N) {
		let dist2 = (x-size*j)**2 + (y-size*i)**2;
		if(dist2 <= (size/8)**2) {
			return [i,j];
		}
	}
	return [];
}

function mousePressed() {
	let x = mouseX - (width-(N-1)*size)/2;
	let y = mouseY - 200;
	pos = positionFromXY(x,y);
	if(pos.length > 0) {
		lastClick.y = pos[0];
		lastClick.x = pos[1];
	}
}

function newGame() {
	N = sliderN.value();
	lastClick.x = -1;
	lastClick.y = -1;
	posCop.x = -1;
	posCop.y = -1;
	posRobber.x = -1;
	posRobber.y = -1;
	turn = 0;
	gameState = "chooseCopPosition";
}

function chooseCopPosition() {
	infoTextArea.elt.innerHTML = "Choisissez votre position";
	if(lastClick.x >= 0) {
		posCop.x = lastClick.x;
		posCop.y = lastClick.y;
		
		gameState = "chooseRobberPosition";
		lastClick.x = -1;
		lastClick.y = -1;
	}
}

function chooseRobberPosition() {
	infoTextArea.elt.innerHTML = "Choisissez la position du voleur";
	if(lastClick.x >= 0) {
		posRobber.x = lastClick.x;
		posRobber.y = lastClick.y;
		
		gameState = "copMove";
		lastClick.x = -1;
		lastClick.y = -1;
	}
}

function possibleMove(x1,y1,x2,y2) {
	if( (x1-x2)**2 + (y1-y2)**2 == 1) {
		return true;
	}
	if(x1 == 0 && y1 == 0 && x2 == 0 && y2 == 0) {
		return true;
	}
	if(x1 == N-1 && y1 == 0 && x2 == N-1 && y2 == 0) {
		return true;
	}
	return false;
}

function copMove() {
	infoTextArea.elt.innerHTML = "À <strong>vous</strong> de jouer. Cliquez sur la case où vous souhaitez vous déplacer.";
	if(lastClick.x >= 0) {
		if(possibleMove(posCop.x,posCop.y,lastClick.x,lastClick.y)) {
			posCop.x = lastClick.x;
			posCop.y = lastClick.y;
			turn++;
			
			if(posCop.x == posRobber.x && posCop.y == posRobber.y) {
				gameState = "victory";
				return;
			}
			
			gameState = "robberMove";
		}
		lastClick.x = -1;
		lastClick.y = -1;
	}
}

function robberMove() {
	infoTextArea.elt.innerHTML = "Au tour du <strong>voleur</strong>...";
	
	if((posCop.x+posCop.y+posRobber.x+posRobber.y)%2==0) {
		if(posRobber.y == 0 && (posRobber.x == 0 || posRobber.x == N-1)) {
			// Prendre la boucle
		} else {
			if(posRobber.x < posCop.x) {
				if(posRobber.x > 0) {
					posRobber.x--;
				} else {
					posRobber.y = 1-posRobber.y;
				}
			} else {
				if(posRobber.x < N-1) {
					posRobber.x++;
				} else {
					posRobber.y = 1-posRobber.y;
				}
			}
		}
	} else {
		if(posCop.y == 1 && posRobber.y == 1)
		{
			posRobber.y = 0;
		} else if(posCop.y==0 && posRobber.y==0 && (posCop.x == posRobber.x+1 || posCop.x == posRobber.x-1)) {
			posRobber.y = 1;
		} else {
			if(posRobber.x > N-1-posCop.x) {
				if(posRobber.x == 0) {
					posRobber.y = 1-posRobber.y;
				} else {
					posRobber.x--;
				}
			} else {
				if(posRobber.x == N-1) {
					posRobber.y = 1-posRobber.y;
				} else {
					posRobber.x++;
				}
			}
		}
	}
	
	if(posCop.x == posRobber.x && posCop.y == posRobber.y) {
		gameState = "victory";
	} else {
		gameState = "copMove";
	}
}

function victory() {
	let plural = "";
	if(turn > 1) {
		plural += "s";
	}
	infoTextArea.elt.innerHTML = "<h2>Bravo, vous avez attrapé le voleur en <strong>"+turn+"</strong> tour"+plural+" !</h2>";
}