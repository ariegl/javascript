class Observable {
    constructor() {
        this.observadores = [];
    }

    addObserver(observer) {
        this.observadores.push(observer);
    }

    delObserver(observer) {
        this.observadores = this.observadores.filter((obs) => obs !== observer);
    }

    updateObservers(message) {
        this.observadores.forEach((observer) => observer.update(message));
    }
}

class Observer {
    update(message) {
        console.log("Received message: "+message);
    }
}

const sujeto = new Observable();
const observador1 = new Observer();
const observador2 = new Observer();

sujeto.addObserver(observador1);
sujeto.addObserver(observador2);

sujeto.updateObservers("Hello observers!");
sujeto.delObserver(observador1);
sujeto.updateObservers("Message for observer 2");