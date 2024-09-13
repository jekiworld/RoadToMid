// Дано число. Выведите количество цифр в этом числе.

let a = 121233;

let cnt = 0;
while(a >= 10){
    a = a / 10;
    cnt++;
}

console.log(cnt+1);

//second method

let a = 121233;
let cnt = a.toString().length;
console.log(cnt);
