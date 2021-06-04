/**
 * It recieves an array of strings, integers and
 * array like itself.
 * Return the summary of all integers in it on * any level.
 *
 * @param {Array} elements
 * @returns {number} summary of all integers or 0 in other cases
 */
let temp = 0

function arraySum(arr) {
    if (!Array.isArray(arr) || !arr.flat(Infinity).length) {

        return 0


    }

    arr = arr.flat(Infinity)
    arr = arr.filter(a => Number.isInteger(a))
    return arr.reduce((a, b) => a + b)

    /*   arr.forEach(helper)
   
       sum = temp
       temp = 0
       return sum
   
   
   }
   function helper(a) {
       if (Number.isInteger(a)) {
           temp += a
       }
   
       else if (Array.isArray(a)) {
   
           temp = arraySum(a)
       }
   
   */
}

module.exports = arraySum;

