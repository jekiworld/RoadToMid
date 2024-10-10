
var productExceptSelf = function (nums) {
    const n = nums.length;
    console.log(n)
    const result = new Array(n).fill(1);
    let left = 1;
    let right = 1;


    for (let i = 0; i < n; i++) {
        result[i] = left;
        left = left * nums[i];
        console.log(`${result[i]} = ${left}`)
        console.log(result);

    }

    console.log("второй подход:");


    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right = right * nums[i];
        console.log(result)
    }



    return result;
};




productExceptSelf([1, 2, 3, 4]);