function checkNumber(number) {
    try {
        if (typeof number !== 'number' || number < 0) {
            throw new Error(`Ошибка: это строка, либо число меньше нуля`)
        }
        else {
            console.log(number * number);
        }
    } catch (error) {
        console.log(error.message);
    }
}

checkNumber(-12);