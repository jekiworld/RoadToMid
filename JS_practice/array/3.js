// проверка четное ли число в массиве

const arr = [1, 2 ,3, 4, 5, 6, 8];
const newarr = arr.map(num => {
    if(num % 2 === 0){
        return num;
    } else {
        return null;
    }
}).filter(num => num !== null)

console.log(newarr);