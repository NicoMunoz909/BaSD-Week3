function saveLocalStorage(data) {
    for(key in data) {
        localStorage.setItem(`${key}`, data[key]);
    }
    console.log(localStorage)
}

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
    var fields = document.getElementsByClassName('getter'); //Get all the input fields on the form
    /*Iterate trough all the input fields and call the apropiate validate function by matching the id's
    If the validate function returns false, push the error message to the errors array 
    and set isValid flag to false*/
    for (var i=0; i < fields.length; i++ ) {
        if (fields[i].id == 'name-input') {
            if (!validateName()) {
                errorsArray.push('Full name must be at least 6 characters long and contain a whitespace.');
                isValid = false;
            }
        } else if (fields[i].id == 'email-input') {
            if (!validateEmail()) {
                errorsArray.push('Email must have valid email format.');
                isValid = false;
            }
        } else if (fields[i].id == 'password-input') {
            if (!validatePassword()) {
                errorsArray.push('Password must be at least 8 characters long and contain numbers and letters.');
                isValid = false;
            }
        } else if (fields[i].id == 'confirm-password-input') {
            if (!validatePasswordConfirmation()) {
                errorsArray.push('Passwords don\'t match.');
                isValid = false;
            }
        } else if (fields[i].id == 'age-input') {
            if (!validateAge()) {
                errorsArray.push('Age must an integer equal or higher than 18.');
                isValid = false;
            }
        } else if (fields[i].id == 'phone-input') {
            if (!validatePhoneNumber()) {
                errorsArray.push('Phone must be at least 7 digits long. Can\'t contain whitespace, hyphen or parenthesis.');
                isValid = false;
            }
        } else if (fields[i].id == 'address-input') {
            if (!validateAddress()) {
                errorsArray.push('Address must be at least 5 characters long, contain a whitespace, leters and numbers.');
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
    /*If the isValid flag is true that means there are no errors on the form so it
    calls the function to send the data to the server,
    finally reset the form and the greeting*/
    if (isValid) {
        fetchData();
        document.getElementById('form-greeting').innerHTML = 'hello'
        document.getElementById('subscribe-form').reset();
        return true;
    //If isValid flag is set to false that means there are errors, so it shows them on a modal
    } else {
        var modalMessage = '<ul>';
        for (var i=0; i<errorsArray.length; i++) {
            modalMessage += `<li>${errorsArray[i]}</li>`
        }
        modalMessage += '</ul>'
        document.getElementById('modal-title').innerHTML = 'Error on form submition!'
        document.getElementById('modal-message').innerHTML = modalMessage;
        document.getElementById('modal').classList.toggle('hidden'); //Show Modal
    }
}

function updateGreeting() {
    var greeting = document.getElementById('form-greeting');
    var nameInput = document.getElementById('name-input').value;
    greeting.innerHTML = `Hello ${nameInput}`;
}

function fetchData() {
    var spaceIndex = nameInput.value.indexOf(' ')
    var name = nameInput.value.slice(0, spaceIndex);
    var surname = nameInput.value.slice(spaceIndex+1, nameInput.value.length);
    var email = emailInput.value;
    var password = passwordInput.value;
    var age = ageInput.value;
    var phoneNumber = phoneInput.value;
    var address = addressInput.value
    var city = cityInput.value;
    var postalCode = postalInput.value;
    var idNumber = idInput.value;
    fetch(`https://curso-dev-2021.herokuapp.com/newsletter?name=${name}&apellido=${surname}&email=${email}
    &password=${password}&age=${age}&phone=${phoneNumber}&address=${address}&city=${city}&postal=${postalCode}
    &id=${idNumber}`)
    .then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`HTTP error! Status:${response.status}`)
        }
    })
    .then(data => {
        var modalMessage = '<ul>';
        for (key in data) {
            modalMessage += `<li>${key}: ${data[key]}</li>`
        }
        modalMessage += '</ul>'
        document.getElementById('modal-title').innerHTML = 'You subscribed succesfully!'
        document.getElementById('modal-message').innerHTML = modalMessage;
        document.getElementById('modal').classList.toggle('hidden'); //Show Modal
        saveLocalStorage(data);
    })
    .catch(error => {
        document.getElementById('modal-title').innerHTML = 'Error on subscription'
        document.getElementById('modal-message').innerHTML = error;
        document.getElementById('modal').classList.toggle('hidden'); //Show Modal
    })
}


