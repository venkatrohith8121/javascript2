let a=28;
let b=911;
let c=8;
if (a>b && a>c) {
    console.log(a)
    if (c<b) {
        console.log(b)
        console.log(c)
    } else {
        console.log(c)
        console.log(b)
    }
} else if(b>c && b>a){
    console.log(b)
    if (a<c) {
        console.log(c)
        console.log(a)        
    } else {
        console.log(a)
        console.log(c)
    }    
}else{
    console.log(c)
    if (a<b) {
        console.log(b)
        console.log(a)        
    } else {
        console.log(a)
        console.log(b)
    }
}