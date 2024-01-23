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
    let regexPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$/;
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

const themeChanger = document.getElementById('theme')
const svgPath = document.getElementById('svg-path')

const root = document.documentElement;
root.className = 'dark'

const darkTheme = "M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
const lightTheme = "M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
themeChanger.addEventListener('click', () =>{
    if(root.className == 'dark'){
        svgPath.setAttribute('d', lightTheme);
        root.className = 'light'
    }else{
        svgPath.setAttribute('d', darkTheme);
        root.className = 'dark'
    }
})