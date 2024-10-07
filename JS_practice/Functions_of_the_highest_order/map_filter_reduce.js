//map
const arr = [1, 2, 3, 4];
const newarr = arr.map(num => num * num);
console.log(newarr);

//filter
const arrf = [1, 2, 3, 4];
const newarrf = arrf.filter(num => num%2==0);
console.log(newarrf);

//reduce
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 