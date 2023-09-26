class Singletone {
    constructor() {
        if(!Singletone.instance) {
            //If there is no existing instance, create one.
            this.data = "I am the singletone instance";
            Singletone.instance = this;
        }

        return Singletone.instance;
    }

    getData() {
        return this.data;
    }

    setData(newData) {
        return this.data = newData;
    }
}

//usage
const singletoneInstance1 = new Singletone();
const singletoneInstance2 = new Singletone();

console.log(singletoneInstance1.getData());
singletoneInstance1.setData("Updated data");
console.log(singletoneInstance2.getData());