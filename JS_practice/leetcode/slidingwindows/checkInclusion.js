// var isAnagram = function (str1, str2) {
//     if (str1.length !== str2.length) {
//         console.log(false)
//         return false
//     }

//     const charCount = new Map();

//     for (let char of str1) {
//         if (charCount.has(char)) {
//             charCount.set(char, charCount.get(char) + 1)
//         } else {
//             charCount.set(char, 1);
//         }
//     }

//     for (let char of str2) {
//         if (!charCount.has(char)) {
//             console.log(false)
//             return false;
//         }

//         const updatedCount = charCount.get(char) - 1;

//         if (updatedCount < 0) {
//             console.log(false)
//             return false;
//         }

//         charCount.set(char, updatedCount);
//     }
//     console.log(true);
//     return true;
// }


// var checkInclusion = function (s1, s2) {

//     for (let i = 0; i <= s2.length - s1.length; i++) {
//         const subs = s1.substring(i, i + s1.length);
//         console.log(subs);
//         if (isAnagram(s1, subs)) {
//             return true;
//         }
//     }
//     return false;
// };

// checkInclusion("asdasd", "asdasd");


// function len(s) {
//     console.log(s.length);
// }

// len("asd")

function arrayEqual(arr1, arr2){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}

function checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);

    const charCode = "a".charCodeAt();

    for (let char of s1) {
        s1Count[char.charCodeAt()-charCode]++;
    };

    for(let i = 0; i < s2.length; i++){
        s2Count[s2[i].charCodeAt()-charCode]++;

        if(i >= s1.length){
            s2Count[s2[i-s1.length].charCodeAt(0)-charCode]--
        }

        if(arrayEqual(s1Count, s2Count)){
            return true
        };
    }

    return false;

}


// Пример использования:
console.log(checkInclusion("ab", "eidbaooo")); // true





