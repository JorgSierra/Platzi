async function* generator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = generator();
other.next().then(res => console.log(res));
other.next().then(res => console.log(res));
other.next().then(res => console.log(res));
console.log('Hello world!');


async function namesArray(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = namesArray(['Oscar', 'David', 'Ana']);
console.log('After');