const array = [1,2,3,4,5,6, [1,3,5,6, [6,7,8]]];

//flat
console.log(array);
console.log(array.flat(0));
console.log(array.flat(1));
console.log(array.flat(2));
console.log(array.flat(3));
console.log(array.flat(4));

//flatmap
const array2 = [1,2,3,4,5];
console.log(array2.map(v => [v, v * 2]));
console.log(array2.flatMap(v => [v, v * 2]));