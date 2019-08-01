let txt;	// Déclaration de variable

function preload() {
	txt = loadStrings("points.txt");	// Lit le contenu du fichier
}

function setup() {   // Initialisation de p5
	createCanvas(800,600);	// Zone de dessin
	background(0);			// Arrière plan noir
	stroke(255);			// Couleur du crayon (blanc)
	strokeWeight(1);
	for(let i=0; i<txt.length; i++) {	// Boucle
		t = txt[i].split(',');		// Coupe la ligne par rapport à ','
		x = parseFloat(t[0]);	// Transformer en float ce qui est avant la premiere virgule
		y = parseFloat(t[1]);	// Transformer en float ce qui est apres la premiere virgule
		point(x,y);			// Dessine le point (x,y)
	}
}