/**
 * @returns {HTMLElement}
 * @description This function creates a footer element with copyright information and a link to the website.
 * The footer is styled with Tailwind CSS classes and contains a paragraph and a link.  
 */
let creatAuthFoorter = () => {
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = `
        <div class="flex justify-center items-center text-gray-400 sm:text-sm text-xs">
            <p> تمام حقوق مادی و معنوی برای </p>
            <h1 class="font-bold golden px-2">
                <a href="#" class="text-amber-300 hover:text-yellow-500 transition duration-200">
                    جواهری نیل
                </a>
            </h1>
            <p> می باشد &copy; </p>
        </div>
    `;
    return footer;
}

/**
 * @returns {HTMLElement}
 * @description This function creates a footer element with copyright information and a link to the website.
 * The footer is styled with Tailwind CSS classes and contains a paragraph and a link. 
 * The footer is designed for the main page and includes additional information such as social media links, address, and contact information.
 * The footer is responsive and adjusts its layout based on the screen size.
 */
let creatMainFooter = () => {
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML =
     `        
        <div class="w-full bg-black flex-col px-4 py-8 gap-4 rounded-lg shadow-lg mt-8">
            <!-- Body -->
            <div class="hidden lg:flex justify-between text-gray-700">

                <!-- Credit and Link and Agreements -->
                <div class="flex gap-8 mr-4">

                    <!-- Credit Support -->
                    <div class="flex flex-col items-center">
                        <p class="border-b-2 border-yellow-300 px-4 py-1 text-white">
                            امکان خرید قسطی و اعتباری
                        </p>
                        <img src="../assets/images/azki.png" alt="AZKI" class="w-36 h-36 mt-2 mb-2">
                        <img src="../assets/images/digikala.png" alt="DIGIKALA" class="w-36 h-36">
                    </div>
                    <!--  -->

                    <!-- Social Link -->
                    <div class="flex flex-col items-center gap-8">

                        <p class="border-b-2 border-yellow-300 px-4 py-1 text-white">
                            صفحات مجازی ما
                        </p>

                        <i class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
                                <path stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                    d="M34.458 2.125H13.542c-6.306 0-11.417 5.111-11.417 11.417v20.916c0 6.306 5.111 11.417 11.417 11.417h20.916c6.306 0 11.417-5.111 11.417-11.417V13.542c0-6.306-5.111-11.417-11.417-11.417Z" />
                                <path stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"
                                    d="M24 35.458c6.328 0 11.458-5.13 11.458-11.458S30.328 12.54 24 12.54 12.542 17.671 12.542 24c0 6.328 5.13 11.458 11.458 11.458Z" />
                                <path fill="#D4AF37" stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round"
                                    d="M36.5 10.458a1.042 1.042 0 1 0 0-2.083 1.042 1.042 0 0 0 0 2.083Z" />
                            </svg>
                        </i>

                        <i class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none">
                                <g stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round" clip-path="url(#a)">
                                    <path stroke-width="4"
                                        d="M25 1.042A23.958 23.958 0 0 0 5.125 38.375L1.042 48.958l10.896-3.896A23.958 23.958 0 1 0 25 1.042Z" />
                                    <path fill="#D4AF37"
                                        d="M19.792 30.208c2.708 2.709 8.687 6.25 11.458 6.25a5.27 5.27 0 0 0 5.208-4.166v-2.084s-2.562-1.25-4.166-2.083c-1.604-.834-4.167 2.083-4.167 2.083a13.585 13.585 0 0 1-5.208-3.125 13.583 13.583 0 0 1-3.125-5.208s2.916-2.563 2.083-4.167a237.128 237.128 0 0 1-2.083-4.166h-2.084a5.27 5.27 0 0 0-4.166 5.208c0 2.77 3.542 8.75 6.25 11.458Z" />
                                </g>
                                <defs>
                                    <clipPath id="a">
                                        <path fill="#fff" d="M0 0h50v50H0z" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </i>

                        <i class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none">
                                <path fill="#D4AF37"
                                    d="M25 47.917a22.917 22.917 0 1 1 0-45.833 22.917 22.917 0 0 1 0 45.833Zm0-43.969A21.052 21.052 0 1 0 46.052 25 21.073 21.073 0 0 0 25 3.948Z" />
                                <path fill="#D4AF37"
                                    d="m9.646 24.177 18.479-7.594c1.823-.791 7.99-3.323 7.99-3.323s2.854-1.104 2.614 1.584c-.083 1.104-.708 4.979-1.344 9.177l-2.03 12.437s-.157 1.802-1.5 2.084c-1.345.28-3.563-1.042-3.96-1.396-.395-.355-5.937-3.813-8.02-5.532a1.5 1.5 0 0 1 .083-2.53c2.844-2.615 6.25-5.855 8.334-7.918.947-.947 1.895-3.125-2.084-.468l-11.125 7.51a4.678 4.678 0 0 1-3.645.084c-2.365-.72-5.105-1.667-5.105-1.667s-1.896-1.188 1.344-2.448h-.031Z" />
                            </svg>
                        </i>

                    </div>
                    <!--  -->

                    <!-- Agreements -->
                    <div class="flex flex-col items-center gap-8">
                        <p class="border-b-2 border-yellow-300 px-4 py-1 text-white">
                            مجوزها و نمادها
                        </p>
                        <img src="../assets/images/enamad.png" alt="ENAMAD" class="w-32 h-32 mt-2 mb-2">
                    </div>
                    <!--  -->

                    <!-- Related Link -->
                    <div class="flex flex-col items-center gap-8 text-white">
                        <p class="border-b-2 border-yellow-300 px-4 py-1">
                            لینک های مرتبط
                        </p>
                        <a href="#" class="hover:text-yellow-300 transition-all duration-300">
                            انگشتر
                        </a>
                        <a href="#" class="hover:text-yellow-300 transition-all duration-300">
                            دستبند
                        </a>
                        <a href="#" class="hover:text-yellow-300 transition-all duration-300">
                            گوشواره
                        </a>
                        <a href="#" class="hover:text-yellow-300 transition-all duration-300">
                            گردنبند
                        </a>
                    </div>
                    <!--  -->

                </div>
                <!--  -->

                <!-- Address and Location -->
                <div class="flex flex-col items-center gap-4 ml-4">

                    <!-- Map -->
                    <div class="flex justify-center items-center gap-4 mb-4 mt-4">
                        <img src="../assets/images/map.png" alt="MAP" class="w-72 h-72 cursor-pointer">
                    </div>
                    <!--  -->

                    <!-- Tel -->
                    <div class="w-full flex justify-end items-center gap-4">
                        <a href="tel:02144444444" class="hover:text-yellow-300 transition-all duration-300">
                            021-44444444
                        </a>
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                viewBox="0 0 60 60">
                                <path fill="#D4AF37" stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M11.25 6.375h3.43a2.063 2.063 0 0 1 1.95 1.397l.05.165 2.765 11.057v.001a2.06 2.06 0 0 1-.643 2.052l-.12.097-.002.002-3.233 2.424c-1.107.83-1.661 2.251-1.29 3.613l.086.27v.001a30.836 30.836 0 0 0 6.555 10.565l.584.6a30.838 30.838 0 0 0 10.383 6.838l.78.3c1.351.496 2.805.041 3.71-.99l.175-.214 2.425-3.233h0a2.06 2.06 0 0 1 1.998-.797l.153.032 11.057 2.765a2.06 2.06 0 0 1 1.562 2v3.43a4.876 4.876 0 0 1-1.26 3.273l-.168.174a4.876 4.876 0 0 1-3.447 1.428h-5.625c-20.296 0-36.75-16.454-36.75-36.75V11.25l.006-.242a4.876 4.876 0 0 1 1.255-3.03l.167-.175c.857-.857 2-1.362 3.205-1.422l.242-.006Z" />
                            </svg>
                        </i>
                    </div>
                    <!--  -->

                    <!-- Address -->
                    <div class="w-full flex justify-start items-center gap-4">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"
                                viewBox="0 0 32 40">
                                <path fill="#D4AF37" stroke="#D4AF37" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5"
                                    d="M15.625.75c3.822 0 7.492 1.47 10.254 4.099l.265.257A14.875 14.875 0 0 1 30.5 15.625c0 7.164-3.762 12.846-7.599 16.774a38.488 38.488 0 0 1-5.267 4.48c-.718.508-1.315.893-1.73 1.148-.105.065-.199.118-.279.166-.08-.048-.174-.101-.278-.166a33.209 33.209 0 0 1-1.73-1.147 38.486 38.486 0 0 1-5.268-4.48C4.512 28.47.75 22.79.75 15.624c0-3.822 1.47-7.492 4.099-10.254l.257-.265A14.875 14.875 0 0 1 15.625.75Z" />
                                <path fill="#fff" d="M21.875 15.625a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Z" />
                            </svg>
                        </i>
                        <address class="not-italic text-sm">
                            خیابان ..... نباش کوچه ....... پلاک ......
                        </address>
                    </div>
                    <!--  -->
                </div>
                <!--  -->

            </div>
            <!--  -->

            <!-- CopyRight -->
            <div class="flex justify-center items-center rounded-lg text-gray-400 sm:text-sm text-xs">
                <p> تمام حقوق مادی و معنوی برای </p>
                <h2 class="font-bold text-xl golden px-2">
                    <a href="#" class="text-amber-300 hover:text-yellow-500 transition duration-200">
                        جواهری نیل
                    </a>
                </h2>
                <p> می باشد © </p>
            </div>
            <!--  -->

        </div>
        `;
    return footer;
}

// export  creatAuthFoorter, creatMainFooter;
export { creatAuthFoorter, creatMainFooter };