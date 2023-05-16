/*
    Concepts:
        -Inheritance
        -Super class
        -Child class
        -Polymorphism
*/

class animal {
    name;

    constructor(name = '') {
        this.name = name;
    }

    greeting() {
        console.log(`I'm animal`);
    }

    walk() {
        console.log(`${this.name} its walking`);
    }
}

class gato extends animal {

    constructor(name) {
        super(name);
    }

    greeting() {
        console.log(`${this.name} say: Miauuu...`);    
    }

}

class duck extends animal {

    constructor(name) {
        super(name);
    }

    greeting() {
        console.log(`${this.name} say: Quak Quak...`);    
    }

}

const MyCat = new gato("Murris");
MyCat.greeting();
MyCat.walk();

const MyDuck = new duck("Kraken Duck");
MyDuck.greeting();
MyDuck.walk();
