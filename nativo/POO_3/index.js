/*
    Concepts:
        -Inheritance
        -Super class
        -Child class
        -Polymorphism
        -Encapsulation
        -Private methods
*/

class animal {
    name;
    #specs
    #initialize
    #killed

    constructor(name = '', initialize) {
        this.name = name;
        this.#initialize = false;
        this.#killed = false;
        this.initialize();
    }

    greeting() {
        console.log(`I'm animal`);
    }

    walk() {
        console.log(`${this.name} its walking`);
    }

    #generateSpecs() {
        this.#specs = {
            atack: Math.floor((Math.random() * 10) + 1),
            def: Math.floor((Math.random() * 10) + 1),
            life: Math.floor((Math.random() * 10) + 1)
        }
        this.#initialize = true;
    }

    initialize() {
        this.#generateSpecs();
    }

    status() {
        console.log("I'm " + this.#initialize);
    }

    showSpecs() {
        console.log(`${this.name} specs: ${JSON.stringify(this.#specs)}`);
    }
}

class Cat extends animal {

    constructor(name) {
        super(name);
    }

    greeting() {
        console.log(`${this.name} say: Miauuu...`);    
    }

}

class Duck extends animal {

    constructor(name) {
        super(name);
    }

    greeting() {
        console.log(`${this.name} say: Quak Quak...`);    
    }
}

let cats = [];
let namesCats = ["Cat erpillar","Cat Atenea","Cat Phineas","Cat ssiopeia","Cat Aline","Cat Antonio","Cat Jona"];
let ducks = [];
let namesDucks = ["Duck Pedro","Duck Tobi","Duck Morgana","Duck cena","Duck zeus","Duck Zuckerberg","Duck Moises"];

const start = () => {
    generate(5,"cat");
    generate(5,"duck");

    cats[0].greeting();
    cats[0].showSpecs();
}

const generate = (amount, type) => {
    let counterCats = 0;
    let counterDucks = 0;

    for(let count=1; count<=amount; count++) {
        let randomNumber = 0;

        if(type === "cat") {
            randomNumber = Math.floor(Math.random() * namesCats.length);
            cats.push(new Cat(`${namesCats[randomNumber]}`))
            counterCats++;
        } 
        else {
            randomNumber = Math.floor(Math.random() * namesDucks.length);
            ducks.push(new Duck(`${namesDucks[randomNumber]}`));
            counterDucks++;
        }
    }

    type === "cat" ? console.log(`Se han generado ${counterCats} gatos`) : console.log(`Se han generado ${counterDucks} patos`);
}

start();
