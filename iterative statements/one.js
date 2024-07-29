let users=[
    {'id':201,'name':"rahul",'sal':45000},
    {'id':202,'name':"rohi",'sal':450000},
    {'id':203,'name':"nithin",'sal':55000}
]
//for-of loop
for (const user of users) {
    console.log(user)
    console.log(user.id)
    console.log(user.name)
    console.log(user.sal)
}
// // for loop
for (let index = 0; index < users.length; index++) {
    console.log(users[index]);
    console.log(users[index].id);
    
}
// // while loop
index=0
while (index<users.length) {
    console.log(users[index])
    index++
}
// //do while loop
index=0;
do {
    console.log(users[index])
    index++
} while (index<users.length);