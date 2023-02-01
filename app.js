const previousNumber = document.querySelector('.previousNumber'); 
const currentNumber = document.querySelector('.currentNumber'); 
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const operatorButton = document.querySelectorAll('.operator'); 
const numbersButton = document.querySelectorAll('.number'); 
const equalButton = document.querySelector('.equal'); 
const addButton = document.querySelector('.operator'); 


let currentResult = '';
let previousResult = '';
let operation = undefined;




function uptadeDisplay () {
    currentNumber.innerHTML = currentResult;
    if(operation !=null) { 
    previousNumber.innerHTML = previousResult + operation;
    }
    else {
        previousNumber.innerHTML = '';
    }
}

function addNumber (number) {
    if(number === '.' && currentResult.includes('.')) return;
    currentResult = currentResult.toString() + number.toString();
}

function chooseOperation (operator) {
    if(currentResult === '') return;
    if(previousResult !=='') {
        compution()
    };
    operation = operator;
    previousResult = currentResult;
    currentResult = '';
}

function  compute () {
    if(previousResult === '' || currentResult === '') return;
    let previous = Number(previousResult);
    let current = Number(currentResult);
    switch (operation) {
        case '+':
            compution = previous + current
            break;
        case '-':
            compution = previous - current
            break;
        case '*':
            compution = previous * current
            break;
        case '/':
            if(current === 0) {
                clearScreen();
                return
            }
            compution = previous / current
            break;            
        default:
            return;       
    }
    currentResult = compution;
    operation = undefined;
    previousResult = '';
}

function clearNum () {
    currentResult = currentResult.toString().slice(0, -1);
}

function clearScreen () {
    currentResult = '';
    previousResult = '';
    operation = undefined;
}






numbersButton.forEach ((number) => {
    number.addEventListener('click', () => {
        addNumber(number.innerHTML)
        uptadeDisplay()
    })
});

operatorButton.forEach((operator) => {
    operator.addEventListener('click', () => {
        chooseOperation(operator.innerHTML)
        uptadeDisplay()
    })
});

clearButton.addEventListener('click', () => {
    clearNum()
    uptadeDisplay()
});

equalButton.addEventListener('click', () => {
    compute()
    uptadeDisplay()
});

deleteButton.addEventListener('click', () => {
    clearScreen()
    uptadeDisplay()
});


