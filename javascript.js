function numberZero() {
    if (display.textContent == 0) {
        return false
    } else {
        display.textContent += 0
    }
}

function numberOne() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '1';
    }else {
    display.textContent += '1';
    }
}

function numberTwo() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '2';
    }else {
    display.textContent += '2';
    }
    }

function numberThree() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '3';
    }else {
    display.textContent += '3';
    }
    }

function numberFour() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '4';
    }else {
    display.textContent += '4';
    }
    }

function numberFive() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '5';
    }else {
    display.textContent += '5';
    }
    }

function numberSix() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '6';
    }else {
    display.textContent += '6';
    }
    }

function numberSeven() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '7';
    }else {
    display.textContent += '7';
    }
    }

function numberEight() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '8';
    }else {
    display.textContent += '8';
    }
    }

function numberNine() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '9';
    }else {
    display.textContent += '9';
    }
    }



function decimal() {
    if (display.textContent % 1 === 0) {
        display.textContent += '.';
    }else {
    return false
    }
    }

function eraseAll() {
    display.textContent = "0" 
    operator = ""
    storedNumberA = 0
    storedNumberB = 0
    stored.textContent = ""
}

function eraseLast() {
    if (display.textContent > 0 || display.textContent < 0) {
    const arrayDisplay =  display.textContent.toString().substring(0, display.textContent.length - 1);
    return display.textContent = arrayDisplay
    } else if (display.textContent == 0) {
        return display.textContent = "0"
    }
}



const display = document.querySelector('#calculator-display');
const stored = document.querySelector('#stored');
let operator = ""
let storedNumberA = 0
let storedNumberB = 0


function storeNumberA() {
    storedNumberA = display.textContent;
    display.textContent = "" 
    return storedNumberA;
}

function storeNumberB() {
    storedNumberB = display.textContent;
    display.textContent = "" 
    return storedNumberB;
}


function addActive() {
    if (storedNumberA != 0 && storedNumberB == 0)  {
    storedNumberB = display.textContent; 
    let sum = +storedNumberA + +storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    display.textContent = ""
    stored.textContent += ` ${storedNumberB}`
    operator = "add"
    return storedNumberA = sum
} else if ( storedNumberB != 0) {
    storedNumberB = display.textContent; 
    let sum = +storedNumberA + +storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    display.textContent = ""
    stored.textContent += ` + ${storedNumberB}`
    operator = "add"
    return storedNumberA = sum
}else {
    storeNumberA()
    stored.textContent += `${storedNumberA} +`
    return operator = "add"
}
}

function subtractActive() {
    storedNumberB = display.textContent;
    if (storedNumberA != 0 && storedNumberB != 0) {
        if (operator == "add"){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (operator == "subtract") {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (operator == "multiply") {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (operator == "divide") {
            let sum = storedNumberA / storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } 
    } else {
    storeNumberA()
    stored.textContent += `${storedNumberA} -`
    return operator = "subtract"
}
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
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    return display.textContent = sum
}

function subtract(storedNumberA, storedNumberB) {
    let sum = storedNumberA - storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    return display.textContent = sum
}

function multiply(storedNumberA, storedNumberB) {
    let sum = storedNumberA * storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    return display.textContent = sum
}

function divide(storedNumberA, storedNumberB) {
    let sum = storedNumberA / storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    return display.textContent = sum
}



function equals(operator, storedNumberA, storedNumberB) {
    storedNumberB = display.textContent;
    display.textContent = "" 
    stored.textContent = ""
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


// input #1 --> vazo noumero sto screen
// input #2 --> operator (+) --> to noumero sto screen paei sto var1
// input #3 --> screen is clear now --> vazw allo noumero sto screen
// input #4 --> pataw ena allo operator gia paradigma pali plus
//  thelw to display na apothikeftei sto temporary variable 2  
// na ginei h praksi me ton prohgoumeno operator
// to apotelesma na apothikeftei ws variable 1
// twra to display number tha apothikeftei sto variable 2
// repeat