let eid=Symbol('uid')
let emp={
    'eid':101,
    [eid]:102
}
console.log(emp.eid)
console.log(emp[eid])