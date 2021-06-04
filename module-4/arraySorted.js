/**
 * It determines, whether the given array is sorted in
 * alphabetically ascending order.
 * 
 * It ignores
 *  - case of the character
 *  - given special characters (nothing by default)
 *  - whitespaces
 * 
 * @param {string[]} items the subject items
 * @param {string} ignore characters to ignore
 * @returns {boolean} true if the array is properly sorted,
 *                    false otherwise
 */
const equal= require('./arrayEqual.js')
function arraySorted(items, ignore) {

    if (ignore) {
        for (char of ignore) {
        for (let item of items) {
                

                
                
                items[items.indexOf(item)]=item.split(char).join("")
            }
        }
    }

    for (let item of items){
        items[items.indexOf(item)] = String(item).toLowerCase()
        items[items.indexOf(item)]=String(item).replace(/[\t\n\s\r\f]/g,"")
        

    }
    
    for (let i=0;i<items.length-1;i++){
		if(items[i]>items[i+1]){
			return false
			
		}
		
		
	}
	return true
	//let compare=[...items]
    //compare.sort()
	
	
   
    //return equal(items,compare)


}

module.exports=arraySorted