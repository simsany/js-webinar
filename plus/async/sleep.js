/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
 
 function sleep(sec){
	return new Promise((resolve, reject) => {  
    
    
    if(Number.isInteger(sec) ) {   
		sec= sec<=10?sec : 10
        setTimeout(resolve,sec*1000);  
    } else { 
		reject(new Error("Invalid input"))
          
    }
});
	 
	 
	 
 }
 
 module.exports=sleep