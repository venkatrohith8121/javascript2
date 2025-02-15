let employees = [
    { "id": 101, "name": "Rahul", sal: 45000 },
    { "id": 102, "name": "Sonia", sal: 55000 }
]
let createemployees = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = true;
            flag ? resolve("data added"): reject("data reject")
            employees.push(emp)
        }, 4000);
    })
}

let getemployees = () =>  {
        let rows = ""
        for (employee of employees) {
            rows = rows +
                `<tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.sal}</td>
            </tr>`
        }
        document.getElementById('tabledata').innerHTML=rows
    } 

let execute=async ()=>{
    await createemployees({id:103,name:"Priyanka",sal:65000})
    getemployees()
}
execute()