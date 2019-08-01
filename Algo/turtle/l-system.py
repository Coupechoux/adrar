from turtle import *

def change_color(angle):
	r = int(angle*255/360)
	color((128-int(r/2),r,255))

def draw(s, d=50, angle=90):
	colormode(255)
	width(1)
	mem = []
	for c in s:
		change_color(heading())
		if c == 'F' or c == 'A' or c == 'B':
			fd(d)
		elif c == '+':
			rt(angle)
		elif c == '-':
			lt(angle)
		elif c == '[':
			mem.append((pos(),heading()))
		elif c == ']':
			p,h = mem.pop()
			up()
			setpos(p)
			down()
			seth(h)

def next_iter(l, s):
	s2 = ""
	rules = l['rules']
	for c in s:
		if c in rules:
			s2 += rules[c]
		else:
			s2 += c
	return s2
	
def get_iter(l,n):
	s = l['axiom']
	for i in range(n):
		s = next_iter(l,s)
	return s

dragon = {'axiom':"FX", 'rules':{"X":"X+YF+", "Y":"-FX-Y"}}
flocon = {"axiom":"F--F--F--", "rules":{"F": "F+F--F+F"}}
arbre = {"axiom":"FAB", "rules":{"A":"[+FAB]", "B":"[-FAB]"}}
fougere = {"axiom":"X", "rules":{"X":"F[-X]F[+X]F"}}
hilbert = {"axiom":"X", "rules":{"X":"-YF+XFX+FY-", "Y":"+XF-YFY-FX+"}}
sierpinski = {"axiom":"A", "rules":{"A":"B-A-B", "B":"A+B+A"}}
speed(0)

draw(get_iter(sierpinski,8),3,60)
done()