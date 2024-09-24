function containsNearbyDuplicate(nums, k) {
    const indexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (indexMap[num] !== undefined) {
            if (i - indexMap[num] <= k) {
                return true;
            }
        }

        indexMap[num] = i;
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); 
