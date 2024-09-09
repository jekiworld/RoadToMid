//Дана строка. Выведите в консоль последний символ строки.

let a = "asd";   
console.log(a[a.length-1]);

console.log(a.slice(1));

console.log(a.slice(-1));


function con(){
    console.log(a);
}

setTimeout(con, 3000);