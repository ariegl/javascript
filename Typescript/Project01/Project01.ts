let nombre:string = "Ariel";
let edad:number = 24;
let active: boolean = false;

/*FUNCIONES TIPADAS*/
function printName({name, age} : {name:string, age:number}) {
    console.log(`Mi nombre es ${name} mi edad es ${age}`);
}

printName({name: nombre, age:edad});


/*FUNCIONES CON RETORNO */
function myReturnFunction({text} : {text:string}) : string {
    let newString = text + "New String";

    return newString;
}

myReturnFunction({text: "ASDASDASDASDASD"});

/*CallBack Arrow Function*/
const greeting = (text: string) => {
    console.log("Hi ,"+text);
}

const greetingFromFunc = (fn: (text: string) => void) => {
    fn("Ariel");
}

greetingFromFunc(greeting);

/*TIPAR ARROW FUNCTION*/
const sumar = (a: number, b:number) : number => {
    return a+b;
}

