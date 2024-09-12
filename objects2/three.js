let emp={
    'id':101,
    'name':'rahul',
    'sal':4500
}
// there is no direct lenght prop so we are using the object prop
// length is applicable only for arrays
// dupliacte methods are not allowed
user={}
if (Object.keys(user).length>0) {
    console.log('it is not empty')
} else {
    console.log('it is empty')   
}
Object.assign(user,{'loc':'wayanad'})// it is going to assign the keys and values
console.log(user)