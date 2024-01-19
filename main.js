const userName = document.getElementById("name");

userName.addEventListener('input', () =>{
    if(/[\d]/.test(userName.value) || userName.value.length < 2){
        userName.classList.add('invalid-entry');
        console.log('invalid');
    }else{
        console.log('pass');
        userName.classList.remove('invalid-entry');
    }
});