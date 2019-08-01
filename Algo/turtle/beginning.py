from turtle import *

ORANGE = "#ff8800"
YELLOW = "#ffff00"
GREEN = "#00ff00"
CYAN = "#00ffff"
LBLUE = "#0088ff"
BLUE = "#0000ff"
PURPLE = "#8800ff"
PINK = "#ff00ff"
RED = "#ff0000"
WHITE = "#ffffff"
GRAY = "#888888"
BLACK = "#000000"

speed(0)

def a1():
	setheading(270)
	width(3)
	color(RED)
	forward(100)
	setheading(0)
	forward(50)
	
def a2():
	setheading(180)
	color(YELLOW)
	width(3)
	forward(50)
	setheading(270)
	forward(50)
	setheading(0)
	forward(100)
	setheading(90)
	forward(100)
	
def a3():
	setheading(180)
	color(ORANGE)
	width(3)
	forward(50)
	setheading(0)
	forward(100)
	setheading(180)
	forward(50)
	setheading(90)
	forward(50)
	setheading(270)
	forward(100)
	
def a4():
	setheading(0)
	color(GREEN)
	width(3)
	forward(100)
	circle(50,180)
	forward(50)
	circle(-50,180)
	forward(100)

def a5():
	setheading(0)
	color(PINK)
	width(3)
	circle(-100,180)
	circle(-50,180)
	circle(50,180)
	circle(100,180)
	
def a6():
	setheading(90)
	color(CYAN)
	width(3)
	forward(50)
	up()
	forward(50)
	down()
	forward(100)
	
def a7():
	setheading(270)
	color("#00ff80")
	width(3)
	forward(100)
	circle(50,180)
	forward(50)
	up()
	forward(50)
	down()
	forward(100)
	circle(50,180)
	forward(50)

def a8():
	setheading(90)
	color(PINK)
	width(3)
	forward(50)
	setheading(0)
	forward(100)
	setheading(270)
	forward(200)
	setheading(180)
	forward(50)
	up()
	forward(50)
	setheading(90)
	forward(50)
	down()
	forward(50)
	
def a9():
	setheading(0)
	color(CYAN)
	width(3)
	circle(50,180)
	circle(-50,180)
	forward(200)
	circle(-50,180)
	circle(50,180)
	setheading(180)
	forward(200)
	
def a10():
	setheading(0)
	color(RED)
	width(3)
	circle(50,180)
	color(GREEN)
	circle(100,180)
	color(YELLOW)
	circle(200,180)
	
def a11():
	setheading(90)
	color(LBLUE)
	width(3)
	circle(-50,180)
	setheading(0)
	up()
	forward(50)
	down()
	setheading(90)
	circle(-50,180)
	up()
	forward(50)
	setheading(180)
	forward(25)
	setheading(270)
	color(PINK)
	down()
	circle(-100,180)
	
def a12():
	setheading(90)
	color(GREEN)
	width(3)
	circle(-50,180)
	forward(100)
	circle(50,180)
	up()
	setheading(0)
	forward(50)
	setheading(270)
	color(ORANGE)
	down()
	circle(50,180)
	forward(100)
	circle(-50,180)
	
def b1():
	seth(0)
	color(GREEN)
	width(3)
	for i in range(4):
		fd(50)
		seth(270)
		fd(50)
		seth(0)
		
def b2():
	color(RED)
	seth(90)
	width(3)
	for i in range(4):
		fd(50)
		seth(0)
		fd(50)
		seth(270)
		fd(50)
		seth(0)
		fd(50)
		seth(90)
		
def b3():
	seth(0)
	color(PURPLE)
	width(3)
	for i in range(4):
		fd(100)
		rt(90)
		
def b4():
	seth(0)
	color(CYAN)
	width(3)
	for i in range(3):
		fd(100)
		lt(120)

def b5():
	seth(90)
	color(ORANGE)
	width(3)
	fd(100)
	color(RED)
	for i in range(3):
		fd(50)
		rt(120)
		
def b6():
	color(RED)
	seth(0)
	width(3)
	for i in range(2):
		fd(50)
		seth(90)
		fd(50)
		seth(0)
	color(GREEN)
	for i in range(3):
		fd(50)
		seth(270)
		fd(50)
		seth(0)
		
