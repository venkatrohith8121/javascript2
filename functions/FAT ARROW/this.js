// function greet(){
//     console.log(this)
// }
// greet()
let greet=()=>{
    console.log(this)
}
greet()
// this is the pointer, pointing to the current object
// we can var to redefine 
//  but we cant use let it will show the conflict of over written
