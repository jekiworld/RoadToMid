const input = document.getElementById('counter');

const buttons = document.querySelectorAll('.btn');

const weather = document.getElementById('weather');

const days = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
}

buttons.forEach(button => {
    button.addEventListener('click', function () {

        let int = parseFloat(input.value);

        if (button.value === '+') {
            int = int + 1;
        } else if (button.value === '-') {
            int = int - 1;
        } else if (button.value === 'clear') {
            int = 0;
        }

        if (int > 7 || int === 0) {
            int = 1;
        }

        input.value = int;



        weather.value = days[int] || '';


    })
})

