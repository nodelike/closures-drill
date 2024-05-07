const cacheFunction = require('../cacheFunction.js');

const cachedFunction = cacheFunction((a, b) => {
    return a + b;
});

console.log(cachedFunction(1, 2));
console.log(cachedFunction(1, 2));
console.log(cachedFunction(2, 3));