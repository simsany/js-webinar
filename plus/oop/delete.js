/**
 * It deletes the given property of the given object
 * and returns the new object.
 * The function must not modify the original object!
 * 
 * @param {object} o the object
 * @param {string} key the name of the property to delete
 * @returns {object} the new object without the given property
 */
function deleteProperty(object,key){
    if(typeof object != 'object' || object == null){
 
        throw new Error("It's not an object");
    
    
    }


    let modifiedObject={...object}
    delete modifiedObject[key]
    return modifiedObject
    
    




}
module.exports = deleteProperty