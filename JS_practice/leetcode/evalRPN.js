var evalRPN = function (tokens) {
    let stack = [];
    for (let i = 0; i <= tokens.length - 1; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else if (tokens[i] === "+") {
            let first_digit = stack.pop();
            let second_digit = stack.pop();
            stack.push(second_digit + first_digit);
        } else if (tokens[i] === "-") {
            let first_digit = stack.pop();
            let second_digit = stack.pop();
            stack.push(second_digit - first_digit);
        } else if (tokens[i] === "*") {
            let first_digit = stack.pop();
            let second_digit = stack.pop();
            stack.push(second_digit * first_digit);
        } else if (tokens[i] === "/") {
            let first_digit = stack.pop();
            let second_digit = stack.pop();
            stack.push(second_digit / first_digit);
        }
    }
    console.log(stack[0]);
    return stack[0];
};

evalRPN(["2", "1", "+", "3", "*"])