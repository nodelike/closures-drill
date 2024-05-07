function limitFunctionCallCount(cb, n) {
    let count = 0;
  
    return function (...args) {
        try {
            if (count < n) {
                count++;
                return cb(...args);
            }
            return null;
        } catch (error) {
            console.log(`Error in counterFactory increment: ${error}`)
        }
    };
}
  
module.exports = limitFunctionCallCount;