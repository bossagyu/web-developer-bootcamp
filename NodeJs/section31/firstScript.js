const fs = require('fs');

// fs.mkdir('/tmp/aa', {recursive: true}, (err) => {
    // console.log('im callback');
// })

fs.mkdirSync('/tmp/bbb')
fs.writeFileSync('/tmp/bbb/index.html', 'aaaa')

for(let i = 0; i < 10; i++) {
    console.log('Node.jsからこんにちは');
}

console.log(process.argv);
const args = process.argv.slice(2);
for(let arg of args) {
    console.log(arg);
}

