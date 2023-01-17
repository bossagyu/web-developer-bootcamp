const btn1 = document.querySelector('#randomColor');
const h1 =  document.querySelector('h1');

const randomNumber = () => (
    Math.floor(Math.random() * 256)
);

btn1.addEventListener('click', () => {
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();
    const newColor = `rgb(${r}, ${g}, ${b})`;

    h1.innerText = newColor;
    document.body.style.backgroundColor =  newColor;
    if(r + g + b < 400) {
        h1.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
    }

});

