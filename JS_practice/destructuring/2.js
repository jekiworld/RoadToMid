// Объект с данными
const user = {
    name: 'Alice',
    age: 25,
    country: 'USA'
};

// Деструктуризация
const { name, age, country } = user;

console.log(name);    // "Alice"
console.log(age);     // 25
console.log(country); // "USA"
