function reverse(number) {
    let reversedNumber = parseInt(number.toString().split('').reverse().join(''));    
    console.log(reversedNumber);
}
reverse(123)



 //

 
let number = 12345;
let reversedNumber = 0;

while (number > 0) {
    let lastDigit = number % 10; // Получаем последнюю цифру числа
    reversedNumber = reversedNumber * 10 + lastDigit; // Добавляем её к новому числу
    number = Math.floor(number / 10); // Убираем последнюю цифру из исходного числа
}

console.log(reversedNumber);  // Вывод: 54321
