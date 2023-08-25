"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class User extends person_1.default {
    constructor(firstName, lastName, age, email) {
        super(firstName, lastName, age);
        this.email = email;
    }
    printEmail() {
        console.log(`El usuario ${this.firstName} tiene el correo ${this.email}`);
    }
    getEmail() {
        return this.email;
    }
}
exports.default = User;
