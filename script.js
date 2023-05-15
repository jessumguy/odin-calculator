// Simple Math operation functions (Add, Subtract, Multiple, Divide)

let add = (num1, num2) => {
    return num1 + num2;
}

let subtract = (num1, num2) => {
    return num1 - num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return (num1 / num2);
}


// Operate Function - Takes an operation and two numbers, and then calls one of the above functions on the numbers.

let operate = (operation, num1, num2) => {
    if (operation === "+") return add(num1, num2);
    if (operation === "−") return subtract(num1, num2)
    if (operation === "×") return multiply(num1, num2)
    if (operation === "÷") return divide(num1, num2)
}


// console.log(add(1, 2)); //3
// console.log(subtract(2, 4)); //-2
// console.log(multiply(5, 6)); //30
// console.log(divide(10, 2)); //5

// console.log(operate("+", 4, 5)); //9
// console.log(operate("-", 4, 5)); //-1
// console.log(operate("*", 4, 5)); //20
// console.log(operate("÷", 4, 5)); //0.8


// Add querySelector to all buttons 
const buttons = document.querySelectorAll('button');
console.log(buttons);

// Add querySelector to display div
const mainDisplayOutput = document.querySelector('#display');
const displayOutputConsole = document.querySelector('#console-display');

// Populate display when button is selected
let userInput = 0;
let savedValue = 0;
let operateValue = 0;
let operateConditions = [
    'divide', 
    'multiply', 
    'subtract', 
    'add'
];
let savedOperator = null;
let calculatedValue = 0;
let resetSavedValue = false;
let initialValue = 0
mainDisplayOutput.textContent = initialValue;

buttons.forEach(button => button.addEventListener('click', (e) => {
    userInput = e.target.value;
    
    //Conditions for values to be displayed in the Output
    const numberDataType = e.target.dataset.type     
    console.log(numberDataType)

    if (numberDataType === 'number' && savedValue === 0) {
        savedValue = userInput;
    } else if (savedValue === 0 && userInput == '.') {
        savedValue = initialValue + '.';
    } else if (numberDataType === 'number' && savedValue !== 0) {
        savedValue = savedValue + userInput;
    } 
    mainDisplayOutput.textContent = savedValue;

    //Conditional matching - when operator buttons are selected, save the operateValue for use in calculation
    let validOperateConditions = operateConditions.some((operator) => {

        if (operator === userInput && resetSavedValue === false) {
            operateValue = savedValue;
        } else {
            return false;
        }
    });
    console.log(`validOperateCondition ?: ${validOperateConditions}`);

    // Switch statement to calculate values when operators are inputted
    let operator = e.target.textContent;

    switch (userInput) {
        case '.':
            if (savedValue.includes(".")) {
                savedValue = savedValue
            } else {
                savedValue = savedValue + '.';
                mainDisplayOutput.textContent = savedValue;
            }
            break;
        case 'CE':
            savedValue = savedValue.slice(0, -1);
            mainDisplayOutput.textContent = savedValue;
            break;
        case 'AC':
            savedValue = 0;
            calculatedValue = 0
            savedOperator = null;
            displayOutputConsole.textContent = null;
            mainDisplayOutput.textContent = 0;
            break;
        case 'divide':
            savedValue = 0;
            savedOperator = operator;
            displayOutputConsole.textContent = `${operateValue} ${operator}`;
            break;
        case 'multiply':
            savedValue = 0;
            savedOperator = operator;
            displayOutputConsole.textContent = `${operateValue} ${operator}`;
            break;
        break;
        case 'subtract':
            savedValue = 0;
            savedOperator = operator;
            displayOutputConsole.textContent = `${operateValue} ${operator}`;
            break;
        break;
        case 'add':
            savedValue = 0;
            savedOperator = operator;
            displayOutputConsole.textContent = `${operateValue} ${operator}`;
            break;
        case 'equal':
            if (savedOperator === null) {
                displayOutputConsole.textContent = `${savedValue} ${operator}`;
            } else {
                displayOutputConsole.textContent = `${operateValue} ${savedOperator} ${savedValue} ${operator}`;
                let calculatedValue = operate(savedOperator, Number(operateValue), Number(savedValue));
                operateValue = calculatedValue;
                mainDisplayOutput.textContent = calculatedValue;
                console.log(`calculatedValue: ${calculatedValue}`)
            }
            
            resetSavedValue = true;
    }

    console.log(`userInput: ${userInput}`);
    console.log(`savedValue: ${savedValue}`)
    console.log(`operateValue: ${operateValue}`)
    console.log(`savedOperator: ${savedOperator}`)
    console.log(resetSavedValue)
    console.log(e.key);
    
}));

// IMPLEMENT KEYBOARD INPUT https://stackoverflow.com/questions/74711305/cant-find-a-way-to-keep-my-keyboard-input-working-on-a-javascript-calculator-wi