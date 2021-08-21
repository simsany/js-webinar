/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let a=1;
    let b=1;
    let c=2;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (n < 0){
            return 0

    }
    if (n <= 2){
        return 1

}

    for(let i=3;i<n;i++){

        [a,b,c] =[b,c,b+c]

    }

 

	
    
   return c;
    // ...AND THIS COMMENT LINE!
    
}

module.exports = fibonacci;