def b7():
	color(ORANGE)
	seth(0)
	width(3)
	for i in range(4):
		fd(100)
		rt(90)
	for i in range(3):
		fd(100)
		lt(120)

def b8():
	color(YELLOW)
	seth(0)
	width(3)
	for i in range(8):
		fd(200)
		rt(135)
		
def b9():
	color(PINK)
	seth(0)
	width(3)
	fd(50)
	up()
	fd(50)
	down()
	for i in range(3):
		fd(100)
		rt(120)
		
def b10():
	color(CYAN)
	seth(0)
	width(3)
	for i in range(8):
		fd(100)
		rt(135)
	up()
	fd(200)
	down()
	color(YELLOW)
	for i in range(8):
		fd(200)
		lt(135)
	up()
	rt(90)
	fd(100)
	down()
	color(PINK)
	for i in range(8):
		fd(100)
		rt(135)
		
def b11():
	color(RED)
	seth(0)
	width(3)
	for i in range(4):
		fd(50)
		lt(90)
		fd(50)
		rt(90)
		fd(50)
		rt(90)
		
def b12():
	color(PURPLE)
	seth(0)
	width(3)
	for i in range(3):
		rt(90)
		fd(50)
	up()
	fd(50)
	down()
	color(GREEN)
	for i in range(3):
		fd(50)
		rt(90)
		
def b13():
	color("#80ff00")
	seth(0)
	width(3)
	for i in range(8):
		fd(50)
		lt(135)
		fd(25)
		rt(90)
		fd(25)
		rt(90)
		
def b14():
	color(YELLOW)
	seth(0)
	width(3)
	for i in range(5):
		fd(50)
		rt(120)
		fd(100)
		lt(120)
		fd(50)
		
def b15():
	color(RED)
	seth(0)
	width(3)
	for i in range(4):
		fd(100)
		circle(50,90)
		
def b16():
	color(GREEN)
	seth(0)
	width(3)
	for i in range(4):
		circle(25,90)
		circle(-25,90)
	seth(270)
	circle(-200,90)
	
def b17():
	color(LBLUE)
	seth(0)
	width(3)
	for i in range(6):
		circle(50,180)
		lt(120)
	
def b18():
	color(YELLOW)
	seth(0)
	width(3)
	for i in range(8):
		fd(200)
		lt(90)
		fd(50)
		lt(45)
	
def b19():
	for i in range(4):
		circle(30,180)
		setheading(0)
		
	up()
	setheading(90)
	forward(30)
	down()

	for i in range(4):
		setheading(180)
		circle(30,180)
		
def b20():
	color(CYAN)
	seth(270)
	width(3)
	for i in range(2):
		fd(100)
		circle(50,90)
	fd(100)
	fd(50)
	circle(50,90)
	fd(100)
	circle(50,90)
	fd(50)
	seth(0)
	fd(200)
	up()
	seth(180)
	fd(100)
	seth(270)
	fd(25)
	seth(0)
	down()
	circle(-50,360)
	
def b21():
	colors = [LBLUE,BLUE,PURPLE,PINK,RED,ORANGE]
	c = 0
	color(colors[c])
	seth(0)
	width(3)
	for i in range(6):
		fd(100)
		lt(120)
		fd(50)
		lt(120)
		fd(100)
		rt(60)
		fd(50)
		rt(120)
		fd(50)
		rt(120)
		up()
		fd(100)
		c += 1
		color(colors[c%len(colors)])
		down()
		
def b22():
	color(YELLOW)
	seth(30)
	width(3)
	for i in range(6):
		fd(100)
		lt(60)
	color(RED)
	rt(90)
	for i in range(3):
		fd(100)
		rt(120)
	lt(90)
	color(GREEN)
	for i in range(2):
		for j in range(4):
			fd(100)
			rt(90)
		rt(150)
		
def b23():
	color(PINK)
	seth(45)
	width(3)
	for i in range(2):
		for j in range(3):
			fd(50)
			rt(90)
			fd(50)
			lt(90)
		rt(135)
		fd(50)
		rt(45)
		
