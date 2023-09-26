//Step 1 - define main class
class Product {
    constructor() {
        this.type = "";
        this.size = "";
        this.color = "";
    }
}

//Step 2 - Define builder class
class ProductBuilder {
    constructor() {
        this.product = new Product();
    }

    setType(type) {
        this.product.type = type;
        return this;
    }

    setSize(size) {
        this.product.size = size;
        return this;
    }

    setColor(color) {
        this.product.color = color;
        return this;
    }

    build() {
        return this.product;
    }
}

//Step 3 - Use builder for build product object
const productBuilder = new ProductBuilder();

const product = productBuilder.setType("shirt").setSize("M").setColor("Red").build();

console.log(product);
