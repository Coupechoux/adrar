from incomplete_functions import *
from mystery_functions import *

# swap_v1()
# swap_v2()

array_number_1 = [1,53,30,0,20,1,100,2]
array_number_2 = [999,53,30,0,20,1,100]
array_number_3 = ["a","Bonjour","Salut","a"]
ordered_array = [0,1,2,50,60,61,68,77,78,100,103,112,113,223,258]

print("Min = " + str(min_value(array_number_1)))
print("Max = " + str(max_value(array_number_1)))

value = 1
s = "{} apparait {} fois dans le tableau {}."
print(s.format(value, count(value,array_number_1),array_number_1))