let users=["rahul","rohi","nithin"]
for (const i of users) {
    console.log(i)
    
}
// forr loop
for (let index = 0; index < users.length; index++) {
    console.log(users[index]) ; 
}
// while loop
index=0;
while (index<users.length) {
    console.log(users[index])
    index++
}
// do while loop
index=0;
do {
    console.log(users[index])
    index++
} while (index<users.length);