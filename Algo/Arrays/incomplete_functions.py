def swap_v1():
	a=1
	b=999
	print("a vaut {} et b vaut {}".format(a,b))
	# a vaut 1 et b vaut 999
	
	a=b
	b=a
	
	print("a vaut {} et b vaut {}".format(a,b))
	# a vaut 999 et b vaut 1
	# ?
	
def swap_v2():
	a=1
	b=999
	
	c=a
	a=b
	b=c
	
	print("a vaut {} et b vaut {}".format(a,b))
	
def min_value(array):
	result = array[0]
	for i in range(len(array)):
		if array[i] < result:
			result = array[i]
	return result
	
def max_value(array):
	result = array[0]
	for i in range(len(array)):
		if array[i] > result:
			result = array[i]
	return result
	
def count(value,array):
	cpt = 0
	for i in range(len(array)):
		if array[i] == value:
			cpt+=1
	return cpt
	
def search_v1(value,array):
	cpt = count(value,array)
	return cpt > 0
	
def search_v2(value,array):
	for i in range(len(array)):
		if array[i] == value:
			return True
	return False
	
	
def search_v3(value,array):
	i=0
	found=False
	while i < len(array) and not found:
		if array[i] == value:
			found = True
		i += 1
	return found
	
def search_in_ordered_v1(value,array):
	for i in range(len(array)):
		if array[i] == value:
			return True
		if array[i] > value:
			return False
	return False
	
def two_biggest(array):
	b1 = -1
	b2 = -1
	for i in range(len(array)):
		if array[i] >= b1:
			b2 = b1
			b1 = array[i]
		elif array[i] > b2:
			b2 = array[i]
	print("Les deux plus grandes valeurs sont {} et {}.".format(b1,b2))

def search(value,array):
	search_in_ordered_v2(value,array,0,len(array)-1)
	

# DICHOTOMIE
def search_in_ordered_v2(value,array,index1,index2):
	print("Je cherche entre les cases {} et {}.".format(index1,index2))

	if index1 > index2:
		return False
		
	middle = int((index1+index2)/2)
	print("Middle = "+str(middle))
	
	# Si le milieu est plus petit que ce que je cherche
	if array[middle] < value: 
		return search_in_ordered_v2(value,array,middle+1,index2)
	
	# Sinon s'il est plus grand
	elif array[middle] > value:	
		return search_in_ordered_v2(value,array,index1,middle-1)
	
	# Sinon il est égal, j'ai trouvé l'élément que je cherche
	else:
		return True