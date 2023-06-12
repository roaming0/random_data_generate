//Import Chance
const chance = require('chance');
const random_data = chance();

//User Generator
let UserGenerator = (times) => {
    let result = [];
    for(let i=0; i<times; i++){
        result.push({
            Name: random_data.name(),
            Age: random_data.age(),
            Email: random_data.email()
        })
    }
    return result;
}
module.exports = (UserGenerator);
