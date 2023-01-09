// デフォルト引数
function roleDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) +1;
}

function sum(x = 1, y = 2) {
    return x + y;
}

// yのデフォルト引数を使いたい場合
sum(1);

// 先頭(x)のデフォルト引数を使いたい場合
sum(undefined,3);

// スプレッド構文
const nums = [1, 2, 3, 4];
Math.max(...nums);
// 以下と同じ内容になる
Math.max(1,2,3,4);

// 配列を作る
const dog = ["pochi", "inu"];
const cat = ["mike", "tama"];

const dogCat = [...dog, ...cat];

// オブジェクトを展開する
const user = {
    id: 1244,
    name: "kohei"
}

const newUser = {...user, isVerified: true};
console.log(newUser);

// レスト構文
function sum2(...nums) {
    return nums.reduce((total, num) => {
        return total + num;
    })
}


// 分割代入
const[one, two] = nums;

// オブジェクトの分割代入

const {id, name: fullName, age = 20} = user;

//statusにはuserオブジェクトを渡すと分割代入される。
function status({id, name}) {
    console.log(`id:${id} name:${name}`);
}

// 分割代入は配列のメソッドにも使える
const user2 = [
    {
        id: 1244,
        name: "aaa"
    }, 
    {
        id: 1244,
        name: "bbbb"
    }
]

let use2Result = user2.map(({id, name}) => {
    return `${id}, ${name}`;
})