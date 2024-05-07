const counterFactory = require("./../counterFactory.js");

let counter = counterFactory();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());
