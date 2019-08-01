from formes_solutions import *

print("Tests fullLine :")
print(fullLine(1,'+'))
print(fullLine(6,'a'))
print(fullLine(2,'/'))
print(fullLine(30,'#'))

print("\nTests emptyLine :")
print(emptyLine(3,'r','8'))
print(emptyLine(1,'e','-'))
print(emptyLine(10,'-','+'))
print(emptyLine(20,'*',' '))

print("\nTests fullRectangle :")
print(fullRectangle(1,5,'+'))
print(fullRectangle(4,1,'-'))
print(fullRectangle(5,5,'*'))
print(fullRectangle(30,3,'h'))

print("\nTests emptyRectangle :")
print(emptyRectangle(1,5,'+','-'))
print(emptyRectangle(4,1,'-','i'))
print(emptyRectangle(5,5,'*',' '))
print(emptyRectangle(30,7,'X','-'))

print("\nTests fullTriangle1 :")
print(fullTriangle1(1,'+'))
print(fullTriangle1(4,'-'))
print(fullTriangle1(5,'*'))
print(fullTriangle1(15,'X'))

print("\nTests fullTriangle2 :")
print(fullTriangle2(1,'+','-'))
print(fullTriangle2(4,'-','i'))
print(fullTriangle2(5,'*',' '))
print(fullTriangle2(15,'X',' '))

print("\nTests fullTriangle3 :")
print(fullTriangle3(1,'+','-'))
print(fullTriangle3(4,'-','i'))
print(fullTriangle3(5,'*',' '))
print(fullTriangle3(15,'X',' '))


print("\nTests emptyTriangle1 :")
print(emptyTriangle1(1,'+','.'))
print(emptyTriangle1(4,'-','o'))
print(emptyTriangle1(5,'*','^'))
print(emptyTriangle1(15,'X',' '))

print("\nTests emptyTriangle2 :")
print(emptyTriangle2(1,'+','-'))
print(emptyTriangle2(4,'-','i'))
print(emptyTriangle2(5,'*',' '))
print(emptyTriangle2(15,'X',' '))

print("\nTests emptyTriangle3 :")
print(emptyTriangle3(1,'+','-'))
print(emptyTriangle3(4,'-','i'))
print(emptyTriangle3(5,'*',' '))
print(emptyTriangle3(15,'X',' '))
