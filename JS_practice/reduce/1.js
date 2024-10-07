const array = [1, 2, 3, 4, 5];

array.reduce((accumulator, currentValue, index, array) => {
    return accumulator + currentValue;
}, 0)

//1) 0 + 1 = 1  accumulator + currentValue
//2) 1 + 2 = 3
// ...

 
