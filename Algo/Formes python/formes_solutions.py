def fullLine(n,c):
	s = ""
	for i in range(n):
		s += c
	return s
	
# Empty line, Rectangle, Empty Rectangle, Triangle à gauche, Triangle à droite, Triangle centré, Triangle vide à gauche, Triangle vide à droite, Triangle vide centré, Pacman, Sablier, Plus, Multiplier, Serpent horizontal, Serpent Vertical, Damier, Diagonale /, Diagonale \

def emptyLine(n,c1,c2):
	s = c1
	for i in range(n-2):
		s += c2
	if n>1:
		s += c1
	return s
	
	
def fullRectangle(largeur,hauteur,c):
	s = ""
	for i in range(hauteur):
		s += fullLine(largeur,c)
		s += "\n"
	return s
	
def emptyRectangle(largeur, hauteur, c1, c2):
	s = fullLine(largeur,c1)
	s += "\n"
	for i in range(hauteur-2):
		s += emptyLine(largeur,c1,c2)
		s += "\n"
	if hauteur > 1:
		s += fullLine(largeur,c1)
		s += "\n"
	return s
	
def fullTriangle1(h,c):
	s = ""
	for i in range(h):
		s += fullLine(i+1,c)
		s += "\n"
	return s
	
def fullTriangle2(h,c1,c2):
	s = ""
	for i in range(h):
		s += fullLine(h-i-1,c2)
		s += fullLine(i+1,c1)
		s += "\n"
	return s
	
	
def fullTriangle3(hauteur,c1,c2):
	s=""
	nbC1 = 1
	nbC2 = hauteur-1
	for i in range(hauteur):
		s += fullLine(nbC2,c2)
		s += fullLine(nbC1,c1)
		s += "\n"
		nbC1 += 2
		nbC2 -= 1
	return s

	
# def fullTriangle3(hauteur,c1,c2):
	# s = ""
	# for i in range(hauteur):
		# s += fullLine(hauteur-i-1,c2)
		# s += fullLine(2*i+1,c1)
		# s += "\n"
	# return s	
	
def emptyTriangle1(hauteur,c1,c2):
	s = ""
	for i in range(hauteur-1):
		s += emptyLine(i+1,c1,c2)
		s += "\n"
	s += fullLine(hauteur,c1)
	return s

def emptyTriangle2(hauteur,c1,c2):
	s = ""
	for i in range(hauteur-1):
		s += fullLine(hauteur-i-1,c2)
		s += emptyLine(i+1,c1,c2)
		s += "\n"
	s += fullLine(hauteur,c1)
	return s
	
def emptyTriangle3(hauteur,c1,c2):
	s = ""
	for i in range(hauteur-1):
		s += fullLine(hauteur-i-1,c2)
		s += emptyLine(2*i+1,c1,c2)
		s += "\n"
	s += fullLine(2*hauteur-1,c1)+"\n"
	return s