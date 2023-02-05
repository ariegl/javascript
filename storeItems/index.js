
import { User } from "./modules/User.mjs";
import { ItemDisplay, loadItems, showItemInDisplay } from "./modules/ShowItemToUser.mjs";
import { buyItem } from "./modules/BuyItem.mjs";

//Es la vista cuando un usuario selecciona un objeto
let itemDisplay = new ItemDisplay(null,null,null);

//c - Container ; cItems - container Items;

loadItems();

window.addEventListener("load",function(){
    const username = prompt("Ingresa tu nombre de usuario","Ariel");
    const user = new User(username,25000,15000);

    const item = document.querySelectorAll(".item");
    const btnBuy = document.querySelector("#btnBuy");

    item.forEach(element => {
        element.addEventListener("click",(e) => {


            /*QUITAMOS EL EFECTO SELECCIONADO AL ITEM ANTERIOR*/
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

            showItemInDisplay(itemDisplay,id[1]);
        });
    });

    btnBuy.addEventListener("click",function(){
        buyItem(user,itemDisplay);
        console.log(user.getMyItems());
    })

});
