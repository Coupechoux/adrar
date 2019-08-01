def f1(array):
	result=0
	for i in range(len(array)):
		if array[i]%2 == 0:
			result += array[i]
	return result
	
def f2(array):
	result=0
	for i in range(len(array)):
		if i%2 == 0:
			result += array[i]
	return result

def f3(array):
	for i in range(len(array)-1):
		if array[i] > array[i+1]:
			temp = array[i]
			array[i] = array[i+1]
			array[i+1] = temp
			
def f4(array):
	for iter in range(len(array)-1):
		f3(array)
		
		
		
		
		