var maxArea = function(height) {
    let currentValue = 0;
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    while(left < right){
        currentValue = (right - left) * Math.min(height[left], height[right]);
        if(currentValue > result){
            result = currentValue;
        };

        if(height[right] > height[left]){
            left++;
        }else if(height[right] < height[left]){
            right--;
        } else {
            right--;  
        }

    }
    console.log(result);
};

maxArea([1,8,6,2,5,4,8,3,7]);