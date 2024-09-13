// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

// function stringcheck(string) {
//     if (string.length > 1) {
//         console.log(string.slice(-2, -1));
//     } else {
//         console.log('string have only one symbol');
//     }
// } 

// stringcheck('asdsad')

function stringcheck(string) {
    if (string.length > 1) {
        console.log(string.charAt(string.length - 2)); // Предпоследний символ
    } else {
        console.log('String has only one symbol');
    }
}

stringcheck('asdlkaslkd a sdlkjas d'); // Ожидаемый результат: "d"
