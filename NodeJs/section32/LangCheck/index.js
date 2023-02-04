const franc = require('franc');
const langs = require('langs');

const word = process.argv[2];


console.log(word);
console.log(franc(word));
console.log(langs.where("3", franc(word)));
