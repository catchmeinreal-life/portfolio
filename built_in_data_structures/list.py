#creating an empty list
my_list = []

#adding 10. 20. 30 , 40 to the list
my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.append(40)

#inserting the value 15 to the second position
my_list.insert(1, 15)

# extend the list with another list [50, 60, 70] 
new_list = [50, 60, 70]
my_list.extend(new_list)

#removing the last item from my list

my_list.pop() #removing the last item

#sorting the lst in ascending order
print(my_list) #my_list.sort() ,already the list is sorted

# find and print the index of the value 15

print(my_list.index(15))