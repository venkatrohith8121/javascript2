class Account{
    min_bal=500
    open_account(){
        console.log(open_account)
    }
    deposit_amount(){
        console.log(deposit_amount)
    }
    widthdraw_account(){
        console.log(widthdraw_account)
    }
    get_bal(){
        console.log(get_bal)
    }
    close_account(){
        console.log(close_account)
    }
}
let a1=Account()
a1.open_account()
a1.deposit_amount()
a1.widthdraw_account()
a1.get_bal()
a1.close_account()
console.log(a1.min_bal)