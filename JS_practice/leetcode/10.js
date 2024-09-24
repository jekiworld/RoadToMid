var containsNearbyDuplicate = function (nums, k) {
    let first = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[i]) {
                first = nums[j];
            }
            else {
                first = nums[i];

            }
        }
    }
    console.log(first);
};
