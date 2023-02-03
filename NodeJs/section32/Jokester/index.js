const jockes = require('give-me-a-joke');
const colors = require('colors');
console.log(jockes);

jockes.getRandomDadJoke(joke =>  {
    console.log(joke.rainbowt);
})