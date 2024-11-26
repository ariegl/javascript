let progressbar = document.querySelector("#progressbar");
let imgElement = document.getElementById("imagen");
var imagesArray = [];
let imgRoutes = ["https://images.pexels.com/photos/15295905/pexels-photo-15295905.jpeg", 
"https://images.pexels.com/photos/258117/pexels-photo-258117.jpeg",
"https://images.pexels.com/photos/372528/pexels-photo-372528.jpeg",
"https://images.pexels.com/photos/3071145/pexels-photo-3071145.jpeg",
"https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg",
"https://images.pexels.com/photos/372470/pexels-photo-372470.jpeg",
"https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg",
"https://images.pexels.com/photos/14195029/pexels-photo-14195029.jpeg",
"https://images.pexels.com/photos/7245363/pexels-photo-7245363.jpeg",
"https://images.pexels.com/photos/8461717/pexels-photo-8461717.jpeg",
"https://images.pexels.com/photos/13813085/pexels-photo-13813085.jpeg",
"https://images.pexels.com/photos/2554536/pexels-photo-2554536.jpeg",
"https://images.pexels.com/photos/14765852/pexels-photo-14765852.jpeg",
"https://images.pexels.com/photos/8207914/pexels-photo-8207914.jpeg",
"https://images.pexels.com/photos/7245332/pexels-photo-7245332.jpeg",
"https://images.pexels.com/photos/7245369/pexels-photo-7245369.jpeg"];

const start = async () => {
    for(let count = 1; count <= 5; count++) {
        await loadImage();
    }

    console.log("TERMINADO");
    console.log("IMAGENES CARGADAS:",imagesArray);
}

const imgLoad = () => {
    return new Promise((resolve,reject) => {
        let number = Math.floor(Math.random() * (imgRoutes.length - 1));
        let progress = 0;

        let request = new XMLHttpRequest();
        request.open("GET",imgRoutes[number]);
        request.responseType = "blob";

        request.onprogress = (pe) => {
            console.log("TOTAL:",pe.total);
            console.log("CARGADO:",pe.loaded);
            console.log("PORCENTAJE:",progress);
            progress = Math.floor((pe.loaded/pe.total)*100);
            progressbar.style.width = `${progress}%`;
        };

        request.onload = () => {
            if(request.status === 200) {
                progressbar.style.width = `100%`;
                resolve(request.response);
            } else {
                reject(new Error('Ha ocurrido un error' + request.statusText));
            }
        };

        request.onerror = () => {
            reject(new Error('Error de red'));
        };

        request.send();

    });
}

const loadImage = () => {

    return new Promise(async (resolve,reject) => {
        let img = new Image();
        img.crossOrigin = "";

        imgLoad().then(function (response) {
            let imageURL = window.URL.createObjectURL(response);
            img.src = imageURL;
            imgElement.src = imageURL;
            imagesArray.push(img);

            setTimeout(() => {
                progressbar.style.width = "0%";
            },2000);

            setTimeout(() => {
                imgElement.removeAttribute("src");
                resolve();
            }, 3000);
        })
    });
}

start();