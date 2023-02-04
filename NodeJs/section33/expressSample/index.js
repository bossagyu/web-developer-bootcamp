const express = require('express');
const app = express();

// app.use((req, res)=> {
//     console.log('リクエストを受付マシア');
//     console.log(req)
//     res.send('response')
// })

// expressのルーティングは上から見ていく

app.get('/cats', (req, res) => {
    res.send('にゃー');
});

app.get('/dogs', (req, res) => {
    res.send('わんわん');
})

app.post('/dogs', (req, res) => {
    res.send('わんわん');
})

app.get('/', (req, res) => {
    res.send('home');
})

app.get('/r/:animal', (req, res) => {
    console.log(req.params)
    res.send(`${req.params.animal}のページです`);
})

app.get('*', (req, res) => {
    res.send('そんなパスはありません');
})

app.listen(3000, () => {
    console.log('aaa');
})
