$(function(){
    "use strict"
    $('#info').click(function(){
        $('#info_box').toggleClass('open');
    });
});

$(function(){
    "use strict"
    $('#info_box').click(function(){
        $('#info_box').toggleClass('open');
    });
});

const form = document.getElementById('form');
const username = document.getElementById('username');
const phoneNumber = document.getElementById('phone');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const phonenumberValue = phoneNumber.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Error message');
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'please enter your email');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else{
        setSuccessFor(email);
    }

    if (phonenumberValue === ''){
        setErrorFor(phone, 'please enter correct number');
    } else if(!isNumber(phonenumberValue)){
        setErrorFor(phone, 'please enter correct number');
    } else {
        setSuccessFor(phone);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-area error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-area success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNumber(phone){
    return /^((8|\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
}
 
$(function spinner() {
    $(document).on('click', 'button.btn', function() {
    var $button = $(this);
    $button.removeClass('added').addClass('disabled').attr('disabled', 'disabled');
    setTimeout(function () {
        $button.removeClass('disabled').addClass('added').removeAttr('disabled');
        $('.form-header').css('display','none');
        $('.form-success').css('display','block');
    }, 3000);
    });
});

document.getElementById('click').onclick = checkInputs;

function offSuccess() {
 $('.form-success').css('display','none');
};