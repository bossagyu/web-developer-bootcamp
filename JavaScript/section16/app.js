console.log("こんにちは");

let rating = 6;
random = Math.floor(Math.random() * 10);

if(rating <= random) {
    console.log(`ratingが${rating}以上です。猛者。`);
}
else if (random >= 3) {
    console.log(`ratingが3以上です。並。`);
}
else {
    console.log(`ratingが3未満です。雑魚。`);
}
console.log(random);

// const password = prompt("パスワード");
// 
// if(password.length > 6) {
//     if(password.indexOf(" ") === -1) {
//         console.log("good password")
//     } else {
//         console.log("空白を含まない")
//     }
// } else {
//     console.log("パスワード短い");
// }

const day = 2;
switch (day) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;
    default:
        console.log("default");
}