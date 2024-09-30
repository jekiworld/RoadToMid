// Прототипное наследование

const user = {
    name: "Alice",
    age: 18,
    lvl: 1,
    coins: 0,
};

const admin = {
    isAdmin: true,
};

const admin2 = {
    isAdmin: true,
    __proto__: user,
}

admin.__proto__ = user;

console.log(admin.name)
console.log(admin2.name)