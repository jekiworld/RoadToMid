class Vehicle {
    constructor(type){
        this.type = type;
    }

    start(){
        console.log(`${this.type} запускается`)
        return `${this.type} запускается`
    }

    end() {
        return `${this.type} останавливается`
    }
}

class Brand extends Vehicle{
    constructor(type, brand){
        super(type);
        this.brand = brand;
    }

    go(){
        const startMessage = this.start();
        return `${this.brand} едет`
    }
}

const Toyota = new Brand('Автомобиль', 'Тойота');
console.log(Toyota.go());