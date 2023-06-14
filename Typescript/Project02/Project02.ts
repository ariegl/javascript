/*OBJETOS*/

/*
    - TYPE ALIAS 
    - TEMPLATE UNION TYPES    
*/

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal";

type Hero = {
    readonly id?: HeroId
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScale
}

let hero:Hero = {
    name: "Akali",
    age: 26
}

function createHero(hero:Hero) : Hero {
    const {name,age} = hero;
    return {id: crypto.randomUUID() ,name, age, isActive:true}
}

const pyke = createHero({name: "pyke", age: 30});
pyke.powerScale = "galactic";

/* TEMPLATE UNION TYPES */
type HexadecimalColor = `#${string}`;
const color1:HexadecimalColor = "#000000";
const color2:HexadecimalColor = "#fff";