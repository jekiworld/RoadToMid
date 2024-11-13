var moveZeroes = function (nums) {
    let l = 0;
    let r = 1;
    while (r < nums.length) {
        if (nums[l] === 0 && nums[r] !== 0) {
            nums[l] = nums[r];
            nums[r] = 0;
            l++;
        }
        if (nums[l] !== 0) {
            l++
        }
        r++
    }
    console.log(nums);
    return nums;
};


moveZeroes([1, 0])