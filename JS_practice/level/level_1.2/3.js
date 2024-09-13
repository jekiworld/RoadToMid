//  Дано число. Выведите в консоль сумму первой и последней цифры этого числа. 

function first_last(number){
    let firstdigit = number.toString()[0];
    let lastdigit = number.toString().slice(-1);

// return firstdigit + lastdigit;

    let intfirst = +firstdigit;
    let intlast = +lastdigit;

    return intfirst + intlast;
}

console.log(first_last(23));


// second method

function first_last(number) {
    let lastdigit = number % 10; // Получаем последнюю цифру
    let firstdigit = Math.floor(number / Math.pow(10, Math.floor(Math.log10(number)))); // Первая цифра

    return firstdigit + lastdigit;
}

console.log(first_last(23)); // 5
