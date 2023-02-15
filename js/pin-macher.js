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