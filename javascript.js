
// function operate(operator, a, b) {
//     a = prompt("What is the value of the first number?")
//     b = prompt("What is the value of the second number?")
//     operator = prompt("add, subtract, multiply or divide?")
//     if (operator == "add"){
//         return add(a, b)
//     } else if (operator == "subtract") {
//         return subtract(a, b)
//     } else if (operator == "multiply") {
//         return multiply(a, b)
//     } else if (operator == "divide") {
//         return divide(a, b)
//     } 
// }



function numberZero() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '0';
}

function numberOne() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '1';
}

function numberTwo() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '2';
    }

function numberThree() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '3';
    }

function numberFour() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '4';
    }

function numberFive() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '5';
    }

function numberSix() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '6';
    }

function numberSeven() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '7';
    }

function numberEight() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '8';
    }

function numberNine() {
    const display = document.querySelector('#calculator-display');
    display.textContent += '9';
    }

function eraseAll() {
    const display = document.querySelector('#calculator-display');
    display.textContent = "" 
}




// const testButton = document.querySelector('#plus-sign');
const testDisplayA = document.querySelector('#calculator-display');


// function storeNumber() {
//     let storedNumberA = testDisplayA.textContent;
//     testDisplayA.textContent = "" 
//     return console.log(storedNumberA);
// }




let operator = ""
let storedNumberA = 0
let storedNumberB = 0


function storeNumberA() {
    storedNumberA = testDisplayA.textContent;
    testDisplayA.textContent = "" 
    return storedNumberA;
}

function storeNumberB() {
    storedNumberB = testDisplayA.textContent;
    testDisplayA.textContent = "" 
    return storedNumberB;
}


function addActive() {
    storeNumberA()
    return operator = "add"
}

function subtractActive() {
    storeNumberA()
    return operator = "subtract"
}

function multiplyActive() {
    storeNumberA()
    return operator = "multiply"
}

function divideActive() {
    storeNumberA()
    return operator = "divide"
}


function add(storedNumberA, storedNumberB) {
    let sum = +storedNumberA + +storedNumberB
    return testDisplayA.textContent = sum
}

function subtract(storedNumberA, storedNumberB) {
    let sum = storedNumberA - storedNumberB
    return testDisplayA.textContent = sum
}

function multiply(storedNumberA, storedNumberB) {
    let sum = storedNumberA * storedNumberB
    return testDisplayA.textContent = sum
}

function divide(storedNumberA, storedNumberB) {
    let sum = storedNumberA / storedNumberB
    return testDisplayA.textContent = sum
}



function equals(operator, storedNumberA, storedNumberB) {
    storedNumberB = testDisplayA.textContent;
    testDisplayA.textContent = "" 

    if (operator == "add"){
        return add(storedNumberA, storedNumberB)
    } else if (operator == "subtract") {
        return subtract(storedNumberA, storedNumberB)
    } else if (operator == "multiply") {
        return multiply(storedNumberA, storedNumberB)
    } else if (operator == "divide") {
        return divide(storedNumberA, storedNumberB)
    } 
}