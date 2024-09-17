let a = 12345;
let i = 0;
const arr = [];



while(a > 0){
    arr.push(a%10);
    a = Math.floor(a/10);
}

console.log(arr);

let reversed = arr.reverse();

console.log(reversed);

// либо можно сделать так let digitsArray = number.toString().split('').map(Number);