class User {
    constructor(username,goldCoins,silverCoins) {
        this.username = username;
        this.goldCoins = goldCoins;
        this.silverCoins = silverCoins;
        this.items = [];
    }

    getItems(){
        return this.items;
    }

    setItem(item){
        this.items.push(item);
    }

    getUserCoins(){
        return [this.goldCoins,this.silverCoins];
    }

    setUserCoins(newGoldCoins,newSilverCoins){
        this.goldCoins = newGoldCoins;
        this.silverCoins = newSilverCoins;
    }
}

class ItemDisplay {
    constructor(id,name,price,coinType){
        this.id = id;
        this.name = name;
        this.price = price;
        this.coinType = coinType;
    }

    getVals(){
        return [this.id,this.name,this.price,this.coinType];
    }

    getPrice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    getCoinType(){
        return this.coinType;
    }

    setArgs(id,name,price,coinType){
        this.id = id;
        this.name = name;
        this.price = price;
        this.coinType = coinType
    }

    setId(id){
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

    setPrice(price){
        this.price = price;
    }
}

let items = {
    item: [
        {
            id: 1,
            name: "Araña Gelatinosa",
            description: "Consigue esta araña gelatinosa, excelente para decorar tus islas de Halloween! 🕷️",
            price: 2000,
            coinType: "gold",
            image: "arana.png",
        },
        {
            id: 2,
            name: "Egg Bohemio",
            description: "Consigue este increible huevo artista de pascua! 🎨",
            price: 5000,
            coinType: "gold",
            image: "bohemio_by_ariel.png",
        },
        {
            id: 3,
            name: "Coldman",
            description: "Consigue este asombroso hombre de hielo y decora tus islas con un toque friolento! 🥶",
            price: 2500,
            coinType: "gold",
            image: "coldman_by_ariel.png",
        },
        {
            id: 4,
            name: "Egg Nuwa",
            description: "Consigue este increible huevo bañado en bronce y con una increible estrella! ⭐",
            price: 8000,
            coinType: "silver",
            image: "nuwa_by_ariel.png",
        },
        {
            id: 5,
            name: "Octopus",
            description: "Consigue este tierno y dulce pulpo, capaz de conmover a todo le que lo vea! 🐙",
            price: 3000,
            coinType: "gold",
            image: "pulpo_high_quality_by_ariel.png",
        },
        {
            id: 6,
            name: "Love Tree",
            description: "Consigue este arbol de sanvalentin que ademas funciona como un teletransportador! 💖",
            price: 1000,
            coinType: "gold",
            image: "lovetree.png",
        },
        {
            id: 7,
            name: "Egg Music Cholo",
            description: "Consigue este asombroso huevo reproductor de musica, cada uno contiene canciones diferentes! 🎵",
            price: 5000,
            coinType: "silver",
            image: "egg_music_cholo_by_ariel.png",
        },
        {
            id: 8,
            name: "Egg Music Jaguar",
            description: "Consigue este huevo reproductor de musica, cada uno contiene canciones diferentes!",
            price: 5000,
            coinType: "silver",
            image: "egg_music_jaguar_by_ariel.png",
        },
        {
            id: 9,
            name: "Ghost",
            description: "Consigue este increible fantasma y espanta a todo el que entre a tu isla! 👻",
            price: 1500,
            coinType: "gold",
            image: "ghost_1_by_ariel.png",
        },
        {
            id: 10,
            name: "Frankling Egg",
            description: "Consigue este increible huevo electromecanico que funciona como una bobina de tesla! ⚡",
            price: 8000,
            coinType: "gold",
            image: "FRANKLING_EGG_by_ariel.png",
        },
        {
            id: 11,
            name: "Sea Egg",
            description: "Consigue este increible huevo que se ha infestado de diferentes criaturas marinas durante todo es tiempo! 🌊",
            price: 5000,
            coinType: "gold",
            image: "sea_egg_by_ariel.png",
        },
        {
            id: 12,
            name: "Dino Lee",
            description: "Consigue este increible dinosaurio que ademas es un experto en las artes marciales! 🦖",
            price: 3000,
            coinType: "gold",
            image: "DinoLee_by_ariel.png",
        },
        {
            id: 13,
            name: "Egg Dissey",
            description: "Consigue este increible huevo a punto de convertirse! 🐥",
            price: 10000,
            coinType: "gold",
            image: "Egg_dissey_by_ariel.png",
        },
        {
            id: 14,
            name: "Raregalo",
            description: "Consigue este increible regalo, abrelo y mira que contiene, puedes encontrar hasta 5 objetos raros! 🎁",
            price: 7000,
            coinType: "gold",
            image: "Raregalo_by_ariel.png",
        },
    ],
}

//Es la vista cuando un usuario selecciona un objeto
let itemDisplay = new ItemDisplay(null,null,null);

//c - Container ; cItems - container Items;
const cItems = document.querySelector("#itemsMain");

for(let i = 0; i<items.item.length; i++){
    const cNewItem = document.createElement("div");
    cNewItem.id = `itemCatalog-${items.item[i].id}`;
    cNewItem.className = "item centerAll";

    const newImg = new Image();
    newImg.className = "imgItem";
    newImg.src = `./img/${items.item[i].image}`;
    newImg.alt = items.item[i].name;
    newImg.title = items.item[i].name;

    cNewItem.appendChild(newImg);
    cItems.appendChild(cNewItem);
}


window.addEventListener("load",function(){
    const username = prompt("Ingresa tu nombre de usuario","Ariel");

    const user = new User(username,25000,15000);

    const item = document.querySelectorAll(".item");

    const btnBuy = document.querySelector("#btnBuy");

    item.forEach(element => {
        element.addEventListener("click",(e) => {

            const itemActive = document.querySelectorAll(".itemNow");

            itemActive.forEach(element => {
                element.classList.remove("itemNow");
            });


            let id = 0;

            if(e.target.className == "imgItem"){
                
                const parent = e.target.parentNode;
                id = parent.id.split("-");
                parent.className = parent.className + " " + "itemNow";

            }else {
                id = e.target.id.split("-");
                e.target.className += " itemNow" ;
            }

            showItem(id[1]);
        });
    });

    btnBuy.addEventListener("click",function(){
        const credits = user.getUserCoins();
        const goldCoins = credits[0];
        const silverCoins = credits[1];

        let compra = false;

        if(itemDisplay.getCoinType() == "gold"){
            if(goldCoins < itemDisplay.getPrice()){
                alert("No te alcanza papi");
            }else{
                alert("Has comprado con oro " + itemDisplay.getName());
                compra = true;
            }
        }else{
            if(silverCoins < itemDisplay.getPrice()){
                alert("Tas pobre mijo");
            }else{
                alert("Has comprado " + itemDisplay.getName());
                compra = true;

            }
        }


        //ACTUALIZAMOS LOS CREDITOS DEL USUARIO
        if(compra){
            if(itemDisplay.getCoinType() == "gold"){
                let newGoldCoins = goldCoins - itemDisplay.getPrice();
                user.setUserCoins(newGoldCoins,silverCoins);
            }else {
                let newSilverCoins = silverCoins - itemDisplay.getPrice();
                user.setUserCoins(goldCoins,newSilverCoins);
            }
        }


        alert(goldCoins+" : "+silverCoins);
    })

});

function showItem(itemId){

    const idItem = itemId - 1;

    //FRONT VIEW
    let imgItemSelected = document.querySelector("#itemSelected");
    imgItemSelected.src = `./img/${items.item[idItem].image}`;

    const lblPrice = document.querySelector("#lblPrice");
    lblPrice.innerHTML = items.item[idItem].price;

    const mainLblPrice = document.querySelector("#mainLblPrice");

    mainLblPrice.classList.contains("bg-yellow-300") ? mainLblPrice.classList.remove("bg-yellow-300") : false;
    mainLblPrice.classList.contains("bg-gray-400") ? mainLblPrice.classList.remove("bg-gray-400") : false;

    items.item[idItem].coinType == "gold" ? mainLblPrice.classList.add("bg-yellow-300") : mainLblPrice.classList.add("bg-gray-400");

    const titleItem = document.querySelector("#displayItemName");
    titleItem.innerHTML = items.item[idItem].name;

    if (titleItem.classList.contains("invisible")){
        titleItem.classList.remove("invisible");
    }

    const infoItem = document.querySelector("#displayInfoItem");
    infoItem.innerHTML = items.item[idItem].description;

    if (infoItem.classList.contains("invisible")){
        infoItem.classList.remove("invisible");
    }

    //BACKEND
    //PASAMOS LOS VALORES NECESARIO PARA CUANDO SE REALICE UNA COMPRA
    itemDisplay.setArgs(idItem,items.item[idItem].name,items.item[idItem].price,items.item[idItem].coinType);
}

function buyItem(itemId, user){

}