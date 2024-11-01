var dailyTemperatures = function (temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];

    for(let i = 0; i < temperatures.length; i++) {
        while (stack.length !== 0 && stack[stack.length - 1][0] < temperatures[i]) {
            let [prevVal, prevInd] = stack.pop();
            result[prevInd] = i - prevInd; 
        }
        stack.push([temperatures[i], i]);
    }

    console.log(result);
    return result;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);
