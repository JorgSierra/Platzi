// getters and setters
class usuar {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const bebeloper = new usuar('Jorge', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);