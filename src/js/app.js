// import module 
import { creatMainFooter } from "./component/footer.js";
import { creatMainHeader } from "./component/header.js";
import { persianNumber } from "./lib/persianNumber.js";

/**
 * Converts English numbers to Persian numbers in the DOM.
 * This function traverses all elements in the body and replaces English digits with Persian digits.
 * @param {string} str - The string containing English numbers to be converted.
 * @returns {string} - The string with Persian numbers.
 * @returns {Swiper} Swiper instance    
 */
const initSwiper = () => {
    return new Swiper(".vertical-slide-carousel", {
        loop: true,
        direction: "vertical",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        mousewheel: {
            releaseOnEdges: true,
        },
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".vertical-slide-carousel .swiper-pagination",
            clickable: true,
        },
    });
};


// This file contains the code for the authentication page
window.onload = () => {

    // select elements from the DOM
    const tgjuScript = document.createElement('script');

    // ******************* //
    //   Call Fucntions    //
    // ******************* //
    creatMainHeader()
    creatMainFooter()
    persianNumber()
    initSwiper()

    // set the src of the script to the tgju api
    // and append it to the body
    tgjuScript.src = 'https://api.tgju.org/v1/widget/v2';
    document.body.appendChild(tgjuScript);
}