(function setupListeners() {
    const email = document.getElementById('email');
    email.addEventListener("mouseleave", checkEmail);  
    
    const country = document.getElementById('country');
    country.addEventListener("mouseleave", checkCountry);

    const postCode = document.getElementById('postCode');
    postCode.addEventListener("mouseover", checkpostCode);

    const password = document.getElementById('password');
    password.addEventListener("mouseover", checkPassword);

    const confirm = document.getElementById('confirm');
    confirm.addEventListener("mouseover", passwordConfirm);

    const submit = document.getElementById('submit');
    submit.addEventListener("click", checkForm);

    const cancel = document.getElementById('cancel');
    cancel.addEventListener("click", reset);
})();

function checkEmail() {
    const msg = document.getElementById('emailMsg'); 
    const email = document.getElementById('email')

    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
    if (!regexEmail.test(email.value)) {
        msg.classList.add('errMsg');
        msg.innerText = "Please Enter a Valid Email Address";         
    } else {
        msg.classList.remove('errMsg');
        msg.innerText ='';
    }           
};

function checkCountry() {
    const msg = document.getElementById('countryMsg');
    const country = document.getElementById('country');
    const regexCountry = /[a-zA-Z]{2,}$/;

    if (!regexCountry.test(country.value)) {
        msg.classList.add('errMsg');
        msg.innerText = "Please Enter a Country Name";
    }  else {
        msg.classList.remove('errMsg');
        msg.innerText ='';
    }           
};

function checkpostCode() {
    const postCode = document.getElementById('postCode');
    const msg = document.getElementById('postCodeMsg');
    const regexPostCode = /^[A-Za-z0-9\- ]{2,10}$/;
    if (!regexPostCode.test(postCode.value)) {
        msg.classList.add('errMsg');
        msg.innerText = "Please Enter a Valid Post Code";
    }   else {
        msg.classList.remove('errMsg');
        msg.innerText ='';
    }           
};

function checkPassword() {
    const password = document.getElementById('password');
    const msg = document.getElementById('passwordMsg');
    const regexPassword = "/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/";
    if (!regexPassword.test(password.value)) {
        msg.classList.add('errMsg');
        msg.innerText = "password must be 8-16 characters and include, 1 Uppercase letter, 1 number , 1symbol"
    } else {
        msg.classList.remove('errMsg');
        msg.innerText ='';
    }           
};

function passwordConfirm() {
    const confirm = document.getElementById('confirm').value;
    const msg = document.getElementById('confirmMsg');
    const password = document.getElementById('password').value;
    if (password !== confirm) {
        msg.classList.add('errMsg');
        msg.innerText = "Does not match Password";
    } else {
        msg.classList.remove('errMsg');
        msg.innerText ='';
    }        
};

function checkForm() {
    const valid = document.querySelectorAll('.errMsg');
    if (valid.length > 0) {
        alert("invalid")
    } else {
        alert("valid");
    }
};

function reset() {
    const form = document.querySelector('form');
    form.reset();
}

