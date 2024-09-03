number=153
let original_number=number
digits_number=0


// lets count the digits in the number
let temp=number
while (temp>0) {
    digits_number++
    temp=Math.floor(temp/10)
    
}
// count the sum of the cubes of the number
temp=number
