var containsDuplicate = function (nums) {
    const a = new Set(nums);
    if(a.size !== nums.length){
        console.log("true")
        console.log(a);
        console.log(nums);
        console.log(a.size);
        console.log(nums.length);

        return true;        
    }
    console.log("fasle")
    return false;
};

containsDuplicate([1,2,3,4]);