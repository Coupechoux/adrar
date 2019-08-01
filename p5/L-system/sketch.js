var l;
var s;
var n = 0;
var step_size = 10;
let offsetX=0;
let offsetY=0;

function setup(){
	createCanvas(600,600);
	background(0);
	l = fougere();
	s = l["axiom"];

	button = createButton('fougere');
	button.position(650, 0);
	button.mousePressed(setFougere);
	button = createButton('Hilbert');
	button.position(650, 20);
	button.mousePressed(setHilbert);
	button = createButton('Croix');
	button.position(650, 40);
	button.mousePressed(setCroix);
	button = createButton('peano');
	button.position(650, 60);
	button.mousePressed(setPeano);
	button = createButton('Minkowski');
	button.position(650, 80);
	button.mousePressed(setMinkowski);
	button = createButton('Arbre1');
	button.position(650, 100);
	button.mousePressed(setArbre1);
	button = createButton('Arbre2');
	button.position(650, 120);
	button.mousePressed(setArbre2);
	button = createButton('Koch');
	button.position(650, 140);
	button.mousePressed(setKoch);
	button = createButton('Flocon');
	button.position(650, 160);
	button.mousePressed(setFlocon);
	button = createButton('Dragon');
	button.position(650, 180);
	button.mousePressed(setDragon);
}

function setFougere() {
	l = fougere();
	s = l["axiom"];
	n=0;
}
function setHilbert() {
	l = hilbert();
	s = l["axiom"];
	n=0;
}
function setCroix() {
	l = croix();
	s = l["axiom"];
	n=0;
}
function setPeano() {
	l = peano();
	s = l["axiom"];
	n=0;
}
function setMinkowski() {
	l = minkowski();
	s = l["axiom"];
	n=0;
}
function setArbre1() {
	l = arbre();
	s = l["axiom"];
	n=0;
}
function setArbre2() {
	l = arbre2();
	s = l["axiom"];
	n=0;
}
function setKoch() {
	l = koch();
	s = l["axiom"];
	n=0;
}
function setFlocon() {
	l = flocon();
	s = l["axiom"];
	n=0;
}
function setDragon() {
	l = dragon();
	s = l["axiom"];
	n=0;
}

function draw(){
	translate(offsetX,offsetY);
	var x = width/2;
	var nx = x;
	var y = height/2;
	var ny = y;
	var dir = 0;
	var mem = [];
	background(0);
	stroke(255);
	s = iter_n(l,n);
	console.log(s);
	for(var i =0; i<s.length; i++) {
		switch(s[i]) {
			case "F":
				nx = x + step_size*cos(dir);
				ny = y + step_size*sin(dir);
				line(x,y,nx,ny);
				x = nx;
				y = ny;
				break;
			case "+":
				dir += l["angle"];
				break;
			case "-":
				dir -= l["angle"];
				break;
			case "[":
				mem.push([x,y,dir]);
				step_size /= 1.5;
				break;
			case "]":
				var load = mem.pop();
				step_size *= 1.5;
				x = load[0];
				y = load[1];
				dir = load[2];
				break;
			default:
				break;
		}
	}
}

function keyPressed() {
	console.log(keyCode);
	if(keyCode == 107) { // "+"
		step_size *=2;
	}
	if(keyCode == 109) { // "-"
		step_size /=2;
	}
	if(keyCode == 37) { // "<-"
		l["angle"] -= 0.01;
	}
	if(keyCode == 39) { // "->"
		l["angle"] += 0.01;
	}
	if(keyCode == 40) { // "v"
		n--;
	}
	if(keyCode == 38) { // "^"
		n++;
	}
	if(keyCode == 104) { // "8"
		offsetY += 5;
	}
	if(keyCode == 98) {	// "2"
		offsetY -= 5;
	}
	if(keyCode == 100) { // "4"
		offsetX += 5;
	}
	if(keyCode == 102) { // "6"
		offsetX -= 5;
	}
	if(keyCode == 101) { // "5"
		offsetX=0;
		offsetY=0;
	}
}

function peano() {
	var l = {"axiom":"F", "angle":PI/2, "rules":new Object()};
	l["rules"]["F"] = "F-F+F+F+F-F-F-F+F";

	return l;
}

function minkowski() {
	var l = {"axiom":"F", "angle":PI/2, "rules":new Object()};
	l["rules"]["F"] = "F-F+F+FF-F-F+F";

	return l;
}


function hilbert() {
	var l = {"axiom":"X", "angle":PI/2, "rules":new Object()};
	l["rules"]["X"] = "-YF+XFX+FY-";
	l["rules"]["Y"] = "+XF-YFY-FX+";

	return l;
}

function fougere() {
	var l = {"axiom":"X", "angle":PI/4, "rules":new Object()};
	l["rules"]["X"] = "F[-X]F[+X]F";

	return l;
}

function croix() {
	var l = {"axiom":"F", "angle":PI/2, "rules":new Object()};
	l["rules"]["F"] = "F[F][+F]-F";

	return l;
}
	
function arbre2() {
	var l = {"axiom":"FAB", "angle":PI/8, "rules":new Object()};
	l["rules"]["A"] = "[+FAB]";
	l["rules"]["B"] = "[-FAB]";

	return l;
}
	
function arbre() {
	var l = {"axiom":"FAB", "angle":PI/8, "rules":new Object()};
	l["rules"]["A"] = "+FAB++++++++F+++++++";
	l["rules"]["B"] = "-FAB++++++++F-------";

	return l;
}

function koch() {
	var l = {"axiom":"F", "angle":PI/3, "rules":new Object()};
	l["rules"]["F"] = "F+F--F+F";

	return l;
}

function dragon() {
	var l = {"axiom":"FX", "angle":PI/2, "rules":new Object()};
	l["rules"]["X"] = "X+YF+";
	l["rules"]["Y"] = "-FX-Y";

	return l;
}

function flocon() {
	var l = {"axiom":"F--F--F--", "angle":PI/3, "rules":new Object()};
	l["rules"]["F"] = "F+F--F+F";

	return l;
}

function iter_n(l,n) {
	var s = l["axiom"];
	for(var i=0; i<n; i++) {
		s = iter(s,l);
	}
	
	return s;
}

function iter(s,l) {
	var s2 = "";
	for(i=0; i<s.length; i++) {
		var c = s[i];
		if(c in l["rules"]) {
			s2 += l["rules"][c];
		} else {
			s2 += c;
		}
	}
	return s2;
}