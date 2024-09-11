let a=[3,4,2,6]
c=a.sort()//sorted them in the asscending order
console.log(c)

console.log(a.reverse())// printing the reverse of array

a.splice(1,1)//starts from the index and delets the desired count of indexs
console.log(a)

a.fill(0,1,4)// 0 is the value that will be fill in the array ,1 is the starting index and, 4 is the ending index
console.log(a)