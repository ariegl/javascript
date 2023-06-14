//type from function return

const createAddress = () => {
    return {
        planet: "Earth",
        country: "Mexico"
    }
}

type Address = ReturnType<typeof createAddress>

const address:Address = {
    planet:"Mars",
    country:"asdklj"
}