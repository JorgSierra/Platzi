function* iterate(array){
    for (let value of array){
        yield value;
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Jorge', 'Laura']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* generator(){
    yield 1;
    yield 2;
    yield 3;
}

const gen = generator();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())