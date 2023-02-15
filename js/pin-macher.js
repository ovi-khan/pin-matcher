function getPin() {
    const pin = genaratePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } 
    else {
        // console.log('pin is not 3 digit', pin)
        return getPin();
    }
}


function genaratePin() {
    const random  = Math.round(Math.random() * 10000)
    return random
}

document.getElementById('genarate-pin-btn').addEventListener('click', function() {
    const pin = getPin()
    // console.log(pin)
    const pinInput = document.getElementById('pin-input')
    pinInput.value = pin 
})
document.getElementById('calculator').addEventListener('click', function(event) {
    const number = event.target.innerText
    const calculatorDisplay = document.getElementById('calculator-display')
    const previousDisplayNumber = calculatorDisplay.value
    if (isNaN (number)) {
        if(number === 'C') {
            calculatorDisplay.value = '';
        }else if (number === '<'){
            const digits = previousDisplayNumber.split('')
            digits.pop()
            const remainingDigits = digits.join('')
            calculatorDisplay.value = remainingDigits           
        }
    } else {
        
        
        const newCalculatorDisplayNumber = previousDisplayNumber + number
        calculatorDisplay.value = newCalculatorDisplayNumber
    }
})

document.getElementById('verify-pin').addEventListener('click', function() {
    const pinInputField = document.getElementById('pin-input')
    const currentPin = pinInputField.value

    const calculatorDisplay =  document.getElementById('calculator-display')
    const calculatorDisplayNumber = calculatorDisplay.value

    const pinRejectMassege = document.getElementById('pin-reject')
    const pinSuccessMassege = document.getElementById('pin-success')
    if(calculatorDisplayNumber == currentPin) {
        
        pinSuccessMassege.style.display = 'block'
        pinRejectMassege.style.display = 'none'
    }else {
        
        pinRejectMassege.style.display = 'block'
        pinSuccessMassege.style.display = 'none'
    }
})

