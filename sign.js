let inputs = document.querySelectorAll("input")
let button = document.querySelector('.send');
let regex  = /[a-zA-Z0-9]+@{1}[a-z]+.{1}[a-zA-Z]{6}/
document.querySelector("form").addEventListener('submit', (e)=>{
   for(let input of inputs){ 
        if((input.type =='text' || input.type =='password' || input.type == 'email' )&& !input.value){
            e.preventDefault();
            input.nextElementSibling.textContent = `${input.placeholder} cannot be empty`;
            input.classList.add("input");
            input.placeholder = " ";
            button.disabled = true;
        }else{
            button.disabled = false; 
        }
        if(input.type == 'email' || inputs.value == " "){
            input.placeholder = "email@gmail.com ";
            input.style.color = 'red'
            e.preventDefault();
            if(regex.test(input.value) == false){
                input.nextElementSibling.textContent = `Look like this is not an email`;
                input.classList.add("input")
            }
        }
   }
} )