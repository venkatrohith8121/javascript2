number = 1532
let original_number = number
digits_number = 0
sum=0
// lets count the digits in the number
let temp = number
while (temp > 0) {
    digits_number++
    temp = Math.floor(temp / 10)
}
temp = number
// count the sum of the cubes of the number
while (temp > 0) {
    let digit = temp % 10
    let power = 1

    for (let i = 0; i < digits_number; i++) {
        power *= digit
    }
    sum += power
    temp = Math.floor(temp / 10)
}
if (sum==original_number) {
    console.log("it is a armstrong number")
}
else{
    console.log("it is not an armstrong number")
}