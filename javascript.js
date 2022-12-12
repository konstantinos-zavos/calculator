function numberZero() {
    if (display.textContent == "") {
        return display.textContent = 0
    } else if (display.textContent == 0) {
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
    storedNumberB = display.textContent;
    if (storedNumberA != 0 && storedNumberB != 0) {
        if (operator == "add"){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } else if (operator == "subtract") {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } else if (operator == "multiply") {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } else if (operator == "divide") {
            let sum = storedNumberA / storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } 
} else if (storedNumberB == '') {
    display.textContent = storedNumberA
    stored.textContent = ""
}  else {
    storeNumberA()
    stored.textContent += `${storedNumberA} +`
    return operator = "add"
}
}

function subtractActive() {
    storedNumberB = display.textContent;
    if (storedNumberA != 0 && storedNumberB != 0 && storedNumberB != '') {
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
    } else if (storedNumberB == '') {
        display.textContent = storedNumberA
        stored.textContent = ""
    }  else {
    storeNumberA()
    stored.textContent += `${storedNumberA} -`
    return operator = "subtract"
}
}

function multiplyActive() {
    storedNumberB = display.textContent;
    if (storedNumberA != 0 && storedNumberB != 0 && storedNumberB != '') {
        if (operator == "add"){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (operator == "subtract") {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (operator == "multiply") {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (operator == "divide") {
            let sum = storedNumberA / storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } 
    } else if (storedNumberB == '') {
        display.textContent = storedNumberA
        stored.textContent = ""
        return alert("What are you doing step-calculator?")
        // this is a "non-professional" way to fix a bug I was facing here. You can consider this an easter egg. 
        // You can totally ignore the alert msg and consider this "fixed"
    } else { 
    storeNumberA()
    stored.textContent += `${storedNumberA} *`
    return operator = "multiply"
}
}

function divideActive() {
    storedNumberB = display.textContent;
    if (storedNumberA != 0 && storedNumberB != 0) {
        if (operator == "add"){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (operator == "subtract") {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (operator == "multiply") {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (operator == "divide") {
            let sum = storedNumberA / storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } 
} else if (storedNumberB == '') {
    display.textContent = storedNumberA
    stored.textContent = ""
}  else {
    storeNumberA()
    stored.textContent += `${storedNumberA} /`
    return operator = "divide"
}
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
    if (storedNumberA == "" || storedNumberB == "" && operator == "") {
        alert("ERROR 01 - Please use an operator first before using this button")
    } else {
    storedNumberB = display.textContent;
    display.textContent = "" 
    stored.textContent += ` ${storedNumberB} =`
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
}


//  Modal Code
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}