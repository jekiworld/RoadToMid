class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} издает звук`);
    }
}

const cat = new Animal('Кот');
cat.speak();

const dog = new Animal('Dog');
dog.speak();


class Rectabgle {
    constructor(heigh, width){
        this.heigh = heigh;
        this.width = width;
    }

    area(){
        console.log(this.width * this.heigh)
        console.log(this.width, this.heigh)
    }
}

let sqare1 = new Rectabgle(123, 123);
sqare1.area();