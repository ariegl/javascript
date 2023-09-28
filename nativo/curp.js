const preposiciones = ["DA", "DAS", "DAS", "DE", "DEL", "DER", "DI", "DIE", "DD", "EL", "LA", "LOS", "LAS", "LE", "LES", "MAC", "MC", "VAN", "VON", "Y"]; 
const vocales = ["A", "E", "I", "O", "U"]; 
const nombresIgnorar = ["JOSE","JOSÉ", "J", "J.", "MARIA","MARÍA", "MA.", "MA"]; 
const palabrasAltisonantes = ["BACA", "BAKA", "BUEI", "BUEY", "CACA", "CACO", "CAGA", "CAGO", "CAKA", "CAKO", "COGE", "COGI", "COJA", "COJE", "COJI", "COJO", "COLA", "CULO", "FALO", "FETO", "GETA", "GUEI", "GUEY", "JETA", "JOTO", "KACA", "KACO", "KAGA", "KAGO", "KAKA", "KAKO", "KOGE", "KOGI", "KOJA", "KOJE", "KOJI", "KOJO", "KOLA", "KULO", "LILO", "LOCA", "LOCO", "LOKA", "LOKO", "MAME", "MAMO", "MEAR", "MEAS", "MEON", "MIAR", "MION", "MOCO", "MOKO", "MULA", "MULO", "NACA", "NACO", "PEDA", "PEDO", "PENE", "PIPI", "PITO", "POPO", "PUTA", "PUTO", "QULO", "RATA", "ROBA", "ROBE", "ROBO", "RUIN", "SENO", "TETA", "VACA", "VAGA", "VAGO", "VAKA", "VUEI", "VUEY", "WUEI", "WUEY"];  
const entidades = ["AS","BC","BS","CC","CL","CM","CS","CH","DF","DG","GT","GR","HG","JC","MC","MN","MS","NT","NL","OC","PL","QT","QR","SP","SL","SR","TC","TS","TL","VZ","YN","ZS","NE"];
const convertMayus = ["name","firstLastName","secondLastName","stringCurp"];

function main() {
    
    
    let data = {
        name: 'ENRIQUE',
        firstLastName: 'PEÑA',
        email: 'as@gmail.com',
        password: 'Admin#2021',
        secondLastName: 'NIETO',
        emailVerification: 'as@gmail.com',
        passwordValidation: 'Admin#2021',
        birthday: '27/03/1999',
        stringCurp: 'PXNE990327HMCXTN06',
        street: '',
        interiorNumber: '',
        colony: '',
        location: '',
        postalCode: '228',
        references: '',
        gender: 'notSay',
        phoneNumber: '',
        alternateEmail: '',
        birthCertificate: [],
        INE: [],
        curp: [],
        documentAddress: []
      }
    
    
    let datosUsuario = {
        ...data
    }

    //CONVIERTE LOS DATOS A MAYUSCULAS
    for(dato in datosUsuario){
        typeof(datosUsuario[dato]) === "string" && convertMayus.includes(dato) ? (datosUsuario[dato] = datosUsuario[dato].toUpperCase()) : false;
    }

    let verification = {};
    datosUsuario?.stringCurp.length === 18 ? verification = generateCurp(datosUsuario) : false;

    if(verification?.validate?.allowed) {
        return valid = true;
    } else {
        //console.log(verification?.validate?.errors[0]);
        return valid = verification?.validate?.errors[0];
    }
    
}

function generateCurp(dataUser) {
    let step = "one"
    let generalFlag = true;
    let CURP  = []
    let used = {
        firstLastName: [],
        secondLastName: [],
        firstName: []
    }

    let validate = "";

    //ELIMINAMOS TODAS LAS PREPOSICIONES
    let resultName = preposicionDetect(dataUser.name);
    let resultFirstLastName = preposicionDetect(dataUser.firstLastName);
    let resultSecondLastName = preposicionDetect(dataUser.secondLastName);
    
    while(generalFlag) {       
        switch(step) { /*En base a las reglas para generar un CURP*/
            case "one": //PRIMERA LETRA DEL APELLIDO
                CURP.push(resultFirstLastName.substring(0,1));
                used.firstLastName.push(0);
                step = "two";
                break;
            case "two": //PRIMERA VOCAL DEL PRIMER APELLIDO
                let found = foundFirstVocal(dataUser.firstLastName);
                used.firstLastName.push(found.counter);
                CURP.push(found.vocal);
                step = "three";
                break;
            case "three": //PRIMERA LETRA SEGUNDO APELLIDO
                if(dataUser.secondLastName === "")
                    CURP.push("X");
                else
                    CURP.push(resultSecondLastName.substring(0,1));

                used.secondLastName.push(0);
                step = "four";
                break;
            case "four": //PRIMERA LETRA PRIMER NOMBRE !NO MARIA !NO JOSE
                CURP.push(validateName(resultName));
                used.firstName.push(0);
                step = "five";
                break;
            case "five": //FECHA DE NACIMIENTO
                let birthday = dataUser.birthday.split("/");
                CURP.push(birthday[2].substring(2,3));
                CURP.push(birthday[2].substring(3,4));
                CURP.push(birthday[1].substring(0,1));
                CURP.push(birthday[1].substring(1,2));
                CURP.push(birthday[0].substring(0,1));
                CURP.push(birthday[0].substring(1,2));
                step = "six";
                break;
            case "six": //SEXO DE LA PERSONA
                CURP.push(validateGenero(dataUser.stringCurp));
                step = "seven";
                break;
            case "seven": //ENTIDAD NACIMIENTO
                let entity = validateEntity(dataUser.stringCurp);
                CURP.push(entity.substring(0,1));
                CURP.push(entity.substring(1,2));
                step = "eight";
                break;
            case "eight": //CONSONANTE PRIMER APELLIDO
                CURP.push(foundNextConsonant(dataUser.firstLastName, used.firstLastName));
                step = "nine";
                break;
            case "nine": //CONSONANTE SEGUNDO APELLIDO
                CURP.push(foundNextConsonant(dataUser.secondLastName, used.secondLastName));
                step = "ten";
                break;
            case "ten": //CONSONANTE PRIMER NOMBRE
                CURP.push(foundNextConsonant(dataUser.name, used.firstName));
                step = "eleven";
                break;
            case "eleven": //HOMOCLAVE
                let homoclave = validateHomoclave(dataUser.stringCurp);
                CURP.push(homoclave[0]);
                CURP.push(homoclave[1]);
                step = "validateCurp";
                break;
            case "validateCurp":
                validate = validateCurp(CURP.join(""), dataUser.stringCurp, CURP);
                console.log("Allowed:",validate.allowed);
                console.log("errors:",validate.errors);
                console.log("message:",validate.message);
                console.log("Curp:",validate.curpFinal);
                step = "end";
                break;
        }

        step === "end" ? generalFlag = false : generalFlag = true;
    }

    return {CURP, validate};
}

