/**
 * It reverses the given object, i.e. return a copy of the object 
 * where the keys have become the values and the values the keys
 * 
 * @param {object} o the object
 * @returns {object} the new object
 */

 function reversePairs(object,key){
    if(typeof object != 'object' || object == null){
 
        throw new Error("It's not an object");
    
    
    }


    let modifiedObject={...object}
    for(let key in modifiedObject){
        
        modifiedObject[modifiedObject[key]]=key
        delete modifiedObject[key]



    }
    
    
    return modifiedObject
    
    




}
module.exports = reversePairs