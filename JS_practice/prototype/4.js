const animal = {
    eat: true,
};

const rabbit = Object.create(animal, {
    jump: {
        value: true,
    }
});

console.log(Object.getPrototypeOf(rabbit));