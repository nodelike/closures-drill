function counterFactory() {
    var x = 1;

    return {
        increment(){
            try {
                x++;
                return x;
            } catch (error) {
                console.log(`Error in counterFactory increment: ${error}`)
            }
        },
        decrement(){
            try {
                x--;
                return x;
            } catch (error) {
                console.log(`Error in counterFactory decrement: ${error}`)
            }
        }
    }
}

module.exports = counterFactory;