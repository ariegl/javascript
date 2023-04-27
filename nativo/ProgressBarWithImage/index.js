let progressbar = document.querySelector("#progressbar");
let imgElement = document.getElementById("imagen");
var imagesArray = [];

const start = async () => {
    for(let count = 1; count <= 30; count++) {
        await loadImage();
    }

    console.log("TERMINADO");
}

/*
SI LA IMAGEN NO ES SUFICIENTEMENTE PESADA NO FUNCIONARA POR QUE NO FRAGMENTA LA IMAGEN
img.addEventListener('progress', function(event){
    let bytes = event.total;
    let loaded = event.loaded;
    let percent = Math.round((loaded/bytes) * 100);

    console.log("TOTAL DE BYTES:",bytes);
    console.log("CARGADO:",loaded);
    console.log("PORCENTAJE:",percent);
});
*/

const loadImage = () => {

    return new Promise(async (resolve,reject) => {
        let img = new Image();

        await setTimeout(() => {
            img.src = "./image.jpg";
        },10);
        

        img.onload = () => {
            imagesArray.push(img);
            console.log("CARGADO");
            imgElement.setAttribute("src",img.src);
            progressbar.style.width = "100%";
            setTimeout(() => {
                progressbar.style.width = "0%";
                resolve();
            }, 50);
        }
    })
}

start();