// import module 
import { creatAuthFoorter } from "./component/footer.js";
import { getCookie } from "./lib/token.js";

// This file contains the code for the authentication page
window.onload = () => {

    // select elements from the DOM
    const showPasswordBtn = document.getElementById("showPassword");
    const passwordInput = document.getElementsByName("password");

    // ******************* //
    //   Call Fucntions    //
    // ******************* //
    // create the footer element and append it to the body
    creatAuthFoorter()


    // add event listener to the show password button
    // when the button is clicked, toggle the type of the password input between text and password
    showPasswordBtn.addEventListener("click", () => {
        // toggle the type of the password input between text and password
        passwordInput.forEach((input) => {
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        });
    });

}