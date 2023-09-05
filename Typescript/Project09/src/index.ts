import User from "./class/user";

let email: string = "ariel@gmail.com";

const user = new User("Ariel", "Flores", 24, email);

let getEmail: string = user.getEmail();

console.log("Email:",getEmail);

user.greeting();

export default user;