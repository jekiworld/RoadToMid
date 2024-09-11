const input = document.getElementById('display');

const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const value = button.value;

        if (value === 'Clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            input.value = '';
        }
        else if (!isNaN(value)) {
            currentInput = currentInput + value;
            input.value = currentInput;
        } else if (value === '+' || value === '-' || value === '/' || value === 'x') {
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = value;
            }
        }
        else if (value === '=') {
            if (previousInput !== '' && currentInput !== '') {
                let result;

                const num1 = parseFloat(previousInput);
                const num2 = parseFloat(currentInput);

                switch (operator) {
                    case '+':
                        result = num1 + num2;
                        break;

                    case '-':
                        result = num1 - num2;
                        break;

                    case '/':
                        result = num1 / num2;
                        break;

                    case 'x':
                        result = num1 * num2;
                        break;
                };

                input.value = result;
                previousInput = '';
                currentInput = '';
                operator = '';
            }
        }

    })
})