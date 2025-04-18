// import module 
import { creatMainFooter } from "./components/footer.js";
import { creatMainHeader } from "./components/header.js";
import { createProductCard } from "./components/productCard.js";
import { createShowMoreCard } from "./components/showMoreCard.js";
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

const initSwiperProduct = () => {
    new Swiper(".centered-slide-carousel", {
        slidesPerView: 1.1,
        spaceBetween: 16,
        loop: false,
        grabCursor: true,
        centeredSlides: false,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 3.2,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
};

// This file contains the code for the authentication page
window.onload = () => {

    // select elements from the DOM
    const tgjuScript = document.createElement('script');
    const containerBestSellerList = document.getElementById("BestSellerList");

    // ******************* //
    //   Call Fucntions    //
    // ******************* //
    creatMainHeader()
    creatMainFooter()
    persianNumber()
    initSwiper()
    initSwiperProduct();

    // set the src of the script to the tgju api
    // and append it to the body
    tgjuScript.src = 'https://api.tgju.org/v1/widget/v2';
    document.body.appendChild(tgjuScript);


    // sample data card
    const products = [
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: true
        },
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: true
        },
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: true
        },
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: true
        },
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: true
        },
        {
            image: "../assets/images/product.png",
            name: "انگشتر طلا نگین دار وِرساچو",
            price: "1,000,000 تومان",
            status: "موجود",
            type: "حلقه",
            available: false
        },
    ]

    // Append product cards
    products.forEach(product => {
        containerBestSellerList.appendChild(createProductCard(product));
    });

    // Append "Show More"
    containerBestSellerList.appendChild(createShowMoreCard("/products"));
}