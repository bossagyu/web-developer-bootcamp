
const deleydColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
            return
        }, delay);
    });
}
async function rainbow() {
    await deleydColorChange('red', 1000);
    await deleydColorChange('green', 1000);
    await deleydColorChange('blue', 1000);
    await deleydColorChange('white', 1000);
    await deleydColorChange('yellow', 1000);
}
rainbow();