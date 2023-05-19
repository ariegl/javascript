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
    #specs;
    #initialize;
    #killed;

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
        const maxLife = 20;
        const minLife = 7;
        this.#specs = {
            atack: Math.floor((Math.random() * 10) + 1),
            def: Math.floor((Math.random() * 10) + 1),
            life: Math.floor((Math.random() * (maxLife - minLife)) + minLife)
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

    isKilled() {
        return this.#killed;
    }

}

class Cat extends animal {
    #habilidades;

    constructor(name) {
        super(name);
        this.generateSkills();
    }

    greeting() {
        console.log(`${this.name} say: Miauuu...`);    
    }

    generateSkills() {
        this.#habilidades = {
            manazo: {
                damage: 1,
                time: 1200 //ms
            },
            colazo: {
                damage: 2,
                time: 1400 //ms
            }
        }
    }

}

class Duck extends animal {
    #habilidades;

    constructor(name) {
        super(name);
        this.generateSkills();
    }

    greeting() {
        console.log(`${this.name} say: Quak Quak...`);    
    }

    generateSkills() {
        this.#habilidades = {
            patadaVoladora: {
                damage: 3,
                time: 3000 //ms
            },
            plumazo: {
                damage: 1,
                time: 1500 //ms
            }
        }
    }
}

let cats = [];
let namesCats = ["Cat erpillar","Cat Atenea","Cat Phineas","Cat ssiopeia","Cat Aline","Cat Antonio","Cat Jona"];
let ducks = [];
let namesDucks = ["Duck Pedro","Duck Tobi","Duck Morgana","Duck cena","Duck zeus","Duck Zuckerberg","Duck Moises"];

const start = () => {
    let end = false;
    generate(5,"cat");
    generate(5,"duck");
    
    beginFight();

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

const beginFight = async() => {
    let randomBegin = Math.floor((Math.random() * 2) + 1);

    let randomCatSelected = Math.floor((Math.random() * cats.length));
    let randomDuckEnemy = Math.floor((Math.random() * ducks.length));

    let randomDuckSelected = Math.floor((Math.random() * ducks.length));
    let randomCatEnemy = Math.floor((Math.random() * cats.length));

    while (cats[randomCatSelected].isKilled() === true){
        randomCatSelected = Math.floor((Math.random() * cats.length));
    }

    while (ducks[randomDuckEnemy].isKilled() === true) {
        randomDuckEnemy = Math.floor((Math.random() * ducks.length));
    }

    while (ducks[randomDuckSelected].isKilled() === true) {
        randomDuckSelected = Math.floor((Math.random() * ducks.length));
    }

    while (cats[randomCatEnemy].isKilled() === true) {
        randomCatEnemy = Math.floor((Math.random() * cats.length));
    }

    const catSelected = cats[randomCatSelected];
    const duckEnemy = ducks[randomDuckEnemy];

    const duckSelected = ducks[randomDuckSelected];
    const catEnemy = cats[randomCatEnemy];

    console.log("catSelected:",catSelected);
    catSelected.showSpecs();

    console.log("duckEnemy:",duckEnemy);
    duckEnemy.showSpecs();
    
    console.log("duckSelected:",duckSelected);
    duckSelected.showSpecs();

    console.log("catEnemy:",catEnemy);
    catEnemy.showSpecs();

    attacked = await atack(catSelected,duckEnemy,duckSelected,catEnemy);
}

function atack(catSelected,duckEnemy,duckSelected,catEnemy) {

}



start();
