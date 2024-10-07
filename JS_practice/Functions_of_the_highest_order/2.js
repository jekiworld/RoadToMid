function applyFunction(num, func) {
    return func(num);
}

const double = (n) => n * 2;
const triple = (n) => n * 3;

console.log(applyFunction(5, double)); 