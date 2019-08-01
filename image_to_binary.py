from PIL import Image
import numpy as np

def binary_to_integer(t):
	r=0
	for n in t:
		r = 2*r+n
	return r
	
im = Image.open("test.png","r")
img = np.array(im)
pix = [[1 if c[0]==0 else 0 for c in line] for line in img]


numbers = [binary_to_integer(n) for n in pix]
with open("result.txt","w") as f:
	for n in numbers:
		f.write(str(n)+"\n")