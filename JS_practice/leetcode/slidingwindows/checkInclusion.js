var isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) {
        console.log(false)
        return false
    }

    const charCount = new Map();

    for (let char of str1) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1)
        } else {
            charCount.set(char, 1);
        }
    }

    for(let char of str2){
        if(!charCount.has(char)){
            console.log(false)
            return false;
        }

        const updatedCount = charCount.get(char) - 1;

        if(updatedCount<0){
            console.log(false)
            return false;
        }

        charCount.set(char, updatedCount);
    }
    console.log(true);
    return true;
}


var checkInclusion = function(s1, s2) {
    for(let i = 0; i < s1.length; i++){
        
    }
};




