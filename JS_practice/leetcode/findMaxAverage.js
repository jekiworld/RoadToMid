var findMaxAverage = function (nums, k) {
    let windowSum = 0;

    if (nums.length < k) {
        return null;
    }

    for (let i = 0; i < k; i++) {
        windowSum = windowSum + nums[i];
    }

    let average = windowSum / k;

    for (let i = k; i < nums.length; i++) {
        windowSum = windowSum + nums[i] - nums[i - k];
        let average_second = windowSum / k;
        average = Math.max(average, average_second);
    }

    console.log(average);
    return average;

};

findMaxAverage([1, 12, -5, -6, 50, 3], 4)