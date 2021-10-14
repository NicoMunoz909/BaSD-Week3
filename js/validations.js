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
    if (inputValue.indexOf('@') > 2 && inputValue.indexOf('.') > 4 ) {
        return true
    } else {
        validation.innerHTML = '*Must be a valid email format. (contain "@" and ".")';
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