function numberZero() {
    if (display.textContent == "") {
        return display.textContent = 0
    } else if (display.textContent == 0) {
        return false
    } else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '0';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '0';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '0';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '0';
            } else {
            return false
            }    
        }
}



function numberOne() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '1';
    }else {
        if (display.textContent.length < 9) {
        document.getElementById('calculator-display').setAttribute('style', 'color: red') 
        display.textContent += '1';
        } else if (display.textContent.length < 11) {
        document.getElementById('calculator-display').setAttribute('style', 'font-size: 30px; color: blue') 
        display.textContent += '1';
        } else if (display.textContent.length < 15) {
        document.getElementById('calculator-display').setAttribute('style', 'font-size: 22px; color: blue') 
        display.textContent += '1';
        } else if (display.textContent.length < 20) {
        document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
        display.textContent += '1';
        } else {
        return false
        }
    }
}

function numberTwo() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '2';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '2';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '2';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '2';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '2';
            } else {
            return false
            }    
        }
    }

function numberThree() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '3';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '3';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '3';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '3';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '3';
            } else {
            return false
            }    
        }
    }

function numberFour() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '4';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '4';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '4';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '4';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '4';
            } else {
            return false
            }    
        }
    }

function numberFive() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '5';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '5';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '5';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '5';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '5';
            } else {
            return false
            }    
        }
    }

function numberSix() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '6';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '6';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '6';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '6';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '6';
            } else {
            return false
            }    
        }
    }

function numberSeven() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '7';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '7';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '7';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '7';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '7';
            } else {
            return false
            }    
        }
    }

function numberEight() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '8';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '8';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '8';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '8';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '8';
            } else {
            return false
            }    
        }
    }

function numberNine() {
    if (display.textContent == 0) {
        display.textContent = ""
        display.textContent += '9';
    }else {
        if (display.textContent.length < 9) {
            document.getElementById('calculator-display').setAttribute('style', 'color: red') 
            display.textContent += '9';
            } else if (display.textContent.length < 11) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 29px; color: blue') 
            display.textContent += '9';
            } else if (display.textContent.length < 15) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 21px; color: blue') 
            display.textContent += '9';
            } else if (display.textContent.length < 20) {
            document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: white; padding-bottom: 5px;') 
            display.textContent += '9';
            } else {
            return false
            }    
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
    equalsPressedOnce = 0
    stored.textContent = ""
    // Allakse auto gia na kaneis ta fonts pali sto original megethos
    document.getElementById('calculator-display').setAttribute('style', 'color: white');
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
    if (storedNumberA != 0 && storedNumberB != 0 ) {
        if (operator == "add" && equalsPressedOnce != 1 ){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        }else if (equalsPressedOnce == 1) {
            storedNumberA = display.textContent
            display.textContent = ""
            stored.textContent += ` ${storedNumberA} +`
            equalsPressedOnce = 0
            return operator = "add"
        }  else if (operator == "subtract" && equalsPressedOnce != 1) {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } else if (operator == "multiply" && equalsPressedOnce != 1) {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} +`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "add"
        } else if (operator == "divide" && equalsPressedOnce != 1) {
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
        if (operator == "add" && equalsPressedOnce != 1){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (equalsPressedOnce == 1) {
            storedNumberA = display.textContent
            display.textContent = ""
            stored.textContent += ` ${storedNumberA} -`
            equalsPressedOnce = 0
            return operator = "subtract"
        }  else if (operator == "subtract" && equalsPressedOnce != 1) {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (operator == "multiply" && equalsPressedOnce != 1) {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} -`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "subtract"
        } else if (operator == "divide" && equalsPressedOnce != 1) {
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
        if (operator == "add" && equalsPressedOnce != 1){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (equalsPressedOnce == 1) {
            storedNumberA = display.textContent
            display.textContent = ""
            stored.textContent += ` ${storedNumberA} *`
            equalsPressedOnce = 0
            return operator = "multiply"
        }  else if (operator == "subtract" && equalsPressedOnce != 1) {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (operator == "multiply" && equalsPressedOnce != 1) {
            let sum = storedNumberA * storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} *`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "multiply"
        } else if (operator == "divide" && equalsPressedOnce != 1) {
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
        if (operator == "add" && equalsPressedOnce != 1){
            let sum = +storedNumberA + +storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (equalsPressedOnce == 1) {
            storedNumberA = display.textContent
            display.textContent = ""
            stored.textContent += ` ${storedNumberA} /`
            equalsPressedOnce = 0
            return operator = "divide"
        }   else if (operator == "subtract" && equalsPressedOnce != 1) {
            let sum = storedNumberA - storedNumberB
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (operator == "multiply" && equalsPressedOnce != 1) {
            let sum = (storedNumberA * storedNumberB)
            sum = Math.round((sum + Number.EPSILON) * 100) / 100;
            display.textContent = ""
            stored.textContent += ` ${storedNumberB} /`
            storedNumberA = sum
            storedNumberB = display.textContent;
            return operator = "divide"
        } else if (operator == "divide" && equalsPressedOnce != 1) {
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
    console.log(storedNumberA)
    console.log(storedNumberB)
    return display.textContent = sum
}

function subtract(storedNumberA, storedNumberB) {
    let sum = storedNumberA - storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    console.log(storedNumberA)
    console.log(storedNumberB)
    return display.textContent = sum
}

function multiply(storedNumberA, storedNumberB) {
    let sum = storedNumberA * storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    console.log(storedNumberA)
    console.log(storedNumberB)
    return display.textContent = sum
}

function divide(storedNumberA, storedNumberB) {
    let sum = storedNumberA / storedNumberB
    sum = Math.round((sum + Number.EPSILON) * 100) / 100;
    console.log(storedNumberA)
    console.log(storedNumberB)
    return display.textContent = sum
}



let equalsPressedOnce = 0


function equals(operator, storedNumberA, storedNumberB) {
    if (storedNumberA == "" || storedNumberB == "" && operator == "") {
        alert("ERROR 01 - Please use an operator first before using this button")
    } else if (equalsPressedOnce == 1) {
        let confirmAction = confirm("Calculations are complete. Do you want to reset?");
        if (confirmAction) {
        eraseAll()
        } else {
        alert("Action canceled");
        }
    } else {
    storedNumberB = display.textContent;
    display.textContent = ""
    if (stored.textContent.length >= 25) {
        stored.textContent = "Memory Full - Operations hidden";
        document.getElementById('calculator-display').setAttribute('style', 'font-size: 15px; color: blue; padding-bottom: 5px') 
    } else {
    stored.textContent += ` ${storedNumberB} =`
    }
    if (operator == "add"){
        equalsPressedOnce = 1
        return add(storedNumberA, storedNumberB)
    } else if (operator == "subtract") {
        equalsPressedOnce = 1
        return subtract(storedNumberA, storedNumberB)
    } else if (operator == "multiply") {
        equalsPressedOnce = 1
        return multiply(storedNumberA, storedNumberB)
    } else if (operator == "divide") {
        equalsPressedOnce = 1
        return divide(storedNumberA, storedNumberB)
    } 
}
}



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


// else if (equalsPressedOnce == 1) {
//     let confirmAction = confirm("Calculations are complete. Do you want to reset?");
//     if (confirmAction) {
//     eraseAll()
//     } else {
//     alert("Action canceled");
//     }
// } 

