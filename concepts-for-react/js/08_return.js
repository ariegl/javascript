const allowUser = false;

//LA INSTRUCCION RETURN HARA QUE LLEGUELMOS AL FINAL DE LA FUNCION SIN SEGUIR EJECUTANDO EL RESTO.
function accessFunction() {
    if(allowUser) {
        return alert("Usuario permitido");
    }
    
    alert("Usuario no permitido");
}

accessFunction();