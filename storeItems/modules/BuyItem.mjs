function buyItem(user,itemDisplay){
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
            alert("Tas pobre mijo" + " gold:" + goldCoins + " silver:" + silverCoins);
        }else{
            alert("Has comprado " + itemDisplay.getName());
            compra = true;
        }
    }


    //ACTUALIZAMOS LOS CREDITOS DEL USUARIO
    if(compra){

        user.addItemToBag(itemDisplay.getName());

        if(itemDisplay.getCoinType() == "gold"){
            let newGoldCoins = goldCoins - itemDisplay.getPrice();
            user.setUserCoins(newGoldCoins,silverCoins);
        }else {
            let newSilverCoins = silverCoins - itemDisplay.getPrice();
            user.setUserCoins(goldCoins,newSilverCoins);
        }

        alert(user.getUserGoldCoins() + " : " + user.getUserSilverCoins());
    }

}

export { buyItem };