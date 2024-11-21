var findLengthOfShortestSubarray = function (arr) {
    let stack = [];
    let prev = 0;
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i]
        // если следующий элемент меньше предыдущего
        if (cur < prev) {
            stack.push(prev);
        }
        prev = cur;

    }
    console.log(stack);
    if (stack.length === 1) {
        console.log(0);
    } else {
        console.log(stack.length);
    }



};

findLengthOfShortestSubarray([1,2,3,10,4,2,3,5])