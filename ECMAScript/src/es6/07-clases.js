// Declarar
class User {

};
// Instanciar
const newUser = new User();

class user {
    greeting(){
        return 'Hello';
    }
};

const newuser = new user();
console.log(newuser.greeting());


// Constructor
class usuario {
    constructor() {
        console.log('Nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}

const david = new usuario();

// this - elemento padre que lo contiene
class userito {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const ana = new userito('Ana');
console.log(ana.greeting());

// getters and setters
class usuar {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new usuar('Jorge', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);