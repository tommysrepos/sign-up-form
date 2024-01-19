const userName = document.getElementById("name");

userName.addEventListener('input', () =>{
    if(/[\d]/.test(userName.value) || userName.value.length < 2){
        userName.classList.add('invalid-entry');
    }else{
        userName.classList.remove('invalid-entry');
    }
});

const userEmail = document.getElementById("email");
userEmail.addEventListener('input', () =>{
    let regexPattern = /.+@.+/;
    if(regexPattern.test(userEmail.value)){
        userEmail.classList.remove('invalid-entry')
    }else{
        userEmail.classList.add('invalid-entry');
    }
})

const userPassword = document.getElementById('password');

const passwordMeter = document.getElementsByClassName('password-strength');

const weakPassword = document.getElementById('weak-password');
const mediumPassword = document.getElementById('medium-password');
const goodPassword = document.getElementById('good-password');
const greatPassword = document.getElementById('great-password');

userPassword.addEventListener('focus', () =>{
    for(i=0;i<passwordMeter.length; i++){
        passwordMeter[i].removeAttribute('hidden');
    }
})

userPassword.addEventListener('input', () =>{
    let regexWeak = /.*[a-z].*/;
    let regexMedium = /.*[a-z].*\d.*|.*\d.*[a-z].*/;
    let regexGood = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+/;
    let regexGreat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[)!@#$%^&*(_+{}[\]:;<>,.?~\\/-]).*/;
    
    if(regexWeak.test(userPassword.value)){
        weakPassword.classList.add('weak');
        userPassword.classList.add('invalid-entry');
    }else{
        weakPassword.classList.remove('weak');
    }

    if(regexWeak.test(userPassword.value) && regexMedium.test(userPassword.value)){
        mediumPassword.classList.add('medium');
    }else{
        mediumPassword.classList.remove('medium');
    }

    if(regexWeak.test(userPassword.value) && regexMedium.test(userPassword.value) && regexGood.test(userPassword.value)){
        goodPassword.classList.add('good');
        userPassword.classList.remove('invalid-entry');
    }else{
        goodPassword.classList.remove('good');
    }

    if(regexWeak.test(userPassword.value) && regexMedium.test(userPassword.value) && regexGood.test(userPassword.value) && regexGreat.test(userPassword.value)){
        greatPassword.classList.add('great');
    }else{
        greatPassword.classList.remove('great');
    }
})

const userConfirmPassword = document.getElementById('confirm-password')

userConfirmPassword.addEventListener('input', () =>{
    if(userConfirmPassword.value !== userPassword.value){
        userConfirmPassword.classList.add('invalid-entry');
        document.getElementById('submit').disabled = true;
    }else{
        userConfirmPassword.classList.remove('invalid-entry');
        document.getElementById('submit').disabled = false;
    }
})