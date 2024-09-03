let n = 10
if (n <= 0) {
    console.log("0")
}
else if (n === 1) {
    console.log("1")
}
else {
    fib = [0, 1]
    let a = 0, b = 1, c
    for (i = 2; i <= n; i++) {
        c = a + b
        a = b
        b = c
        fib.push(c)
    }
    console.log(fib)
}