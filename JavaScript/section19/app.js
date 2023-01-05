// let input = prompt('なんか入力して');
// while(true) {
//     input = prompt(input);
//     if(input === "quit") { break;}
// }

// const testScores = {
//     shiro: 80,
//     rin: 100,
//     sakura: 67
// }

// for(let student of Object.keys(testScores)) {
//     console.log(`${student}さんは${testScores[student]}点です。`);
// }
// for(let student in testScores) {
//     console.log(`${student}さんは${testScores[student]}点です。`);
// }

let cmd = "";
let todoList = [];

while(cmd !== "quit") {
     cmd = prompt("コマンドを入力してください(new, list, delete, quit)");
    if (cmd === "new") {
        todo = prompt("新しいTodoを入力して下さい");
        todoList.push(todo);
        console.log(`${todo}を追加しました`);
        console.log(todoList);
    }
    else if (cmd === "list") {
        console.log("*************");
        for(let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log("*************");
    }
    else if (cmd === "delete") {
        let index = parseInt(prompt("削除するインデックスを入力してください"));
        while(!index) {
            if(index === 0) { break;}
             index = parseInt(prompt("削除するインデックスを数字で入力してください"));
        }
        let removeItem = todoList.splice(index,1);
        console.log(`「${removeItem}」を削除しました。`)
    }

}
