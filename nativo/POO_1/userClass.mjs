class User {
    #name
    
    constructor(name, password) {
        this.#name = name;
        this._password = password;
    }

    #printName() {
        console.log("Username is:", this.#name);
    }

    PrintFromPrivateMethod() {
        this.#printName();
    }   
}

export default User;