const pass = document.querySelectorAll('input[type="password"]');
const checkBox = document.querySelector('input[type="checkbox"]');

let checker = true;
checkBox.addEventListener('change',()=>{
    if(checker){
        for(let i of pass){
            i.type = 'text'
        }
        checker = false;
    }
    else{
        for(let i of pass){
            i.type = 'password';
        }
        checker = true;
    }
    console.log(checker);
})
