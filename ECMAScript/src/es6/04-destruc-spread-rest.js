// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);
console.log(b);

// Object destructuring
let user = {userName : 'Oscar', age : 34};
let {userName, age} = user;
console.log(userName, age);
let {nombre, edad} = user;  //Does not work 
console.log(nombre, edad);

// Spread
let person = {name:'Jorge', age:28};
let country = 'CO';

let data = {id: 1, ...person, country};
console.log(data);

// Rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
