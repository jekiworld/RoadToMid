var threeSum = function (nums) {
    nums.sort((a, b) => a - b); 
    let right = nums.length - 1;
    let left = 1;
    let z = 0;
    const res = [];

    while (left < right) {
        if(nums[z] + nums[left] + nums[right] < 0){
            left++;
            console.log(left);
            if(left === right - 1){
                z++;
            }
        }
        else if(nums[z] + nums[left] + nums[right] > 0){
            right--;
        }
        else if(nums[z] + nums[left] + nums[right] === 0){
            console.log([nums[z], nums[left], nums[right]]);
        }
    }
};


threeSum([-1, 0, 1, 2, -1, -4])