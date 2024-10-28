var isValid = function (s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if (pairs[char]) {
            if (stack.pop() !== pairs[char]) {
                console.log("false");
                return false;
            }
        }
    }

    console.log(stack.length === 0);
    return stack.length === 0;
};

isValid("((()))")