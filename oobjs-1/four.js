class Account{
    open_account(){
        console.log("open_account")
    }
    deposit_account(amount){
        console.log(`Amount- ${amount}- Deposited sunccessfully`)
    }
    widthdraw_account(amount){
        console.log("amount widthdraw successfully")
    }
}
let a1=new Account()
a1.open_account();
a1.deposit_account(5000)
a1.widthdraw_account(1000)