//Import User Generator
const userGenerator = require('./user-generator');
const readlineSync = require('readline-sync')

//Data generate
users = [];
quantity = readlineSync.question("How many users do you want to create? ");
for(let i = 0; i<quantity; i++){
    users.push(userGenerator(1))
}
//Data printer
console.log(users);