try {
    console.log("Открываем соединение");
    // код, который может вызвать ошибку
} catch (error) {
    console.log("Произошла ошибка:", error.message);
} finally {
    console.log("Закрываем соединение"); // Выполнится в любом случае
}
