
function sum(array){
    pow = 0;
    result = 0;
    for(let i = 0; i < array.length; i++){
        pow = array[i] * array[i];
        result = result + pow;
    }
    console.log(result);
    return result;
}

sum([1, 3, 5, 6, 7]);