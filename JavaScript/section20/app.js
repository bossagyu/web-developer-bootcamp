function greet(firstName, lastName) {
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
    "aa".toUpperCase
}

function shout(message) {
        console.log(message.toUpperCase());
    for(let i=0; i < 3; i++)  {
        console.log(message.toUpperCase());
    }
}

function repeat(msg, count) {
    let result = "";
    for(let i = 0; i < count;i++) {
        result = result + msg;
    }
    console.log(result);
}

function add(num1, num2)  {
    return num1 + num2;
}