class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greeting() : void {
        console.log(`Hola mi nombre es ${this.firstName} y tengo ${this.age} años`);
    }

}

export default Person;