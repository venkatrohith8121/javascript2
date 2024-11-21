class account {
    acc_name;
    acc_email;
    constructor(name, email) {
        this.acc_name = name
        this.acc_email = email
    }
}
class SA extends account {
    acc_Id;
    acc_Bal;
    min_Bal = 500;
    constructor(id, name, email, amount) {
        super(name,email)
        this.acc_Id=id
        this.acc_Bal=amount
    }

}
class CA extends account {

    acc_Id;
    acc_Bal = 0;
    min_Bal = 25000;
    constructor(id, name, email, amount) {
        super(name,email)
        this.acc_Id=id
        this.acc_Bal=amount
    }
}

let a1 = new SA(101, "Rahul", "rahul@gmail.com", 5000)
let a2 = new SA(102, "Sonia", "sonia@gmail.com", 3000)