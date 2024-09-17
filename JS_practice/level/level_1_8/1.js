const arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);  


/// либо можнг так


const newarr = Array(10).fill().map((_, index) => index + 1);

console.log(newarr); 