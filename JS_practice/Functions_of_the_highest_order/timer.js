function createTimer() {
    let time = 0;

    return function () {
        time++;
        console.log(`Прошло ${time} секунд`);
    };
}

const timer = createTimer();
setInterval(timer, 1000); // Каждую секунду выводит количество прошедших секунд
