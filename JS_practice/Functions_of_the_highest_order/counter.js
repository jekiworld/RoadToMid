function createCounter() {
    let count = 0;
    return function increase (){
        count++;
        return count;
    }
}

const countOne = createCounter();
console.log(countOne()); // 1
console.log(countOne()); // 2