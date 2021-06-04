/**
 * It returns the camel-case version of string.
 * E.g.: simple lowercase string => SimpleLowercaseString
 *
 * @param {string} toConvert
 * @returns {string} camel-case string or empty string in other cases
 */

function toCamelCase(toConvert){
if (typeof toConvert != "string"){
return ""
}

charArray=toConvert.split(/[^a-zA-Z0-9]/).filter(a=> !!a)
converted=charArray[0].toLowerCase()
for(let i=1;i<charArray.length;i++){
    converted+=charArray[i].charAt(0).toUpperCase()+charArray[i].slice(1).toLowerCase()


}

return converted
}



module.exports=toCamelCase