def b24():
	color(RED)
	seth(0)
	width(3)
	for i in range(8):
		fd(100)
		lt(135)
	fd(50)
	color(GREEN)
	for i in range(3):
		rt(135)
		fd(100)
		lt(135)
		fd(50)
	fd(50)
	rt(90)
	for i in range(2):
		fd(25)
		lt(90)
	fd(25)
	rt(90)
	fd(50)
	for i in range(3):
		fd(50)
		lt(135)
		fd(100)
		rt(135)
		
def c1():
	color(CYAN)
	seth(0)
	width(3)
	for i in range(4):
		for j in range(3):
			fd(100)
			rt(120)
		fd(100)
		
def c2():
	color(PINK)
	seth(90)
	width(3)
	for i in range(7):
		for j in range(4):
			fd(50)
			rt(90)
		up()
		fd(100)
		down()

def c3():
	colors = [GREEN, CYAN, BLUE]
	c = 0
	color(colors[c])
	seth(0)
	width(3)
	for i in range(3):
		for j in range(8):
			fd(100)
			lt(135)
		up()
		fd(200)
		c += 1
		color(colors[c])
		down()
		
def c4():
	seth(0)
	width(3)
	for i in range(5):
		color(RED)
		for j in range(3):
			fd(50)
			lt(120)
		color(ORANGE)
		for j in range(4):
			fd(50)
			rt(90)
		up()
		fd(100)
		down()
		
def c5():
	c = 0
	colors = [YELLOW, GREEN, BLUE, PINK]
	color(colors[0])
	seth(0)
	width(3)
	for i in range(4):
		for j in range(8):
			fd(200)
			lt(135)
		c += 1
		color(colors[c%len(colors)])
		rt(90)
		
def c6():
	color(YELLOW)
	seth(0)
	width(3)
	for i in range(3):
		for j in range(5):
			fd(100)
			lt(120)
		rt(120)
		
def c7():
	color(ORANGE)
	seth(0)
	width(3)
	for i in range(8):
		for j in range(4):
			fd(50)
			rt(120)
		lt(165)
		
		
def c8():
	color(GREEN)
	seth(90)
	width(3)
	fd(200)
	for i in range(4):
		color(RED)
		rt(45)
		for j in range(3):
			fd(100)
			rt(120)
		color(YELLOW)
		fd(100)
		lt(135)
		
def c9():
	color(GREEN)
	seth(0)
	width(3)
	for i in range(3):
		for j in range(3):
			fd(50)
			rt(120)
			for k in range(4):
				rt(90)
				fd(50)
		lt(120)
		fd(200)

def c10():
	color(RED)
	seth(270)
	width(3)
	for i in range(4):
		for j in range(4):
			fd(50)
			for k in range(4):
				lt(90)
				fd(25)
			rt(90)
		fd(100)
		
def c11():
	colors = [CYAN,BLUE,PURPLE,PINK,RED,ORANGE,CYAN]
	c = 0
	color(colors[c])
	seth(0)
	width(3)
	for i in range(6):
		for j in range(6):
			for k in range(4):
				fd(50)
				lt(120)
			rt(60)
		up()
		fd(100)
		down()
		c += 1
		color(colors[c])
		rt(60)
		
		
def c12():
	color(YELLOW)
	seth(0)
	width(3)
	for i in range(4):
		for j in range(2):
			circle(50,90)
			fd(50)
			lt(90)
		circle(-50,45)
	color(LBLUE)
	lt(60)
	circle(-100,300)
	rt(120)
	circle(50,180)
		
		
def d1():
	color(RED)
	seth(0)
	width(3)
	for i in range(8):
		fd(100)
		rt(45)
		
def d2():
	color(GREEN)
	seth(0)
	width(3)
	fd(50)
	seth(270)
	fd(100)
	seth(0)
	fd(150)
	seth(90)
	fd(50)
	seth(180)
	fd(100)
	
def d3():
	color(PURPLE)
	seth(0)
	width(3)
	fd(100)
	rt(135)
	fd(150)
	lt(135)
	fd(100)
	
