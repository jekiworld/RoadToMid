var maxSubArray = function (nums) {
    let currentSum = 0;
    let maxSum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        currentSum = nums[i] + currentSum;

        currentSum = Math.max(nums[i], currentSum);

        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
};
