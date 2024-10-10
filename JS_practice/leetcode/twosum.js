function Maps(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = target - nums[i];

        if (map.has(num)) {
            console.log([map.get(num), i])
            return [map.get(num), i];
            
        }

        map.set(nums[i], i);
    }

    return []; 
}

Maps([2, 7, 11, 15], 9);