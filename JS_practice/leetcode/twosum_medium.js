var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right){
        if(numbers[left] + numbers[right] === target){
            console.log(left, right);
            return left, right
        }
        else{
            console.log(right, left);
            right--;
            left++;
        }
    }
    console.log("nothing");
    return 0;
};

twoSum([2,7,11,15], 9);