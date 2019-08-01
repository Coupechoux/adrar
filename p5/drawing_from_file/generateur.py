import random

f=open("points.txt","w")
	
alea = int(random.random()*3)
if alea == 0:
	x = 0 
	y = 600
elif alea == 1:
	x = 400 
	y = 0
else:
	x = 800
	y = 600

for i in range(50000):
	alea = int(random.random()*3)
	if alea == 0:
		autrePointX = 0 
		autrePointY = 600
	elif alea == 1:
		autrePointX = 400 
		autrePointY = 0
	else:
		autrePointX = 800
		autrePointY = 600
	
	x = (x+autrePointX)/2
	y = (y+autrePointY)/2
	
	f.write("{},{}\n".format(x,y))
		
	
	
	
	
	
	
	
	
	
	
	