import { items } from "./InfoItems.mjs";


/*PODEMOS CREAR UN OBJETO (POO), E IR ACTUALIZANDO 
EL ARTICULO QUE EL USUARIO ESTA MIRANDO*/
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


//CARGA TODOS LOS OBJETOS REGISTRADOS EN EL ARREGLO PRINCIPAL 
//Y LOS PONE EN EL CONTENEDOR DE ITEMS
function loadItems(){
    
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

}

/*SE ENCARGA DE MOSTRAR AL USUARIO EL ITEM 
QUE HA SELECCIONADO PARA VER SUS CARACTERISTICAS*/
function showItemInDisplay(itemDisplay,itemId){
    //CATEGORIAS DISPONIBLES
    const itemCategoryClass = ["Normal","Rare","Muyrare","Casiunico","Unico"];

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


    //BADGE CON LA CATEGORIA DEL OBJETO
    const itemType = document.querySelector("#displayItemType");

    itemCategoryClass.forEach(element => {
        if (itemType.classList.contains(`type${element}`)){
            itemType.classList.remove(`type${element}`);
        }
    })

    itemType.innerHTML = items.item[idItem].itemType;
    itemType.classList.add(`type${items.item[idItem].itemType.replace(" ","")}`);



    const infoItem = document.querySelector("#displayInfoItem");
    infoItem.innerHTML = items.item[idItem].description;

    const alertNotificationBuy = document.querySelector("#alertNotificationBuy");
    alertNotificationBuy.classList.contains("invisible") ? true : alertNotificationBuy.classList.add("invisible");


    //VISIBLE POR PRIMERA VEZ
    if (titleItem.classList.contains("invisible")){
        titleItem.classList.remove("invisible");
        itemType.classList.remove("invisible");
        infoItem.classList.remove("invisible");
    }

    //BACKEND
    //PASAMOS LOS VALORES NECESARIO PARA CUANDO SE REALICE UNA COMPRA
    itemDisplay.setArgs(idItem,items.item[idItem].name,items.item[idItem].price,items.item[idItem].coinType);
}

export { ItemDisplay, loadItems, showItemInDisplay };