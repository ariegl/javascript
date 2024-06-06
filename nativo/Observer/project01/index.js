class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(element => element != observer);
    }

    notify(model) {
        this.observers.forEach((observer) => {
            observer.notify(model);
        })
    }


}

class TextSubject extends Subject {
    constructor() {
        super();
        this.text = "";
    }

    notify(text) {
        this.text = text;

        super.notify(this);
    }
}

class Observer_1 {
    notify(subject) {
        document.getElementById("observer_1").innerHTML = subject.text;
    }
}

class Observer_2 {
    notify(subject) {
        document.getElementById("observer_2").innerHTML = subject.text.length;
    }
}

class Observer_3 {
    notify(subject) {
        if(subject.text === "blue") {
            document.getElementById("observer_3").classList.add("bg-blue-300");
        }
    }
}

var textSubject = new TextSubject();
let observer_1 = new Observer_1();
let observer_2 = new Observer_2();
let observer_3 = new Observer_3();

textSubject.subscribe(observer_1);
textSubject.subscribe(observer_2);
textSubject.subscribe(observer_3);

document.getElementById("text").addEventListener("input", (event) => {
    textSubject.notify(event.target.value);
})