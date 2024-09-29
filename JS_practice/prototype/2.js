function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(`${this.name} издает звук`);
};

function Dog(name, breed){
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
    console.log(`${this.name} лает `)
}

const beagle = new Dog('Biggle', 'Hound');
beagle.speak();
beagle.bark();