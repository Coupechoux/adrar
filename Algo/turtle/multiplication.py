from turtle import *
import math

def go_to_circle_pos(k,n):
	x = math.cos(2*math.pi*k/n+math.pi/2)
	y = math.sin(2*math.pi*k/n+math.pi/2)
	goto(250*x,250*y)

def draw_chord(k1,k2,n):
	up()
	go_to_circle_pos(k1,n)
	down()
	go_to_circle_pos(k2,n)

def draw_circle(n):
	up()
	goto(0,-250)
	down()
	setheading(0)
	circle(250)
	shape("circle")
	up()
	for i in range(n):
		go_to_circle_pos(i,n)
		stamp()
	shape("turtle")

def draw_table(k,n):
	for i in range(n):
		draw_chord(k,k*i,n)
		
		
def draw_tables(n):
	draw_circle(n)
	for i in range(1,n):
		print(str(i)+"/"+str(n))
		draw_table(i,n)
		
def draw_inverse_table(k,n):
	for i in range(n):
		draw_chord(i,i*k,n)
		
speed(0)
for i in range(5,200):
	print(str(i)+"/"+str(200))
	clear()
	draw_circle(i)
	draw_inverse_table(2,i)
	ts = getscreen()
	ts.getcanvas().postscript(file=str(2)+"_"+str(i)+".eps")