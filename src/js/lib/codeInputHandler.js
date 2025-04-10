
/**
 * * Function to create the footer element and append it to the body
 */
let handleCodeInputs = () => {

    // select the inputs with data-code attribute
    // and convert the NodeList to an array
    const inputs = Array.from(document.querySelectorAll('input[name=code]')).reverse();

    // add event listeners to each input element
    inputs.forEach((input, index) => {
        input.addEventListener("input", (e) => {
            // remove any non-numeric characters from the input value
            // and set the input value to the cleaned value
            let value = e.target.value.replace(/[^0-9]/g, "");
            e.target.value = value;

            // if the input value is not empty and the index is not the last input element
            // focus on the next input element
            if (value && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        // if the input value is empty and the index is not the first input element
        // focus on the previous input element
        input.addEventListener("keydown", (e) => {
            if (e.key === "Backspace" && !e.target.value && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    // focus on the first input element when the page loads
    inputs[0].focus();
}


export { handleCodeInputs };