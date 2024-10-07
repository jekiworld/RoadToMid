function createMultiplier(factor){
    return function(num){
        return num * factor;
    }
}

const multiplyBy5 = createMultiplier(5);
console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(3));  // 15

const multiplyBy10 = createMultiplier(10);
console.log(multiplyBy10(10)); // 100