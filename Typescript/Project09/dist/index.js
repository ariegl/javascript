"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./class/user"));
let email = "ariel@gmail.com";
const user = new user_1.default("Ariel", "Flores", 24, email);
let getEmail = user.getEmail();
console.log("Email:", getEmail);
user.greeting();
