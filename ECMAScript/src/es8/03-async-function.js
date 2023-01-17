const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const aux = await fnAsync();
    console.log(aux);
    console.log("Hola mundito!");
}

console.log('Before');
anotherFn();
console.log('After');