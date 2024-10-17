var isPalindrome = function(s) {
    let word = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "").split('');
    console.log(word);
    let left = 0;
    let right = word.length - 1;
    console.log(right);
    while(left < right){
        if(word[left] !== word[right]){
            console.log(false);
            return false;
        }
        left++;
        right--;
    }
    console.log(true);
    return true;
};

isPalindrome("race a car");
