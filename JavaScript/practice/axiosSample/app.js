const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get('http://localhost:8080/v1/stocks');
        return res;
    } catch (e) {
        console.log('問題がおきました', e);
    }
}



async function getData() {
    const li = document.querySelector('#stock-list');
    const stocks = await fetchBitcoinPrice();
    console.log(stocks.data.stocks[0]);
    for (let val of stocks.data.stocks) {
        const ul = document.createElement('ul');
        console.log(val.name);
        ul.innerText = val.name;
        li.appendChild(ul)
    }
}

getData();