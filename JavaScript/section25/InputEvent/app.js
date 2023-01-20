const h1 = document.querySelector('h1');
const input = document.querySelector('input');

input.addEventListener('input', function(e){
    h1.innerText = input.value;
    if(input.value === '') {
        h1.innerText = 'Enter Your Username';
    }
});