function preposicionDetect(word) {
    let text = word;

    preposiciones.forEach(element => {
        if( (text.search(" "+element+" ") >= 0) || (text.search(element+" ") >= 0) ){
        text = text.replace(element,"");
        text = text.replace(/\s+/g, ' ');
        }
    })

    text = text.trim();
    return text;
}

function foundFirstVocal(word) {
    let counter = 0;
    let vocal = "";

    while(counter < word.length) {
        let letter = word.substring(counter,counter+1);

        if(vocales.includes(letter) && counter !== 0){
            vocal = letter;
            break;
        }

        counter ++;
    }

    return {vocal, counter};
}

function validateName(name) {
    let fullName = name.split(' ',2);
    let firstName = fullName[0];
    let secondName = fullName[1];

    let letter = "";

    if (!nombresIgnorar.includes(firstName) || secondName === undefined){
        letter = firstName.substring(0,1);
    } else {
        letter = secondName.substring(0,1);
    }

    return letter;
}

function validateGenero(curp) {
    let letter = "";

    curp.length === 18 ? (
        letter = curp.substring(10,11)
    ) : (letter = "X");

    if(letter !== "H" && letter !== "M") {
        letter = "X";
    }

    return letter;
}

function validateEntity(curp) {
    let entity = "";
    let valid = "";

    if (curp.length === 18) {
        entity = curp.substring(11,13); 
        if (!entidades.includes(entity)) return valid = "Entidad no aceptada";
    } else {
        entity = "XX";
    }

    return entity;
}

function foundNextConsonant(word, used) {
    let counter = 0;
    let consonantCounter = 0;
    let consonant = "";

    while(counter < word.length) {
        let letter = word.substring(counter, counter+1);

        if(!vocales.includes(letter) && !used.includes(counter)){
            consonant = letter;
            consonantCounter ++;

            break;
        }

        counter ++;
    }

    return consonant;
}

function validateHomoclave(curp) {
    let homoclave = [];

    if(curp.length === 18) {
        homoclave.push(curp.substring(16,17));
        homoclave.push(curp.substring(17,18));
    } else {
        homoclave.push("X");
        homoclave.push("X");
    }

    return homoclave;
}

function validateCurp(curpGenerate, inputCurp, arrayCurp) {
 
    let allowed = false;
    let errors = [];
    let message = "";
    let curpFinal = [];

    //console.log("INPUT:",inputCurp);

    curpFinal = validateWordsAllowed(curpGenerate);
    //console.log("FINAL:",curpFinal);

    if (palabrasAltisonantes.includes(inputCurp.substring(0,4))) {
        errors.push("No se admiten palabras altisonantes");
    }

    if (curpFinal != inputCurp) {
        errors.push("La curp no coincide con los datos ingresados");
    }

    //console.log("ERRORS",errors);

    /*VERIFICAMOS SI HUBO ALGUN ERROR*/
    if(errors.length === 0) {
        allowed = true;
        message = "Correcto";
    }

    return {message,allowed,errors,curpFinal};

    function validateWordsAllowed(curp) { //VALIDA QUE LA PALABRA FORMADA NO SEA GROSERIA
        let section = "";
        let found = "";
        section = curp.substring(0,4);

        //VERIFICAMOS SI COTIENE PALABRAS ALTISONANTES
        if(palabrasAltisonantes.includes(section)){
            let found = foundFirstVocal(section);
            arrayCurp[found.counter] = "X";
        }

        //VERIFICAMOS SI CONTIENE LETRAS Ñ
        found = foundSpecialCharacters(curpGenerate);

        if(found.found) {
            arrayCurp[found.counter] = "X"
        }

        return arrayCurp.join("");
    }

    function foundSpecialCharacters(word) { //VERIFICA SI LA CURP CONTIENE Ñ
        let counter = 0;
        let found = false;
    
        while(counter < word.length) {
            let letter = word.substring(counter,counter+1);
    
            if(letter.includes("Ñ")){
                found = true;
                break;
            }
    
            counter ++;
        }
    
        return {counter, found};
    }
}


main();