/**
 * It determines, whether the given two arrays
 * are equal, by considering the number of elements,
 * those order and value, in all levels.
 * 
 * It prints out a message in case of any
 * difference in any array, using console.warn!
 * 
 * @param {Array} first The first array
 * @param {Array} second The second array
 * @returns {boolean} true if the two arrays are equal,
 *                    false otherwise
 */

function arrayEqual(first, second) {
    return  first.length !== second.length ? 
            console.warn(`The length of the two array are different first: ${first.length}, second: ${second.length}`) || false 
            :first.flat(Infinity).map(isEqual,second.flat(Infinity)).every(Boolean);        
}
function isEqual(item,index,arr){  
    return item === this[index] || console.warn(`${item} is not equal to ${this[index]}`);
}

module.exports = arrayEqual;

/*function arrayEqual(first, second) {
    return  warnIfNotEqual(first,second);
}
function warnIfNotEqual(first,second){
    let text = `The length of the two array are different first: ${first.length}, second: ${second.length}`;
    return first.length !== second.length ? console.warn(text) || false : 
           first.flat(Infinity).map(isEqual,second.flat(Infinity)).every(Boolean);
}
function isEqual(item,index,arr){  
    return arr[index] === this[index] || console.warn(`${arr[index]} is not equal to ${this[index]}`);    
}*/

