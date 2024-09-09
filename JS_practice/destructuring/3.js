const user = {
    name: 'Alice',
    age: 25
};

// Переименование переменных
const { name: userName, age: userAge } = user;

console.log(userName); // "Alice"
console.log(userAge);  // 25
