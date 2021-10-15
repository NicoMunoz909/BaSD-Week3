function validateName() {
    var validation = document.getElementById('name-validation');
    var inputValue = document.getElementById('name-input').value;
    if (inputValue.length > 6 && inputValue.indexOf(' ') > 2) {
        return true
    } else {
        validation.innerHTML = '*Full name must be at least 6 characters long and contain a whitespace';
        return false
    }
}

function validateEmail() {
    var validation = document.getElementById('email-validation');
    var inputValue = document.getElementById('email-input').value;
    if (inputValue.indexOf('@') > 2 && inputValue.indexOf('.') > inputValue.indexOf('@')+2 ) {
        return true
    } else {
        validation.innerHTML = '*Must be a valid email format.';
        return false
    }
}

function validatePassword() {
    var validation = document.getElementById('password-validation');
    var inputValue = document.getElementById('password-input').value;
    if (inputValue.length >= 8 && inputValue.search(/[a-z]/) >= 0 && inputValue.search(/[0-9]/) >= 0) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 8 characters long and contain numbers and letters';
        return false
    }
}

function validatePasswordConfirmation() {
    var validation = document.getElementById('confirm-password-validation');
    var inputValue = document.getElementById('confirm-password-input').value;
    if (inputValue === document.getElementById('password-input').value) {
        return true
    } else {
        validation.innerHTML = '*Passwords don\'t match';
        return false
    }
}

function validateAge() {
    var validation = document.getElementById('age-validation');
    var inputValue = parseFloat(document.getElementById('age-input').value);
    if (Number.isInteger(inputValue) && inputValue >= 18) {
        return true
    } else {
        validation.innerHTML = '*Age must an integer equal or higher than 18';
        return false
    }
}

function validatePhoneNumber() {
    var validation = document.getElementById('phone-validation');
    var inputValue = document.getElementById('phone-input').value;
    if (inputValue.length >= 7 && !inputValue.includes('-')) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 7 digits long. Can\'t contain whitespace, hyphen or parenthesis';
        return false
    }
}

function validateAddress() {
    var validation = document.getElementById('address-validation');
    var inputValue = document.getElementById('address-input').value;
    if (inputValue.length > 5 && inputValue.indexOf(' ') > 1 && inputValue.search(/[a-z]/) >= 0 && inputValue.search(/[0-9]/) >= 0) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 5 characters long, contain a whitespace, leters and numbers';
        return false
    }
}

function validateCity() {
    var validation = document.getElementById('city-validation');
    var inputValue = document.getElementById('city-input').value;
    if (inputValue.length >= 3) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 3 characters long.';
        return false
    }
}

function validatePostalCode() {
    var validation = document.getElementById('postal-validation');
    var inputValue = document.getElementById('postal-input').value;
    if (inputValue.length >= 3) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 3 characters long.';
        return false
    }
}

function validateIDNumber() {
    var validation = document.getElementById('id-validation');
    var inputValue = document.getElementById('id-input').value;
    if (inputValue.length >= 7 && inputValue.length <= 8 && !inputValue.includes('.')) {
        return true
    } else {
        validation.innerHTML = '*Must be a number with 7 or 8 digits.';
        return false
    }
}

function validateForm() {
    var isValid = true;
    var errorsArray = [];
    var fields = document.getElementsByClassName('getter');
    for (var i=0; i < fields.length; i++ ) {
        console.log(i)
        if (fields[i].id == 'name-input') {
            if (!validateName()) {
                errorsArray.push('Full name must be at least 6 characters long and contain a whitespace');
                isValid = false;
            }
        } else if (fields[i].id == 'email-input') {
            if (!validateEmail()) {
                errorsArray.push('Email must have valid email format.');
                isValid = false;
            }
        } else if (fields[i].id == 'password-input') {
            if (!validatePassword()) {
                errorsArray.push('Password must be at least 8 characters long and contain numbers and letters');
                isValid = false;
            }
        } else if (fields[i].id == 'confirm-password-input') {
            if (!validatePasswordConfirmation()) {
                errorsArray.push('Passwords don\'t match');
                isValid = false;
            }
        } else if (fields[i].id == 'age-input') {
            if (!validateAge()) {
                errorsArray.push('Age must an integer equal or higher than 18');
                isValid = false;
            }
        } else if (fields[i].id == 'phone-input') {
            if (!validatePhoneNumber()) {
                errorsArray.push('Phone must be at least 7 digits long. Can\'t contain whitespace, hyphen or parenthesis');
                isValid = false;
            }
        } else if (fields[i].id == 'address-input') {
            if (!validateAddress()) {
                errorsArray.push('Address must be at least 5 characters long, contain a whitespace, leters and numbers');
                isValid = false;
            }
        } else if (fields[i].id == 'city-input') {
            if (!validateCity()) {
                errorsArray.push('City must be at least 3 characters long.');
                isValid = false;
            }
        } else if (fields[i].id == 'postal-input') {
            if (!validatePostalCode()) {
                errorsArray.push('Postal code must be at least 3 characters long.');
                isValid = false;
            }
        } else if (fields[i].id == 'id-input') {
            if (!validateIDNumber()) {
                errorsArray.push('ID number must have 7 or 8 digits.');
                isValid = false;
            }
        }
    }
    if (isValid) {
        alert('everything ok');
        return true;
    } else {
        alert(errorsArray);
        return false;
    }
}

var nameInput = document.getElementById('name-input');
nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', function(){
    var validation = document.getElementById('name-validation');
    validation.innerHTML = '';
});
var emailInput = document.getElementById('email-input');
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function(){
    var validation = document.getElementById('email-validation');
    validation.innerHTML = '';
});
var passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function(){
    var validation = document.getElementById('password-validation');
    validation.innerHTML = '';
});
var passwordConfirmationInput = document.getElementById('confirm-password-input');
passwordConfirmationInput.addEventListener('blur', validatePasswordConfirmation);
passwordConfirmationInput.addEventListener('focus', function(){
    var validation = document.getElementById('confirm-password-validation');
    validation.innerHTML = '';
});
var AgeInput = document.getElementById('age-input');
AgeInput.addEventListener('blur', validateAge);
AgeInput.addEventListener('focus', function(){
    var validation = document.getElementById('age-validation');
    validation.innerHTML = '';
});
var phoneInput = document.getElementById('phone-input');
phoneInput.addEventListener('blur', validatePhoneNumber);
phoneInput.addEventListener('focus', function(){
    var validation = document.getElementById('phone-validation');
    validation.innerHTML = '';
});
var addressInput = document.getElementById('address-input');
addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', function(){
    var validation = document.getElementById('address-validation');
    validation.innerHTML = '';
});
var cityInput = document.getElementById('city-input');
cityInput.addEventListener('blur', validateCity);
cityInput.addEventListener('focus', function(){
    var validation = document.getElementById('city-validation');
    validation.innerHTML = '';
});
var postalInput = document.getElementById('postal-input');
postalInput.addEventListener('blur', validatePostalCode);
postalInput.addEventListener('focus', function(){
    var validation = document.getElementById('postal-validation');
    validation.innerHTML = '';
});
var IDInput = document.getElementById('id-input');
IDInput.addEventListener('blur', validateIDNumber);
IDInput.addEventListener('focus', function(){
    var validation = document.getElementById('id-validation');
    validation.innerHTML = '';
});
var sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', validateForm)