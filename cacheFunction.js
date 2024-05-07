function cacheFunction(cb) {
    const cache = {};
  
    return function (...args) {
        try{
            const key = JSON.stringify(args);
            if (key in cache) {
                return cache[key];
            }
            const result = cb(...args);
            cache[key] = result;
            return result;
        } catch (error) {
            console.log(`Error in cache function: ${error}`);
        }
    };
}
  
module.exports = cacheFunction;