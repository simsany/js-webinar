/**
 * It recieves an array of strings and returns
 * the first longest string from it.
 * Also in the alphabetically first in case of more.
 *
 * @param {Array.<string>} strings
 * @returns {string} longest string or empty string in other cases
 */
function longestString(arr){
    if (arr.length<2 || !Array.isArray(arr)){
        return ""

    }

    let longest="";

    for (item of arr){
        if(typeof item == 'string'){

            if(!longest || longest.length < item.length || ((longest.length == item.length) && (item < longest)) ){

                longest = item



            }




        }



    }

    return longest

}

module.exports=longestString