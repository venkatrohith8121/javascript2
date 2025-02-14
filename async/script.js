let employees = [
    { "id": 101, "name": "Rahul", sal: 45000 },
    { "id": 102, "name": "Sonia", sal: 55000 }
]
let createemployees = (emp,callback) => {
    setTimeout(() => {
        employees.push(emp)
        callback()
    }, 4000)
}
let getemployees = () => {
    setTimeout(() => {
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
    }, 2000)
}
createemployees({ id: 103, name: "Priyanka", sal: 65000 },getemployees)