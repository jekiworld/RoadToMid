// function Vehicle(type) {
//     this.type = type;
// }

// Vehicle.prototype.start = function() {
//     console.log(`${this.type} запускается.`);
// };

// function Car(brand) {
//     Vehicle.call(this, 'Автомобиль'); // Наследуем тип транспортного средства
//     this.brand = brand;
// }

// Car.prototype = Object.create(Vehicle.prototype);
// Car.prototype.constructor = Car;

// Car.prototype.drive = function() {
//     console.log(`${this.brand} едет.`);
// };

// const myCar = new Car('Toyota');
// myCar.start();  // "Автомобиль запускается."
// myCar.drive();  // "Toyota едет."
