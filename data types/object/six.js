let enames=['rohi','balu','karthik','vamsi','nithin']
for (ename of enames) {
    console.log(ename)    
}
let emp={
    'id':101,
    'name':'rohi',
    'salary':45000
}
for(prop in emp){
    console.log(prop)
}
// to obtain values of keys in the object
for(prop in emp){
    console.log(emp[prop])
}