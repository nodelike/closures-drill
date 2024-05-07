const limitFunctionCallCount = require('../limitFunctionCallCount.js');

const limitedFunction = limitFunctionCallCount((a, b) => {
    return a * b;
}, 3);

console.log(limitedFunction(1, 2));
console.log(limitedFunction(2, 3));
console.log(limitedFunction(3, 4));