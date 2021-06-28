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
function arraySorted(items, ignore="") {
    return  items.map(word => word.toString().replace(new RegExp(`[${ignore}]`, 'g'), "")).map((item) => String(item).toLowerCase().replace(/\s/g, "")).every((item, index, arr) => !index || item >= arr[index - 1])
}

module.exports = arraySorted