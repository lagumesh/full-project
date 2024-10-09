function restrictSpecialCharacters(e) {
    const regex = /^[a-zA-Z0-9.+#\s]+$/;
    const keyCode = e.which || e.keyCode;
    const char = String.fromCharCode(keyCode);
    const inputValue = e.target.value;

    // Allow navigation keys and backspace
    if (keyCode === 0 || keyCode === 8) {
        return true;
    }

    // Disallow leading space
    if (e.which === 32 && (inputValue.trim() === "" || inputValue.slice(-1) === " ")) {
        e.preventDefault();
        return false;
    }

    // Disallow repeated spaces
    if (keyCode === 32 && inputValue.slice(-1) === " ") {
        e.preventDefault();
        return false;
    }

    // Allow + and -
    if (char === '+' || char === '-') {
        return true;
    }

    //if (!regex.test(char)) {
    //    e.preventDefault();
    //    return false;
    //}
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('applicationForm');

    if (form) {
        form.addEventListener('input', function (e) {
            handleInputEvent(e);
        });

        form.addEventListener('keydown', function (e) {
            handleInputEvent(e);
        });
    }
});

function handleInputEvent(e) {
    const target = e.target;

    // Check if the target element is an input or textarea
    if (target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA') {
        //console.log('Input detected:', target);
        restrictSpecialCharacters(e);
    }
}



//limit space

function limitInputLength(element, maxLength) {
    if (element.value.length > maxLength) {
        element.value = element.value.slice(0, maxLength); // Truncate to maxLength
    }
}
//only alphabets
function validateInput(input) {
    input.value = input.value.replace(/[^A-Za-z ,.+#@\s]/g, ''); // Allow letters, space, comma, period
}


    //doesnt takes continuous zero
function preventContinuousZeros(input) {
    let value = input.value;
    if (value.includes('00')) {
        // Replace continuous '00' with a single '0'
        value = value.replace(/0000/g, '0');
        input.value = value;
    }
}
//aadhar limit space
function limitAndFormatAadharNumber(input) {
    let trimmedValue = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    trimmedValue = trimmedValue.slice(0, 12); // Limit to 12 characters

    const formattedValue = trimmedValue.replace(/(.{4})(?=.)/g, '$1-'); 
    input.value = formattedValue;
}


//validate email
function validateEmail(input) {
    input.value = input.value.toLowerCase().replace(/\s/g, '');
}

function validateInput(input) {
    input.value = input.value.replace(/[^A-Za-z.\/ ]/g, '');
}

function validateMobileInput(element) {
    let value = element.value;

    // Remove non-numeric characters
    value = value.replace(/\D/g, '');

    // Limit input to 10 digits
    if (value.length > 10) {
        value = value.slice(0, 10);
    }

    element.value = value;
}

// ************************* Adhar No Format ************************** //

function formatAadharNumber(input) {
    // Remove any non-digit characters
    const rawValue = input.value.replace(/\D/g, '');

    // Add spaces every 4 digits
    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, '$1 - ');

    // Update the input value with the formatted Aadhar number
    input.value = formattedValue;
}