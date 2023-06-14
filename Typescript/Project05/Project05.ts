/* TYPE FROM VALUE TYPEOF */

const address = {
    planet: "Earth",
    country: "Mexico"
}

type Address = typeof address;

const secondAddress:Address = {
    planet: "Mars",
    country: "ASDJKL"
}