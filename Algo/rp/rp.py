# Suite de cartes -> entier -> binaire -> entier -> suite de cartes
import cProfile

def cards_to_binary(t):
	s = ""
	for card in t:
		n = 4
		if card[0] == "J":
			n = 1
		elif card[0] == "Q":
			n = 2
		elif card[0] == "K":
			n = 3
		n *= 5
		if card[1] == "♥":
			n += 1
		elif card[1] == "♦":
			n += 2
		elif card[1] == "♣":
			n += 3
		else:
			n += 4
		s += integer_to_binary(n)
	return s
		
def integer_to_binary(n):
	s = ""
	for i in range(6):
		s += str(n%2)
		n = int(n/2)
	s = reverse(s)
	return s
	
def reverse(s):
	result = ""
	for i in range(len(s)):
		result += s[len(s)-1-i]
	return result

def cut(s,p):
	result = ""
	for i in range(6*p,6*p+6):
		result += s[i]
	return result
	
def binary_to_integer(s):
	n = 0
	for i in range(len(s)):
		n = 2*n + int(s[i])
	return n
	
def binary_to_cards(s):
	for p in range(int(len(s)/6)):
		b = cut(s,p)
		n = binary_to_integer(b)
		n2 = n%5
		n1 = (int(n/5))%5
		if n1 == 1:
			print("Valet de ",end ="")
		elif n1 == 2:
			print("Dame de ",end = "")
		elif n1 == 3:
			print("Roi de ",end = "")
		else:
			print("As de ",end = "")
			
		if n2 == 1:
			print("coeur")
		elif n2 == 2:
			print("carreau")
		elif n2 == 3:
			print("trèfle")
		else:
			print("pique")
			
def test(t):
	b = cards_to_binary(t)
	print("Message codé = " + str(b))
	binary_to_cards(b)
	
cProfile.run('test(["J♥","K♦","A♠","A♥"])')