class User {
    constructor(username,goldCoins,silverCoins) {
        this.username = username;
        this.goldCoins = goldCoins;
        this.silverCoins = silverCoins;
        this.myItems = [];
    }

    getMyItems(){
        return this.myItems;
    }

    setItem(item){
        this.myItems.push(item);
    }

    getUserCoins(){
        return [this.goldCoins,this.silverCoins];
    }

    getUserGoldCoins(){
        return this.goldCoins;
    }

    getUserSilverCoins(){
        return this.silverCoins;
    }

    setUserCoins(newGoldCoins,newSilverCoins){
        this.goldCoins = newGoldCoins;
        this.silverCoins = newSilverCoins;
    }

    addItemToBag(item){
        this.myItems.push(item);
    }
}

export {User};