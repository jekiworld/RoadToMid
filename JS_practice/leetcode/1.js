var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(i, j);
                return [i, j];
            }
        }
    }
};

twoSum(([3, 2, 4]), 6)