var nodes = [];
var N = 15;
var pix_size = 600;
var button_validate;
var availableFirefightersTextArea;
var scoreTextArea;
var availableFirefighters;

function setup() {
	createCanvas(pix_size,pix_size);
	var pas = pix_size/(N+1);
	for(var i=1; i<=N; i++) {
		var x = i*pas;
		for(var j=1; j<=N; j++) {
			var y = j*pas;
			var index = (i-1)*N+j-1;
			append(nodes, new Noeud(x,y,pas,pas));
			if(i>1) {
				var index2 = (i-2)*N+j-1;
				nodes[index2].add_neighbor(nodes[index]);
				nodes[index].add_neighbor(nodes[index2]);
			}
			if(j>1) {
				var index2 = (i-1)*N+j-2;
				nodes[index2].add_neighbor(nodes[index]);
				nodes[index].add_neighbor(nodes[index2]);
			}
		}
	}
	availableFirefighters = 2;
	button_validate = createButton("Valider");
	button_validate.mousePressed(newTurn);
	button_validate.position(pix_size/2,pix_size+20);
	availableFirefightersTextArea=createElement('h3',"");
	scoreTextArea=createElement('h3',"");
	setAvailableFirefightersText();
	nodes[int(nodes.length/2)].burn();
}

function draw() {
	background(255);
	for(var i=0; i<nodes.length; i++) {
		nodes[i].draw();
	}
}

function mousePressed() {
	var pas = pix_size/(N+1);
	var i = Math.floor(mouseX/pas-0.5);
	var j = Math.floor(mouseY/pas-0.5);
	var index = i*N+j;
	
	if(i>=0 && i<N && j>=0 && j<N) {
		state = nodes[index].state;
		if(state == "empty" && availableFirefighters > 0) {
			nodes[index].state = "deploying";
			availableFirefighters--;
		}
		if(state == "deploying") {
			nodes[index].state = "empty";
			availableFirefighters ++;
		}
		setAvailableFirefightersText();
	}
}

function setAvailableFirefightersText()
{
	var plural = "";
	if(availableFirefighters >1) {
		plural = "s";
	}
	var s=availableFirefighters+" pompier"+plural;
	s += " disponible"+plural;
	availableFirefightersTextArea.elt.innerHTML = s;
}

function setScoreText(n)
{
	var plural = "";
	if(n >1) {
		plural = "s";
	}
	var s="Score : "+n+" case"+plural;
	s += " brûlée"+plural;
	scoreTextArea.elt.innerHTML = s;
}

function newTurn()
{
	var newBurned = propagate();
	if(newBurned == 0) {
		var totalBurned=0;
		for(var i=0; i<nodes.length; i++) {
			if(nodes[i].state == "burned") {
				totalBurned++;
			}
		}
		setScoreText(totalBurned)
	}
}

function propagate() {
	var newBurned = [];
	for(var i=0; i<nodes.length; i++) {
		if(nodes[i].state == "recently burned") {
			for(var j=0; j<nodes[i].neighbors.length; j++) {
				append(newBurned,nodes[i].neighbors[j]);
			}
			nodes[i].state = "burned";
		}
		if(nodes[i].state == "deploying") {
			nodes[i].state = "protected";
			availableFirefighters++;
		}
	}
	for(var i=0; i<newBurned.length;i++) {
		newBurned[i].burn();
	}
	
	setAvailableFirefightersText();
	return newBurned.length;
}
