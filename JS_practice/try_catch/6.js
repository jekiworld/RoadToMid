function parseUser(jsonString) {
    try {
        let user = JSON.parse(jsonString);
        console.log("Пользователь:", user);
    } catch (error) {
        console.log("Некорректный JSON:", error.message);
    }
}

parseUser('{"name": "John", "age": 30}'); // Корректный JSON
parseUser('{"name": "John", "age": }');   // Некорректный JSON
