from turtle import *

# Triangle
# forward(200)
# left(120)
# forward(200)
# left(120)
# forward(200)


# Carré
# forward(200)
# left(90)
# forward(200)
# left(90)
# forward(200)
# left(90)
# forward(200)


# Pentagone
# forward(200)
# left(72)
# forward(200)
# left(72)
# forward(200)
# left(72)
# forward(200)
# left(72)
# forward(200)


# Hexagone
# forward(200)
# left(60)
# forward(200)
# left(60)
# forward(200)
# left(60)
# forward(200)
# left(60)
# forward(200)
# left(60)
# forward(200)


def polygone(n,size):
	angle = 360./n
	for i in range(n):
		forward(size)
		left(angle)
		
		
speed(0)
for n in range(3,50):
	if n%3 == 0:
		color("red")
	elif n%3 == 1:
		color("green")
	else:
		color("blue")
	polygone(n,10)