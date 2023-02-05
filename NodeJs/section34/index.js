const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.listen(3000, () => {
    console.log('ポート3000で待受中');
})