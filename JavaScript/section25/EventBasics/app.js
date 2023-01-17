const btn = document.querySelector('button');

btn.onclick = function() {
    console.log("クリックした");
}

function scream() {
    console.log('aaaaaaa');
}

btn.onmouseenter = scream;

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('クリック');
})
