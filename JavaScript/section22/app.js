const numbers = [1,2,3,4,5];
const movies = [
    {
        title: "a",
        score: 100
    },
    {
        title: "b",
        score: 50
    },
    {
        title: "c",
        score: 60
    }
]

function print(element) {
    console.log(element);
}

numbers.forEach(print);

// 同じことがいかでできる
numbers.forEach(function (element) {
    console.log(element);
});

const doubles = numbers.map(function(num){
    return num * 2;
});

const add = (x,y) => {
    return x + y;
}

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score}`;
//})

const newMovies = movies.map(movie => 
    `${movie.title} - ${movie.score}`
);

setTimeout(() => {
    console.log("やっほー");
}, 3000);

const evenNumber = numbers.filter((num) =>{
    return num % 2 === 0;
});
const doubleEvenNumber = numbers.filter((num) =>{
    return num % 2 === 0;
}).map(num => num * 2);

const result = numbers.every(num => num > 4);

let total = 0;
for(number of numbers) {
    total += number;
}
console.log(total);

numbers.reduce((total1, num) => {
    return total1 + num;
});
