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
function arraySorted(items, ignore) {
    if (ignore) {
        for (char of ignore) {
            items = items.map((a) => a.replace(new RegExp(`[${char}]`, 'g'), ""));
        }
    }
    items = items.map((item) => String(item).toLowerCase().replace(/\s/g, ""));
    return items.every((item, index, arr) => !index || item >= arr[index - 1]);
}

module.exports = arraySorted