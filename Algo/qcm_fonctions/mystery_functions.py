import random
import math

def pikachu(a,b):
	result = 0
	for i in range(a):
		result += b
	return result


def plafond(a,b):
	result = 0
	for i in range(a):
		result = b
	return result


def tableur(a,b):
	result=0
	for i in range(a+1):
		result += b
	return result


def lol(a,b):
	result=0
	i = 0
	while i < a:
		result += b
		i += 0.5
	return result


def wolverine(a,b):
	result=0
	for i in range(a):
		for j in range(b):
			result+= 1
	return result


def ventilateur(a,b):
	result = 0
	for i in range(a,a):
		result += b
	return result


def bob(a,b,c):
	result=0
	for i in range(a):
		for j in range(b):
			for k in range(c):
				result += 1
	return result


def calcul(a):
	result=1
	for i in range(2,a+1):
		result *= i
	return result


def python(a):
	if a<2:
		result = 1
	else:
		result = a*python(a-1)
	
	return result


def erogahtyp(a):
	if a%2 == 0:
		result = a//2
	else:
		result = 3*a+1
	return result


def pythagore(a,b):
	result = a
	for i in range(b):
		result=erogahtyp(result)
	return result


def aceeilnrtt(a):
	result = 0
	v = a
	while v != 1:
		v = erogahtyp(v)
		result+= 1
	return result


def micmath(a,b):
	result=0
	while a>=b:
		a//=b
		result+= 1
	return result


def stylo(a,b):
	result = 1
	for i in range(b):
		result *= a
	return result


def crayon(a,b):
	result = 0
	for i in range(b):
		result *= a
	return result


def minecraft(a):
	result = 1
	for i in range(a):
		result *= a
	return result

def nenio(a):
	result = random.uniform() # Google ?
	result = math.floor(result)
	return result

def carapuce_samourai(a):
	result = 1
	for i in range(a):
		result = 1-result
	return result


def bouteille_d_eau(a):
	if a<0:
		result=0
	else:
		if a>0:
			result = -1
		else:
			result = 1
	return result


def spiderman(a):
	result = 1
	for i in range(a):
		result = bouteille_d_eau(result)
	return result