//Add name input event listeners
var nameInput = document.getElementById('name-input');
nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('focus', function(){
    var validation = document.getElementById('name-validation');
    validation.innerHTML = '';
});
nameInput.addEventListener('keyup', updateGreeting);
//Add email input event listeners
var emailInput = document.getElementById('email-input');
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('focus', function(){
    var validation = document.getElementById('email-validation');
    validation.innerHTML = '';
});
//Add password input event listeners
var passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('blur', validatePassword);
passwordInput.addEventListener('focus', function(){
    var validation = document.getElementById('password-validation');
    validation.innerHTML = '';
});
//Add password confirmation input event listeners
var passwordConfirmationInput = document.getElementById('confirm-password-input');
passwordConfirmationInput.addEventListener('blur', validatePasswordConfirmation);
passwordConfirmationInput.addEventListener('focus', function(){
    var validation = document.getElementById('confirm-password-validation');
    validation.innerHTML = '';
});
//Add age input event listeners
var ageInput = document.getElementById('age-input');
ageInput.addEventListener('blur', validateAge);
ageInput.addEventListener('focus', function(){
    var validation = document.getElementById('age-validation');
    validation.innerHTML = '';
});
//Add phone number input event listeners
var phoneInput = document.getElementById('phone-input');
phoneInput.addEventListener('blur', validatePhoneNumber);
phoneInput.addEventListener('focus', function(){
    var validation = document.getElementById('phone-validation');
    validation.innerHTML = '';
});
//Add address input event listeners
var addressInput = document.getElementById('address-input');
addressInput.addEventListener('blur', validateAddress);
addressInput.addEventListener('focus', function(){
    var validation = document.getElementById('address-validation');
    validation.innerHTML = '';
});
//Add city input event listeners
var cityInput = document.getElementById('city-input');
cityInput.addEventListener('blur', validateCity);
cityInput.addEventListener('focus', function(){
    var validation = document.getElementById('city-validation');
    validation.innerHTML = '';
});
//Add postal code input event listeners
var postalInput = document.getElementById('postal-input');
postalInput.addEventListener('blur', validatePostalCode);
postalInput.addEventListener('focus', function(){
    var validation = document.getElementById('postal-validation');
    validation.innerHTML = '';
});
//Add id number input event listeners
var idInput = document.getElementById('id-input');
idInput.addEventListener('blur', validateIDNumber);
idInput.addEventListener('focus', function(){
    var validation = document.getElementById('id-validation');
    validation.innerHTML = '';
});
//Add send button event listeners
var sendButton = document.getElementById('send-btn');
sendButton.addEventListener('click', validateForm);
//Add close function to modal
var closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click', function() {
    document.getElementById('modal').classList.toggle('hidden');
})
//Load the data in localStorage to the form on window load
window.onload = function() {
    nameInput.value = !!localStorage.getItem('name') ? localStorage.getItem('name') : '';
    nameInput.value += ' ';
    nameInput.value += !!localStorage.getItem('apellido') ? localStorage.getItem('apellido') : '';
    emailInput.value = !!localStorage.getItem('email') ? localStorage.getItem('email') : '';
    passwordInput.value = !!localStorage.getItem('password') ? localStorage.getItem('password') : '';
    ageInput.value = !!localStorage.getItem('age') ? localStorage.getItem('age') : '';
    phoneInput.value = !!localStorage.getItem('phone') ? localStorage.getItem('phone') : '';
    addressInput.value = !!localStorage.getItem('address') ? localStorage.getItem('address') : '';
    cityInput.value = !!localStorage.getItem('city') ? localStorage.getItem('city') : '';
    postalInput.value = !!localStorage.getItem('postal') ? localStorage.getItem('postal') : '';
    idInput.value = !!localStorage.getItem('id') ? localStorage.getItem('id') : '';
    updateGreeting();
}