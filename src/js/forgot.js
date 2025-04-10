// import module 
import { creatAuthFoorter } from "./component/footer.js";
import { handleCodeInputs } from "./lib/codeInputHandler.js";
import { getCookie } from "./lib/token.js";


// This file contains the code for the authentication page
window.onload = () => {

    // select elements from the DOM
    const emailSection = document.querySelector('[data-section="email"]');
    const verifySection = document.querySelector('[data-section="verify"]');
    const passwordSection = document.querySelector('[data-section="password"]');
    const btnForgot = document.getElementsByName("btnForgot")[0];
    const btnVerify = document.getElementsByName("btnVerify")[0];
    const showPasswordBtn = document.getElementById("showPassword");
    const passwordInputs = document.querySelectorAll("input[name='password']");
    const btnReset = document.getElementsByName("btnReset")[0];

    // ******************* //
    //   Call Fucntions    //
    // ******************* //
    // create the footer element and append it to the body
    creatAuthFoorter()
    handleCodeInputs()

    // add event listener to the start button
    // when the button is clicked, hide the welcome section and show the login section
    btnForgot.addEventListener("click", () => {
        emailSection.classList.add("hidden");
        verifySection.classList.remove("hidden");
    });

    // add event listener to the verify button
    // when the button is clicked, hide the verify section and show the password section
    btnVerify.addEventListener("click", () => {
        verifySection.classList.add("hidden");
        passwordSection.classList.remove("hidden");
    });

    // add event listener to the show password button
    // when the button is clicked, toggle the type of the password input between text and password
    showPasswordBtn.addEventListener("click", () => {
        // toggle the type of the password input between text and password
        passwordInputs.forEach((input) => {
            if (input.type === "password") {
                input.type = "text";
            } else {
                input.type = "password";
            }
        });
    });

    btnReset.addEventListener("click", () => {

        // Get the token from the cookie
        const token = getCookie("token");

        // Check if the token is present
        if (!token) {
            alert("لطفاً ابتدا وارد حساب کاربری خود شوید.");
            return;
        }
        // Get the password inputs
        const password1 = passwordInputs[0].value.trim();
        const password2 = passwordInputs[1].value.trim();

        if (!password1 || !password2) {
            alert("لطفاً هر دو فیلد رمز را پر کنید.");
            return;
        }

        if (password1 !== password2) {
            alert("رمز عبور و تکرار آن یکسان نیست.");
            return;
        }
    });

}