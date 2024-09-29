function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(`${this.name} издает звук`);
};

const dog = new Animal('Dog');
dog.speak();

