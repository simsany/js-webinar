/**
 * It returns the property names of the given object.
 * 
 * @param {object} o the object
 * @returns {string[]} the list of the properties of the object
 *                     or empty array if it is not an object
 */

function objectKeys(object){
    if(typeof object != 'object' || object == null){
 
        return []
    
    }


    
    return Object.keys(object)




}
module.exports = objectKeys