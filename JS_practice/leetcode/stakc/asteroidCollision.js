/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        const currentAst = asteroids[i];

        if (stack.length === 0 || stack[stack.length - 1] < 0 || currentAst > 0) {
            stack.push(currentAst);
            continue;
        }

        while (stack.length > 0 && stack[stack.length - 1] > 0 && currentAst < 0) {
            const prevAst = stack[stack.length - 1];

            if (Math.abs(prevAst) < Math.abs(currentAst)) {
                stack.pop();
                continue; 
            } else if (Math.abs(prevAst) === Math.abs(currentAst)) {
                stack.pop(); // Уничтожаем верхний астероид
                currentAst = null; // Текущий астероид тоже уничтожается
                break; 
            } else {
                currentAst = null; // Текущий астероид уничтожается
                break;
            }
        }

        if (currentAst !== null) {
            stack.push(currentAst);
        }
    }
    console.log(stack);

    return stack;
};



asteroidCollision([8, -8])