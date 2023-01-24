// fetch('https://api.cryptonator.com/api/ticker/btc-jpy')
//     .then(res => {
//         console.log('レスポンスヘッダーが手に入りました。次にパースします...', res);
//         return res.json();
//     })
//     .then(data => {
//         console.log('パース完了！！');
//         console.log(data.ticker.price);
//     })
//     .catch(e => {
//         console.log('問題が起きました', e);
//     })

const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.crypsdfdtonator.com/api/ticker/btc-jpy');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log('問題が起きました', e);
    }
}