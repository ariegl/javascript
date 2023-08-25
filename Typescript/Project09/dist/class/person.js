"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greeting() {
        console.log(`Hola mi nombre es ${this.firstName} y tengo ${this.age} años`);
    }
}
exports.default = Person;
