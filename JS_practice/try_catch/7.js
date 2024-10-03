// function sum(a, b) {
//     try {
//         if (typeof a !== 'number' || typeof b !== 'number') {
//             throw new Error(`ERROR: not number`);
//         }
//         console.log(a + b);
//         return a + b;
//     } catch (error) {
//         console.log("Ошибка:", error.message);    }
// }

// sum(-12, '3')


function plus(c, d){
    if(typeof c !== 'number' || typeof d !== 'number'){
        throw new Error(`ERROR: not number`);
    };
    return c + d;
}

try{
    console.log(plus(12, 3));
    console.log(plus("12", 3));
} catch(error) {
    console.log("Error", error.message);
}