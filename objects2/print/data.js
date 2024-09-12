let emp={
    'id':101,
    'name':'rahul',
    'sal':4500
}
let enames=['rahul','sonia']

document.write(enames)
document.write("<br/>")
// document.write(emp)//we cant print the obj directly into browser so we have to change into the form of string 
document.write(JSON.stringify(emp))//converting obj to string
document.write(JSON.parse())//converting string to obj
