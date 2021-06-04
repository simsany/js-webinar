/**
 * It recieves a Roman number (as string)
 * and converts it to it's Arabic (decimal) equivalent.
 *
 * @see https://en.wikipedia.org/wiki/Roman_numerals
 * @param {string} roman
 * @returns {number} the Arabic (decimal) equivalent of the parameter
 * @throws Error in case of invalid input
 */

function romanToDec(roman){


    let symbols={
                    'I' : 1,
                    'V' : 5,
                    'X' : 10,
                    'L' : 50,
                    'C' : 100,
                    'D' : 500,
                    'M' : 1000
}

if(roman.split('').some(a=>!Object.keys(symbols).includes(a)) ){
    
    throw new Error("Invalid input!");



}

let dec=0;
let previous=0;
for (item of roman){
    
    if(previous<symbols[item]){
        dec+= symbols[item]- 2*previous


    }
    else{


        dec+= symbols[item]

    }
    if(dec > 3999){
        throw new Error("Invalid input!");


    }
    previous=symbols[item]




}




return dec
}

module.exports=romanToDec