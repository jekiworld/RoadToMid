function result(array){
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0){
            sum = sum + array[i];
        };
    };
    return sum;
}

console.log(result([1, 2, -3]));