def d4():
	color(LBLUE)
	seth(0)
	width(3)
	for i in range(6):
		seth(90)
		fd(50)
		seth(180)
		fd(50)
		seth(90)
		fd(25)
		seth(0)
		fd(100)
		
		
def d5():
	color(ORANGE)
	seth(270)
	width(3)
	for i in range(2):
		fd(150)
		lt(90)
		fd(50)
		lt(90)
	lt(90)
	color(YELLOW)
	for i in range(4):
		fd(50)
		lt(90)
		
def d6():
	color(CYAN)
	seth(0)
	width(3)
	longueur = 100
	fd(longueur/2)
	longueur = 200
	seth(270)
	fd(longueur/2)
	seth(0)
	longueur = 300
	fd(longueur/2)
	
def d7():
	color(PINK)
	seth(90)
	width(3)
	longueur = 100
	fd(longueur/2)
	seth(0)
	fd(longueur/2)
	seth(90)
	longueur = 200
	fd(longueur/2)
	seth(180)
	fd(longueur/2)
	longueur = 100
	seth(270)
	fd(longueur/2)
	
def d8():
	color(ORANGE)
	seth(0)
	width(3)
	longueur = 200
	fd(longueur/2)
	seth(270)
	fd(longueur/2)
	longueur = 100
	for i in range(2):
		seth(180)
		fd(longueur/2)
		seth(90)
		fd(longueur/2)
		
def d9():
	color(BLUE)
	width(3)
	seth(0)
	longueur = 100
	for i in range(6):
		fd(longueur/2)
		rt(120)
		longueur += 100
	
def d10():
	color(YELLOW)
	seth(0)
	width(3)
	longueur = 100
	for i in range(10):
		fd(longueur/2)
		rt(90)
		longueur += 25
		
def d11():
	color(WHITE)
	seth(0)
	width(3)
	longueur = 250
	for i in range(5):
		for j in range(3):
			fd(longueur/2)
			lt(120)
		fd(longueur/2)
		longueur -= 50
		
def d12():
	color(CYAN)
	seth(0)
	width(3)
	longueur = 100
	for i in range(6):
		for j in range(3):
			fd(longueur/2)
			lt(120)
		fd(longueur/2)
		longueur += 50
		lt(60)
		
def d13():
	color(PINK)
	seth(0)
	width(3)
	rayon = 100
	for i in range(8):
		circle(-rayon/2,180)
		up()
		fd(50)
		down()
		rayon += 50
		
def d14():
	color(GREEN)
	seth(45)
	width(3)
	for i in range(2):
		longueur = 50
		for j in range(4):
			fd(longueur/2)
			rt(90)
			fd(longueur/2)
			lt(90)
			longueur += 50
		rt(180)
		
def d15():
	color(RED)
	seth(270)
	width(3)
	angle = 90
	longueur = 100
	for i in range(10):
		fd(longueur/2)
		lt(180-angle)
		angle += 5
		longueur += 20
		
def d16():
	color(GREEN)
	seth(270)
	width(3)
	fd(100)
	rt(120)
	fd(50)
	lt(120)
	for i in range(3):
		rt(90)
		fd(50)
	lt(30)
	fd(50)
	rt(30)
	color(ORANGE)
	up()
	fd(50)
	rayon = 100
	for i in range(3):
		down()
		circle(-rayon/2,180)
		up()
		rt(90)
		fd(50+rayon)
		rayon += 100
		rt(90)
	down()

getscreen().bgcolor("black")
# a1()
# a2()
# a3()
# a4()
# a5()
# a6()
# a7()
# a8()
# a9()
# a10()
# a11()
# a12()
# b1()
# b2()
# b3()
# b4()
# b5()
# b6()
# b7()
# b8()
# b9()
# b10()
# b11()
# b12()
# b13()
# b14()
# b15()
# b16()
# b17()
# b18()
# b19()
# b20()
# b21()
# b22()
# b23()
# b24()
# c1()
# c2()
# c3()
# c4()
# c5()
# c6()
# c7()
# c8()
# c9()
# c10()
# c11()
# c12()
# d1()
# d2()
# d3()
d4()
d5()
d6()
d7()
d8()
d9()
d10()
d11()
d12()
d13()
d14()
d15()
d16()
done()