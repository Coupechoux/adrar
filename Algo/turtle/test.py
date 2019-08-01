from turtle import *

def dessinerUneEtoile():
	for i in range(5):
		fd(150)
		right(144)
		
def dessinerUnPolygone(n):
	for i in range(n):
		fd(50)
		left(360.0/n)

nombreDeCotes = 3
for i in range(10):
	dessinerUnPolygone(nombreDeCotes)
	nombreDeCotes = nombreDeCotes + 1

done()