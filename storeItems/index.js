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
            description: "Consigue esta araña gelatinosa, excelente para decorar tus islas de Halloween!",
            price: 2000,
            coinType: "gold",
            image: "arana.png",
        },
        {
            id: 2,
            name: "Egg Bohemio",
            description: "Consigue este increible huevo artista de pascua!",
            price: 5000,
            coinType: "gold",
            image: "bohemio_by_ariel.png",
        },
        {
            id: 3,
            name: "Coldman",
            description: "Consigue este asombroso hombre de hielo!",
            price: 2500,
            coinType: "gold",
            image: "coldman_by_ariel.png",
        },
        {
            id: 4,
            name: "Egg Nuwa",
            description: "Consigue este huevo bañado en bronce y con una increible estrella!",
            price: 8000,
            coinType: "silver",
            image: "nuwa_by_ariel.png",
        },
        {
            id: 5,
            name: "Octopus",
            description: "Consigue este tierno y dulce pulpo, capaz de conmover a todo le que lo vea!",
            price: 3000,
            coinType: "gold",
            image: "pulpo_high_quality_by_ariel.png",
        },
    ],
}


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

    //console.log(items.item[i].name);
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


    //BACKEND
    itemDisplay.setArgs(idItem,items.item[idItem].name,items.item[idItem].price,items.item[idItem].coinType);
}

function buyItem(itemId, user){

}