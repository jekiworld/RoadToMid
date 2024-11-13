var removeKdigits = function (num, k) {
    const stack = [];
    for (let i = 0; i < num.length; i++) {
        let digit = num[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    while (k > 0) {
        stack.pop();
        k--;
    }
    let result = stack.join('').replace(/^0+/, '');
    console.log(result);
    return result === '' ? '0' : result;
};

removeKdigits("1432219", 3)