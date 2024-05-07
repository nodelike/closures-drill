function counterFactory() {
    var count = 1;

    return {
        increment(){
            try {
                count++;
                return count;
            } catch (error) {
                console.log(`Error in counterFactory increment: ${error}`)
            }
        },
        decrement(){
            try {
                count--;
                return count;
            } catch (error) {
                console.log(`Error in counterFactory decrement: ${error}`)
            }
        }
    }
}

module.ecountports = counterFactory;