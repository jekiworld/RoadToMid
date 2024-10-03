var singleNumber = function(nums) {
   let hash = {};
   const targetValue = 1;

   for(const num of nums){
    if(!hash[num]){
        hash[num] = 1;
    }
    else{
        hash[num]++;
    }
   }
   const key = Object.keys(hash).find(k => hash[k] === targetValue);
   console.log(key);
};

singleNumber([4,1,2,1,2]);