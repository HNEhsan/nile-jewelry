// import module 
import { creatAuthFoorter } from "./component/footer.js";
import { getCookie } from "./lib/token.js";

// This file contains the code for the authentication page
window.onload = () => {

    // select elements from the DOM
    const welcomeSection = document.querySelector('[data-section="welcome"]');
    const loginSection = document.querySelector('[data-section="login"]');
    const btnStart = document.getElementsByName("btnStart")[0];
    const form = document.querySelector("form");
    const showPasswordBtn = document.getElementById("showPassword");
    const passwordInput = document.querySelector("input[name='password']");

    // ******************* //
    //   Call Fucntions    //
    // ******************* //
    // create the footer element and append it to the body
    creatAuthFoorter()

    // add event listener to the start button
    // when the button is clicked, hide the welcome section and show the login section
    btnStart.addEventListener("click", () => {
        welcomeSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });

    // add event listener to the show password button
    // when the button is clicked, toggle the type of the password input between text and password
    showPasswordBtn.addEventListener("click", () => {
        // toggle the type of the password input between text and password
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPasswordBtn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            passwordInput.type = "password";
            showPasswordBtn.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });

    // add event listener to the login button
    // when the button is clicked, prevent the default form submission
    // and send a POST request to the server with the form data
    // if the response is ok, redirect to the profile page
    // if the response is not ok, show an error message
    form.addEventListener("submit", async (e) => {
        // prevent the default form submission
        // and prevent the page from reloading
        e.preventDefault();

        // get the CSRF token from the cookies
        // this is used to prevent CSRF attacks
        const csrfToken = getCookie("csrftoken");
        if (!csrfToken) {
            console.error("CSRF token not found.");
            alert("مشکلی در ارتباط با سرور پیش آمده است.");
            return;
        }

        // check if the form is valid
        // get the form data
        const formData = new FormData(form);
        const username = formData.get("username");
        const password = formData.get("password");

        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                body: JSON.stringify({
                    username,
                    password
                }),
            });

            const data = await res.json();

            if (res.ok) {
                // Login successful
                alert("ورود با موفقیت انجام شد.");
                window.location.href = "/profile"; // Redirect to profile page
            } else if (res.status === 401) {
                // Unauthorized error
                alert("نام کاربری یا رمز عبور اشتباه است.");
            } else {
                // Other errors
                // Handle other errors (e.g., server error, validation error)
                alert(data.message || "نام کاربری یا رمز عبور اشتباه است.");
            }

        } catch (err) {
            console.error("خطا در لاگین:", err);
            alert("مشکلی در ارتباط با سرور پیش آمده است.");
        }
    });
}