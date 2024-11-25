var findDifference = function(nums1, nums2) {
   let res1 = [];
   let res2 = []; 
   let result = [res1, res2];
   for(let i = 0; i < nums1.length; i++){
    if(!nums2.includes(nums1[i] && !res1.includes(nums1[i]))){
        res1.push(nums1[i]);
    }
   }

   for(let j = 0; j < nums2.length; j++){
    if(!nums1.includes(nums2[j])){
        res2.push(nums2[j]);
    }
   }

   console.log(result);
}

findDifference([1,2,3], [2,4,6])