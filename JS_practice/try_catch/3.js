function checkAge(age) {
    if (age < 18) {
        throw new Error("Возраст должен быть не меньше 18 лет");
    }
    return "Возраст принят";
}

try {
    console.log(checkAge(15)); // Ошибка
} catch (error) {
    console.log(error.message); // "Возраст должен быть не меньше 18 лет"
}
