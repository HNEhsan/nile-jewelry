/**
 * Converts English numbers to Persian numbers in the DOM.
 * This function traverses all elements in the body and replaces English digits with Persian digits.
 * @param {string} str - The string containing English numbers to be converted.
 * @returns {string} - The string with Persian numbers.
 */
let convertToPersianNumbers = (str) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/\d/g, (match) => persianDigits[parseInt(match)]);
}

/**
 * Converts all English numbers in the DOM to Persian numbers.
 * This function is called when the DOM content is fully loaded.
 * It traverses all elements in the body and replaces English digits with Persian digits.
 * @returns {void}
 * @returns {void} 
*/
let persianNumber = () => {
    const elements = document.querySelectorAll('body *');
    elements.forEach(element => {
        if (element.childNodes.length) {
            element.childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE) {
                    child.nodeValue = convertToPersianNumbers(child.nodeValue);
                }
            });
        }
    });
}

// Export the function to be used in other files
export { persianNumber };