function buyItem(user,itemDisplay){

    //VALIDAMOS SI EL USUARIO SELECCIONO ALGUN ITEM Y NO ES NULL
    function validateItem(){
        if (itemDisplay.getName() != null && itemDisplay.getPrice() != null) return true;
        else return false;
    }

    const valItem = validateItem();
    const alertNotificationBuy = document.querySelector("#alertNotificationBuy");

    //SI ENCONTRO EL OBJETO CONTINUAMOS CON LA COMPRA
    if (valItem) {
        
        const credits = user.getUserCoins();
        const goldCoins = credits[0];
        const silverCoins = credits[1];

        let compra = false;
        let message = "";

        if(itemDisplay.getCoinType() == "gold"){
            if(goldCoins < itemDisplay.getPrice()){
                //alert("No te alcanza papi");
            }else{
                //alert("Has comprado con oro " + itemDisplay.getName());
                compra = true;
            }
        }else{
            if(silverCoins < itemDisplay.getPrice()){
                //alert("Tas pobre mijo" + " gold:" + goldCoins + " silver:" + silverCoins);
                
            }else{
                //alert("Has comprado " + itemDisplay.getName());
                compra = true;
            }
        }


        //ACTUALIZAMOS LOS CREDITOS DEL USUARIO
        if(compra){
            alertNotificationBuy.classList.contains("alertDanger") ? alertNotificationBuy.classList.remove("alertDanger") : false;
            alertNotificationBuy.classList.contains("alertSuccess") ? true : alertNotificationBuy.classList.add("alertSuccess");


            user.addItemToBag(itemDisplay.getName());

            if(itemDisplay.getCoinType() == "gold"){
                let newGoldCoins = goldCoins - itemDisplay.getPrice();
                user.setUserCoins(newGoldCoins,silverCoins);
            }else {
                let newSilverCoins = silverCoins - itemDisplay.getPrice();
                user.setUserCoins(goldCoins,newSilverCoins);
            }

            message += ` Se ha realizado la compra de ${itemDisplay.getName()} por la cantidad de ${itemDisplay.getPrice()} monedas de ${itemDisplay.getCoinType()}
            Creditos de oro: ${user.getUserGoldCoins()}
            Creditos de plata: ${user.getUserSilverCoins()}`;
            //alert(user.getUserGoldCoins() + " : " + user.getUserSilverCoins());
        }else{
            alertNotificationBuy.classList.contains("alertSuccess") ? alertNotificationBuy.classList.remove("alertSuccess") : false;
            alertNotificationBuy.classList.contains("alertDanger") ? true : alertNotificationBuy.classList.add("alertDanger");
            message += ` Oh No. Imposible de realizar la compra porque no tienes suficientes creditos
            Creditos de oro: ${user.getUserGoldCoins()}
            Creditos de plata: ${user.getUserSilverCoins()}`;
        }

        alertNotificationBuy.textContent = message;
        alertNotificationBuy.classList.contains("invisible") ? alertNotificationBuy.classList.remove("invisible") : false;
    }else{

    }


}

export { buyItem };