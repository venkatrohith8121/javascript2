let gotomovie=(success,failure)=>{
let amount=50065
if(amount>600){
    success("go to movie")
}else{
    failure("study well")
}
}

gotomovie((msg)=>{console.log(msg)},(msg)=>{console.log(msg)})
