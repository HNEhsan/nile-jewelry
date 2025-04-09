/**
 * @description This function retrieves the value of a specified cookie by its name.
 * @param {string} name - The name of the cookie to retrieve.
 * @return {string|null} The value of the cookie if found, otherwise null.
 */
let getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === name) {
                cookieValue = decodeURIComponent(value);
                break;
            }
        }
    }
    return cookieValue;
}

export { getCookie };