function reverse(num) {
    i=num
    if (num>=0 && num<=9) {
        return `${num} is a palindrome`;
    }
    reversenum=0
    while (num!=0) {
        reversenum=reversenum*10+(num%10)
        num=Math.floor(num/10)        
    }
    if (i==reversenum) {
        console.log(`${i} is a palindronme`)
    }else{
        console.log(`${i} is not a palindronme`)
    }
}
console.log(reverse(5))