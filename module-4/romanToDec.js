/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman) {
    let symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    if (roman.split('').some(a => !Object.keys(symbols).includes(a))) {
        throw new Error("Invalid input!");
    }

    let dec = 0;
    let previous = 0;
    roman.split('').forEach((element, index) => {
        switch (true) {
            case dec > 3999:
                throw new Error("Invalid input!");
    
            case symbols[element] < symbols[roman[index + 1]]:
                dec -= symbols[element];
                break;
    
            default:
                dec += symbols[element];
                break;
        }
    });
  
    return dec
}
console.log(romanToDec('MDXCI'))
module.exports = romanToDec



 /* for (let  of roman){
        if (!(previous < symbols[item])) {
            dec += symbols[item]
           
        }
        else {
           dec +=symbols[item]- previous
        }
        if (dec > 3999){
            throw new Error("Invalid input!");
        }
        previous = symbols[item]
    }*/