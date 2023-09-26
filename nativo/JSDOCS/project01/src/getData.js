/**
 * Funcion para obtener la lista de usuarios
 * 
 * @returns {Array.<Object>} Un array de objetos con la lista de usuarios 
 */
async function getData() {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await req.json();
    
    return res;
}

/**
 * La lista de usuarios obtenida
 */
const users = getData();