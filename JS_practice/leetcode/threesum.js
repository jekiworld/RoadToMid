var threeSum = function (nums) {
    nums.sort((a, b) => a - b); 
    let right = nums.length - 1;
    let left = 1;
    let z = 0;
    const res = [];

    while (left < right) {
        if (nums[left] + nums[right] + nums[z] > 0) {
            left++;
            z++;
        } else if (nums[left] + nums[right] + nums[z] < 0) {
            right--;
        } else if (nums[left] + nums[right] + nums[z] === 0) {
            res.push([nums[left], nums[right], nums[z]]);
            console.log([nums[left], nums[right], nums[z]]);
        }
    }
};


threeSum([-1, 0, 1, 2, -1, -4])