function collect() {
    let total = 6;
}

function scopeTest() {
    let message1 = "hello";
    function hello() {
        console.log(message1);
    }
    // helloが出力される
    hello();
}

let message2 = "hello";
function func1() {
    console.log(message2);
}
function func2() {
    let message2 = "world";
    func1();
}
// helloが表示される
func1();

// worldではなくhelloが表示される
// レキシカルスコープはコードの記載された順序に依存する
func2();


// 関数式
const add = function(x, y) {
    return x + y;
}

// 高階関数
function callTwice(func) {
    func();
    func();
}

let greet = function() {
    console.log("hello callTwice");
}
callTwice(greet);

function makeRandomFunc() {
    let rand = Math.random(); 
    if (rand > 0.5) {
        return function() {
            console.log("おめでとう");
        }
    }
    else {
        return function() {
            console.log("はずれ");
        }
    }
}
let resultFunc = makeRandomFunc();
resultFunc();

// メソッド
const myMath = {
    PI: 3.14,
    suqure: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}
myMath.suqure(2);

const myMath2 = {
    PI: 3.14,
    suqure(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}
myMath2.suqure(2);


const cat = {
    name: 'tama',
    color: 'grey',
    cry() {
        console.log(`${this.name}がにゃーとなきました`);
    }
}
cat.cry();
const cry2 = cat.cry;
cry2();

try {
    hello.toUpperCase();
} catch(e){
    console.log(e);
    console.log("error");
}

