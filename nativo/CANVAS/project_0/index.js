/*
    - Dibujar rectangulos
    - Estilos de bordes
    - Borrar rectangulo
*/

const canvas = document.getElementById("canvas");

//EL NAVEGADOR SOPORTA CANVAS
if(canvas.getContext("2d")){
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(255,0,0)";
    ctx.fillRect (200,10,55,50);

    ctx.fillStyle = "rgba(0,0,200,0.5)";
    ctx.fillRect (230,30,55,50);

    ctx.fillStyle = "rgb(100,150,100)";
    ctx.fillRect(100,150,400,200);

    ctx.fillStyle = "rgba(0,0,200,0.5)";
    ctx.fillRect(200,200,100,100);
    ctx.clearRect(225,225,50,50);
    ctx.strokeRect(225,225,50,50);


    // Triángulo relleno
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
      
} else {
    //NAVEGADOR NO SOPORTADO
}

