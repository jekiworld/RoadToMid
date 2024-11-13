var calculate = function (s) {
    let stack = [];
    let currentNumber = 0;
    let operation = '+'; 
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (!isNaN(char) && char !== ' ') {
            currentNumber = currentNumber * 10 + parseInt(char);
        }

        if (isNaN(char) || i === s.length - 1) {
            if (operation === '+') {
                stack.push(currentNumber);
            } else if (operation === '-') {
                stack.push(-currentNumber);
            } else if (operation === '*') {
                stack.push(stack.pop() * currentNumber);
            } else if (operation === '/') {
                stack.push(Math.trunc(stack.pop() / currentNumber)); 
            }

            operation = char;
            currentNumber = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
};

console.log(calculate("3+2*2")); 