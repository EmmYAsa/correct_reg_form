document.addEventListener('DOMContentLoaded', function () {
    let emailInput = document.getElementById('email');
    let passwordInput = document.getElementById('password');
    let repeatInput = document.getElementById('repeat');
    let wrongEmail = document.getElementById('wrong1');
    let wrongPassword = document.getElementById('wrong2');
    let wrongRepeat = document.getElementById('wrong3');

    emailInput.addEventListener('input', function () {
        let email = emailInput.value;

        if (email === "") {
            wrongEmail.style.opacity = '0%';
            emailInput.style.borderColor = 'black';
        } else if (!validateEmail(email)) {
            wrongEmail.style.opacity = '100%';
            emailInput.style.borderColor = 'red';
        } else {
            wrongEmail.style.opacity = '0%';
            emailInput.style.borderColor = 'black';
        }
    });

    passwordInput.addEventListener('input', function () {
        let password = passwordInput.value;
        let repeat = repeatInput.value;

        if (password === "") {
            wrongPassword.style.opacity = '0%';
            passwordInput.style.borderColor = 'black';
        } else if (!validatePassword(password)) {
            wrongPassword.style.opacity = '100%';
            passwordInput.style.borderColor = 'red';
        } else {
            wrongPassword.style.opacity = '0%';
            passwordInput.style.borderColor = 'black';
        }

        if (repeat === "") {
            wrongRepeat.style.opacity = '0%';
            repeatInput.style.borderColor = 'black';
        } else if (repeat !== password) {
            wrongRepeat.style.opacity = '100%';
            repeatInput.style.borderColor = 'red';
        } else {
            wrongRepeat.style.opacity = '0%';
            repeatInput.style.borderColor = 'black';
        }
    });

    function validateEmail(email) {
        var regex = /^[a-zA-Z_\-\.]{3,}@[a-zA-Z_\-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        return regex.test(password);
    }

    function saveDataAndRedirect() {
        let email = emailInput.value;
        let password = passwordInput.value;

        document.cookie = `email=${email};`;
        document.cookie = `password=${password};`;

        window.location.href = "/pages/info.html";
    }

    let signUpButton = document.querySelector('.sign-up');
    signUpButton.addEventListener('click', function () {
        let email = emailInput.value;
        let password = passwordInput.value;
        let repeat = repeatInput.value;

        if (email !== "" && password !== "" && repeat !== "") {
            if (validateEmail(email) && validatePassword(password) && password === repeat) {
                saveDataAndRedirect();
            }
        }
    });
});

