class Square {
    constructor() {
        this.size = Math.floor((Math.random() * 60) + 40);
        this.scale = (Math.random() * 1.5) + 0.5;
        this.color = this.generateColor();
        this.position = {
            x: Math.ceil((Math.random() * canvas.width - (this.size * this.scale)) + 10),
            y: Math.ceil((Math.random() * (canvas.height - (this.size * this.scale))+10))
        }
    }

    generateColor() {
        let hexSet = "0123456789ABCDEF";
        let finalHexString = "#";

        for(let i = 0; i < 6; i++){
            finalHexString += hexSet[Math.ceil(Math.random() * 15)];
        }

        return finalHexString
    }

    print() {
        ctx.fillStyle = `${this.color}`;
        ctx.fillRect(this.position.x, this.position.y, this.size * this.scale, this.size * this.scale);
    }
}

function generateSquares(count) {
    for(let i = 0; i < count; i++) {
        squareArray[i] = new Square();
    }
}

function printSquares() {
    console.log(squareArray);
}

function anim() {
    requestAnimationFrame(anim);

    ctx.fillStyle = "rgba(230,230,230,.5)";
    ctx.fillRect(0,0, canvas.width, canvas.height);

    squareArray.forEach((square) => square.print());
    console.log("animate");
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let squareArray = [];


generateSquares(25);
printSquares();

anim();