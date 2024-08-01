function reverse(num) {
    i=num
    if (num>=0 && num<=9) {
        return num;
    }
    reversenum=0
    while (num!=0) {
        reversenum=reversenum*10+(num%10)
        num=Math.floor(num/10)        
    }
    if (i==reversenum) {
        console.log("it is a palindrome")
    }
    return reversenum;
}
console.log(reverse(12345678987654321))