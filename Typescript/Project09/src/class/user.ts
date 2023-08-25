import Person from "./person";

class User extends Person {
    private email: string;

    constructor(firstName: string, lastName:string, age: number, email: string) {
        super(firstName, lastName, age);
        this.email = email;
    }

    printEmail() : void {
        console.log(`El usuario ${this.firstName} tiene el correo ${this.email}`);
    }

    getEmail() : string{
        return this.email;
    }
}

export default User;