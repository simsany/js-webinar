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
function arrayEqual(first,second){
if(first.length != second.length){
    console.warn(`The length of the two array are different first: ${first.length}, second: ${second.length} `)
    return false

}
let isEqual=true
first=first.flat(Infinity)
second=second.flat(Infinity)
for(let i=0;i<first.length;i++){
if(first[i] !== second[i] ){
    isEqual=false
    console.warn(`${first[i]} is not equal to ${second[i]}`)




}



}

return isEqual


}

module.exports = arrayEqual;