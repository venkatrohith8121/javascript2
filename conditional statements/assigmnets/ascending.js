let a = 5661;
let b = 542852;
let c = 85462;
if (a < b && a < c) {
    console.log(a)
    if (b < c) {
        console.log(b)
        console.log(c)
    } else {
        console.log(c)
        console.log(b)
    }
} else if (b < a && b < c) {
    console.log(b)
    if (a < c) {
        console.log(a)
        console.log(c)
    } else {
        console.log(c)
        console.log(a)
    }
} else {
    console.log(c)
    if (a < b) {
        console.log(a)
        console.log(b)
    } else {
        console.log(b)
        console.log(a)
    }
}