class Product{

    constructor(name, price){
        this.name = name;
        this.price = price
    }

    getInfo = () => {
        return `${this.name} - ${this.price}`
    }

}

const banan = new Product('banana', 1200);

console.log(banan.getInfo());