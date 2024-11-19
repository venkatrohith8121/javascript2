class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;
    open_Account(){   
        console.log("Account opened successfully")
     }
    deposit_Amount(amount){    
        console.log("Amount deposited successfully",amount)

    }
    withdrawl_Amount(){
        console.log("Amount withdrawl successfully")
    }
    get_Bal(){  
        console.log("Get bal method")
      }
    close(){  
        console.log("Account closed successfully")
      }
}

let a1= new Account()
a1.open_Account()
a1.deposit_Amount(5000)
a1.withdrawl_Amount()
a1.get_Bal()
a1.close()
