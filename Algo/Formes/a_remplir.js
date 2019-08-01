// Retourne une ligne de taille w, avec le caractère c
// Avec un <br/> à la fin
// Exemple : "*******<br/>"

function fullLine(w,c)
{
	let s = "";
	
	for(let i = 0 ; i<w ; i++) {
		s += c;
	}
	
	s += "<br/>";
	
	return s;
}

// Retourne un rectangle avec le caractère c, de w colonnes et h lignes
// Exemple : "*****<br/>
//			  *****<br/>
//			  *****<br/>"
function fullRectangle(w,h,c)
{
	let s="";
	s += fullLine(w,c);
	s += fullLine(w,c);
	return s;
}

// Retourne une ligne de taille w avec c1 au bord, c2 au milieu
// Exemple : "*-----*<br/>"
function emptyLine(w,c1,c2)
{
	let s = "";
	s += c1;	// Bord gauche
	for(let i = 0 ; i< w-2 ; i++) {		// Répéter w-2 fois
		s += c2;	// Caractère du milieu
	}
	if(w>1) {	// Si la taille est plus grande que 1
		s += c1;	// Bord droit
	}
	s += "<br/>";
	return s;
}

// Retourne un rectangle avec c1 aux bords et c2 au milieu, de w colonnes et h lignes
// Exemple : "*****<br/>
//			  *---*<br/>
//			  *****<br/>"
function emptyRectangle(w,h,c1,c2)
{
	let s = "";
	s += fullLine(w,c1);	// Ligne d'en haut
	
	for(let i = 0 ; i < h-2 ; i++) {	// Répéter h-2 fois
		s += emptyLine(w,c1,c2);	// Ajouter une ligne au milieu
	}
	if(h > 1) {
		s += fullLine(w,c1); //  Ligne d'en bas
	}
	
	return s;
}

// Retourne un triangle rectangle avec le caractère c, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*<br/>
//			  **<br/>
//			  ***<br/>
//			  ****<br/>"
function fullTriangle1(h,c)
{
	let s = "";
	
	return s;
}

// Retourne un triangle rectangle avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*<br/>
//			  --**<br/>
//			  -***<br/>
//			  ****<br/>"
function fullTriangle2(h,c1,c2)
{
	let s = "";
	for(let numLigne = 1 ; numLigne <= h ; numLigne++) {
		// Ajouter les c2
		for(let j = 0 ; j < h-numLigne; j++) {
			s += c2;
		}
		
		// Ajouter une ligne pleine
		s += fullLine(numLigne,c1);
	}
	return s;
}

// Retourne un triangle isocèle avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*<br/>
//			  --***<br/>
//			  -*****<br/>
//			  *******<br/>"
function fullTriangle3(h,c1,c2)
{
	let s = "";
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à gauche
// Exemple : "*<br/>
//			  **<br/>
//			  *-*<br/>
//			  ****<br/>"
function emptyTriangle1(h,c1,c2)
{
	let s = "";
	
	return s;
}

// Retourne un triangle rectangle vide avec les caractères c1 et c2, de hauteur h
// Angle droit en bas à droite
// Exemple : "---*<br/>
//			  --**<br/>
//			  -*-*<br/>
//			  ****<br/>"
function emptyTriangle2(h,c1,c2)
{
	let s = "";
	
	return s;
}

// Retourne un triangle isocèle vide avec les caractères c1 et c2, de hauteur h
// Base en bas
// Exemple : "---*<br/>
//			  --*-*<br/>
//			  -*---*<br/>
//			  *******<br/>"
function emptyTriangle3(h,c1,c2)
{
	let s = "";
	
	return s;
}

function pacman(h,c1) {
	let s = "";
	
	return s;
}

function hourglass(h,c1,c2) {
	let s = "";
	
	return s;
}

function plus(w,c1,c2) {
	let s = "";
	return s;
}

function fois(w,c1,c2) {
	let s = "";
	return s;
}

function snake1(w,c1,c2) {
	let s = "";
	return s;
}

function snake2(w,c1,c2) {
	let s = "";
	return s;
}

function checkerboard(w,c1,c2) {
	let s = "";
	return s;
}

function diagonal1(w,c1,c2) {
	let s = "";
	return s;
}

function diagonal2(w,c1,c2) {
	let s = "";
	return s;
}


	