/*OBJETOS*/

/*
    - TYPE ALIAS 
    - TEMPLATE UNION TYPES    
*/

type HeroId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale = "local" | "planetary" | "galactic" | "universal" | "multiversal";

type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

//INTERSECTION TYPES
type Hero = HeroBasicInfo & HeroProperties;

let hero:Hero = {
    name: "Akali",
    age: 26
}

function createHero(input:HeroBasicInfo) : Hero {
    const {name,age} = input;
    return {id: crypto.randomUUID() ,name, age, isActive:true}
}

const pyke = createHero({name: "pyke", age: 30});
pyke.powerScale = "galactic";

/* TEMPLATE UNION TYPES */
type HexadecimalColor = `#${string}`;
const color1:HexadecimalColor = "#000000";
const color2:HexadecimalColor = "#fff";