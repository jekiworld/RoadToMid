var getCommon = function(nums1, nums2) {
   

    let num1 = [...new Set(nums1)];
    let num2 = [...new Set(nums2)];
    let arr = [...num1, ...num2];
    arr.sort((a, b) => a - b); 
    console.log(arr);
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] == arr[i + 1]){
            return arr[i];
        }
    }

};
getCommon([1, 2, 3, 4], [2, 4, 5]);



