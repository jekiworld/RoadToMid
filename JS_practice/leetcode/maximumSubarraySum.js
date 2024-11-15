
var maximumSubarraySum = function (nums, k) {
    if (nums.length === 0 || k <= 0 || k > nums.length) return 0;

    let maxSum = 0;
    let currentSum = 0;
    let windowStart = 0;
    let elementCount = new Map();

    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        let currentNum = nums[windowEnd];

        elementCount.set(currentNum, (elementCount.get(currentNum) || 0) + 1);
        currentSum += currentNum;

        if (windowEnd - windowStart + 1 > k) {
            let startNum = nums[windowStart];
            elementCount.set(startNum, elementCount.get(startNum) - 1);
            if (elementCount.get(startNum) === 0) {
                elementCount.delete(startNum);
            }
            currentSum -= startNum;
            windowStart++;
        }

        if (windowEnd - windowStart + 1 === k && elementCount.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};
