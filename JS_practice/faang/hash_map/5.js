const fruits = ['яблоко', 'банан', 'апельсин', 'яблоко', 'апельсин', 'яблоко'];

const fruitCount = {};

for(const fruit of fruits){
    if(fruitCount[fruit]){
        fruitCount[fruit]++;
        console.log(fruit)
    }else{
        fruitCount[fruit] = 1;
    }
}

console.log(fruitCount);