function add(a, b) {
    return +a + +b 
}

function subtract (a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b 
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    a = prompt("What is the value of the first number?")
    b = prompt("What is the value of the second number?")
    operator = prompt("add, subtract, multiply or divide?")
    if (operator == "add"){
        return add(a, b)
    } else if (operator == "subtract") {
        return subtract(a, b)
    } else if (operator == "multiply") {
        return multiply(a, b)
    } else if (operator == "divide") {
        return divide(a, b)
    } 
}



function numberZero() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '0';
    display.appendChild(content);
}

function numberOne() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '1';
    display.appendChild(content);
}

function numberTwo() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '2';
    display.appendChild(content);
    }

function numberThree() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '3';
    display.appendChild(content);
    }

function numberFour() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '4';
    display.appendChild(content);
    }

function numberFive() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '5';
    display.appendChild(content);
    }

function numberSix() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '6';
    display.appendChild(content);
    }

function numberSeven() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '7';
    display.appendChild(content);
    }

function numberEight() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '8';
    display.appendChild(content);
    }

function numberNine() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '9';
    display.appendChild(content);
    }

function eraseAll() {
    const display = document.querySelector('#calculator-display');
    display.textContent = "" 
    display.appendChild(content);
}