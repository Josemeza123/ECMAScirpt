// declarando
class User {
};


// instancia de una clase
// const newUser = new User();

class user {
    // metodos
    greeting() {
        return 'Hello';
    }
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user {
    // Constructor
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return 'Hello';
    }
};

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const kiko = new user('david', 15);
console.log(kiko.uAge);
console.log(kiko.uAge=20);