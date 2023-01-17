const number = 1;
// Es este elemento nulo
let validate = number ?? 5;
console.log(validate);

const anotherNumber = null;
// Es este elemento nulo
validate = anotherNumber ?? 5;
console.log(validate);