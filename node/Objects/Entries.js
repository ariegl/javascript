const myObject = {
    name: 'Ariel',
    age: 24,
    country: 'Mexico',
    city: 'Ensenada',
    cp: 22800
}

const ciudades = ["Ensenada","Mexicali","Monterrey","Sinaloa","Tijuana"];

const personas = {
    person1: {
        name: 'Batista',
        age: 24,
        country: 'Mexico',
        city: 'Ensenada',
        cp: 22800
    },
    person2: {
        name: 'Undertaker',
        age: 35,
        country: 'Mexico',
        city: 'Ensenada',
        cp: 22800
    },
    person3: {
        name: 'John cena',
        age: 44,
        country: 'Mexico',
        city: 'Monterrey',
        cp: 22700
    },
    person4: {
        name: 'Luis Miguel',
        age: 44,
        country: 'Mexico',
        city: 'Mexicali',
        cp: 22700
    },
    person5: {
        name: 'Michael Jackson',
        age: 44,
        country: 'Mexico',
        city: 'Sinaloa',
        cp: 22700
    },
    person6: {
        name: 'La pantera rosa',
        age: 44,
        country: 'Mexico',
        city: 'Tijuana',
        cp: 22700
    },
    person7: {
        name: 'Minion',
        age: 44,
        country: 'Mexico',
        city: 'Tijuana',
        cp: 22700
    }
}

const main = () => {
    testHasOwn();
}

const testEntries = () => {
    const entries = Object.entries(myObject);

    console.log("ITERATE WITH FOR");
    console.log("INICIA RECORRIDO");
    for(let [key,value] of entries){
        console.log("KEY:"+key+" VALUE:"+value);
    }

    console.log("ITERATE WITH FOR-EACH");
    entries.forEach(([key,value]) => {
        console.log("KEY:",key," VALUE:",value);
    })

    console.log("\n\n\nDATA:",entries);
}

const testHasOwn = () => {
    const founded = {
        Ensenada: [],
        Tijuana: [],
        Mexicali: [],
        Sinaloa: [],
        Monterrey: [],
    }

    for(let persona in personas){
        if(Object.hasOwn(personas[persona],'city')){
            founded[personas[persona].city].push(personas[persona].name);
        } else {
            console.log("LA PERSONA NO TIENE CODIGO POSTAL");
        }
    }

    console.log("LAS PERONSAS QUE VIVEN DONDE MISMO:",founded);

}

main();