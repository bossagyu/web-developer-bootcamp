//mouth event
document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt);
});

// keyboardevent
const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code);
})

// どこで入力されても取れる
window.addEventListener('keydown', function(e) {
    console.log(e.key);
    console.log(e.code);
})