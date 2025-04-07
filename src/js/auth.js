// This file contains the code for the authentication page
window.onload = () => {
    // select elements from the DOM
    const welcomeSection = document.getElementsByName("welcomeSection")[0];
    const loginSection = document.getElementsByName("loginSection")[0];
    const btnStart = document.getElementsByName("btnStart")[0];

    // add event listener to the start button
    // when the button is clicked, hide the welcome section and show the login section
    btnStart.addEventListener("click", () => {
        welcomeSection.classList.add("hidden");
        loginSection.classList.remove("hidden");
    });
}