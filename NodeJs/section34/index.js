const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/rand', (req, res) => {
    const num = Math.floor((Math.random() * 10) + 1);
    console.log(num);
    res.render('rand', {random: num});
})

app.listen(3000, () => {
    console.log('ポート3000で待受中');
})