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
	print("a vaut {} et b vaut {}".format(a,b))
	# a vaut 1 et b vaut 999
	
	c = a
	a = b
	b = c
	
	print("a vaut {} et b vaut {}".format(a,b))
	# a vaut 999 et b vaut 1
	# ?
	
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
	counter = 0
	for i in range(len(array)):
		if array[i] == value:
			counter += 1
	return counter
	
def search_v1(value,array):
	return count(value,array) > 0
		
def search_v2(value,array):
	for i in range(len(array)):
		if array[i] == value:
			return True
	return False
	
def search_v3(value,array):
	i=0
	while i < len(array) and array[i] != value:
		i+=1
	return i < len(array)
	
def search_in_ordered_v1(value,array):
	i=0
	while i < len(array) and array[i] < value:
		i+=1
	return i < len(array) and array[i] == value

def two_biggest(array):
	big1 = -1
	big2 = -1
	
	for i in range(len(array)):
		if array[i] > big1:
			big2 = big1
			big1 = array[i]
		elif array[i] > big2:
			big2 = array[i]		
		
		
	return big1, big2
		
		
		
	
def search(value,array):
	return search_in_ordered_v2(value,array,0,len(array)-1)
	
def search_in_ordered_v2(value,array,index_debut,index_fin):
	print("Je cherche entre {} et {}.".format(index_debut, index_fin))
	if index_fin < index_debut:
		return False
	
	milieu = int(   (index_fin+index_debut)/2  )
	print("La case {} (au milieu) contient {}.".format(milieu,array[milieu]))
	
	if array[milieu] < value:
		return search_in_ordered_v2(value, array, milieu+1, index_fin)
	elif array[milieu] > value:
		return search_in_ordered_v2(value, array, index_debut, milieu-1)
	else:
		return True
	
	
	
	
	
	
	
	
	
	
	