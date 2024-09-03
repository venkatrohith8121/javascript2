const input = require('prompt-sync')();
n=parseInt(input("enter the array size:"))
array = []
for (i = 0; i < n; i++) {
    x = input("enter the number:")
    array.push(x)
}
console.log(array)
console.log(array.length)
even=[]
i = 0
while (i < array.length) {
    if(array[i]%2==0){
    // console.log(array[i])}
    even.push(array[i])}
    i=i+1
}
console.log(" even numbers are: ",even)