function validateName() {
    var validation = document.getElementById('name-validation');
    var inputValue = document.getElementById('name-input').value;
    if (inputValue.length > 6 && inputValue.indexOf(' ') > 2) {
        return true
    } else {
        validation.innerHTML = '*Full name must be at least 6 characters long and contain a whitespace'
    }
}

function validateEmail() {
    var validation = document.getElementById('email-validation');
    var inputValue = document.getElementById('email-input').value;
    if (inputValue.indexOf('@') > 2 && inputValue.indexOf('.') > inputValue.indexOf('@')+2 ) {
        return true
    } else {
        validation.innerHTML = '*Must be a valid email format.';
    }
}

function validatePassword() {
    var validation = document.getElementById('password-validation');
    var inputValue = document.getElementById('password-input').value;
    if (inputValue.length >= 8 && inputValue.search(/[a-z]/) >= 0 && inputValue.search(/[0-9]/) >= 0) {
        return true
    } else {
        validation.innerHTML = '*Must be at least 8 characters long and contain numbers and letters';
    }
}

function validatePasswordConfirmation() {
    var validation = document.getElementById('confirm-password-validation');
    var inputValue = document.getElementById('confirm-password-input').value;
    if (inputValue === document.getElementById('password-input').value) {
        return true
    } else {
        validation.innerHTML = '*Passwords don\'t match';
    }
}

function validateAge() {
    var validation = document.getElementById('age-validation');
    var inputValue = parseFloat(document.getElementById('age-input').value);
    if (Number.isInteger(inputValue) && inputValue >= 18) {
        return true
    } else {
        validation.innerHTML = '*Age must an integer over 18';
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