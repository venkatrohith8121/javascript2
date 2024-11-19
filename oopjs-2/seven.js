class Account {
    acc_Bal = 10;
    deposit_Amount(amount) {
        // console.log("Amount deposited successfully", amount)
        this.acc_Bal=this.acc_Bal+amount
    }

}

let a1 = new Account()

a1.deposit_Amount(5000)

let a2=new Account()
a2.deposit_Amount(600000)

console.log(a1)
console.log(a2)