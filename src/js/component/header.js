/**
 * @returns {HTMLElement}
 * @description This function creates a header element with copyright information and a link to the website.
 * The header is styled with a black background and white text.
 * The header is responsive and will adjust its layout based on the screen size. 
 */
let creatMainHeader = () => {
    const header = document.getElementsByTagName("header")[0];
    header.innerHTML =
        `
        <!-- Desktop Navbar -->
        <div
            class="container 2xl:min-w-lg hidden lg:flex bg-black absolute top-0 shadow-lg rounded-lg items-center mb-8 p-4 gap-4">

            <!-- Logo -->
            <div class="flex flex-col justify-center items-center gap-3">
                <img src="../assets/images/favicon.svg" alt="Logo"
                    class="w-40 h-36 hover:scale-110 transition-all duration-300 cursor-pointer">
            </div>
            <!--  -->

            <!-- Account and Menu -->
            <div class="w-full flex justify-between items-center gap-4">

                <!-- Menu List -->
                <nav class="flex gap-4 mr-8">
                    <a href="#" class="text-gray-400 hover:text-yellow-300">انگشتر</a>
                    <a href="#" class="text-gray-400 hover:text-yellow-300">گردنبند</a>
                    <a href="#" class="text-gray-400 hover:text-yellow-300">دستبند</a>
                    <a href="#" class="text-gray-400 hover:text-yellow-300">گوشواره</a>
                    <a href="#" class="text-gray-400 hover:text-yellow-300">ابزار محاسبات طلا</a>
                </nav>
                <!--  -->

                <!-- Account -->
                <div class="flex justify-center gap-10 ml-8">

                    <div class="cursor-pointer flex justify-center items-center border bg-gray-700 border-gray-600 placeholder-gray-400 rounded-lg gap-3"
                        data-section="search">

                        <!-- Icon -->
                        <i class="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                aria-hidden="true" class="text-gray-500 dark:text-gray-400">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </i>
                        <!--  -->

                        <input type="search" id="search-input" name="search" aria-label="search"
                            class="px-2 py-2 text-sm text-white ring-0 border-none focus:border-none focus:ring-0 focus:outline-none"
                            placeholder="نام محصول ..." required />
                    </div>

                    <a href="#" class="ml-4 cursor-pointer hidden">
                        <i class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
                                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M22.338 13.692V6.77c0-1.53-.668-2.997-1.856-4.08C19.294 1.609 17.682 1 16.001 1s-3.293.608-4.482 1.69c-1.188 1.082-1.856 2.55-1.856 4.08v6.922m19.192-3.066 2.134 18.462C31.108 30.11 30.23 31 29.1 31H2.902c-.266 0-.53-.05-.774-.15a1.906 1.906 0 0 1-.64-.422 1.7 1.7 0 0 1-.396-.624 1.585 1.585 0 0 1-.083-.716l2.137-18.462c.049-.425.27-.819.619-1.105.349-.286.802-.444 1.272-.444h21.926c.973 0 1.79.67 1.89 1.55Zm-18.558 3.066c0 .153-.067.3-.186.408a.667.667 0 0 1-.448.17.667.667 0 0 1-.448-.17.552.552 0 0 1-.185-.408c0-.153.066-.3.185-.408a.667.667 0 0 1 .448-.169c.168 0 .33.061.448.17a.552.552 0 0 1 .186.407Zm12.675 0c0 .153-.067.3-.186.408a.667.667 0 0 1-.448.17.667.667 0 0 1-.448-.17.552.552 0 0 1-.186-.408c0-.153.067-.3.186-.408a.667.667 0 0 1 .448-.169c.168 0 .33.061.448.17a.552.552 0 0 1 .186.407Z" />
                            </svg>
                            <div class="relative cbg_golden w-8 h-8 rounded-full flex justify-center items-center -top-14 -right-6 text-center"
                                aria-label="checkout">
                                0
                            </div>
                        </i>
                    </a>

                    <a href="auth-login.html" class="cursor-pointer">
                        <i>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff" class="hover:stroke-[#D4AF37]">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M25.97 27.208A12.478 12.478 0 0 0 16 22.25a12.48 12.48 0 0 0-9.97 4.958m19.94 0a14.998 14.998 0 0 0 4.05-16.54 15 15 0 1 0-23.99 16.54m19.94 0A14.947 14.947 0 0 1 16 31a14.944 14.944 0 0 1-9.97-3.792M21 12.25a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" />
                            </svg>
                        </i>
                    </a>
                </div>
                <!--  -->
            </div>

            <!-- Dynamic widget -->
            <div class="w-full mx-auto absolute right-0 top-36 mb-4 mt-4">
                <tgju type="ticker-tap" items="137121,137122,391292,391295,391293" columns="dot" speed="20" styles='{
                    "background": "#000000",
                    "hover": "#070d25",
                    "border": "#d4af37",
                    "separator": "#b8cbff",
                    "dot": "#d4af37",
                    "title": "#ffffff",
                    "price": "#ffffff",
                    "high": "#d4af37",
                    "copyright": "#000000",
                    "copyright_fix": "#d4af37",
                    "copyright_fix_text": "trasnparent"}' token="webservice">
                </tgju>
            </div>
            <!--  -->

        </div>
        <!--  -->

        <!-- Mobile Navbar -->
        <div class="lg:hidden w-ful mx-auto mb-6 flex justify-center items-center">

            <!-- Logo -->
            <div class="flex flex-col justify-center items-center gap-3 mb-4">
                <img src="../assets/images/favicon.svg" alt="Logo"
                    class="w-40 h-36 hover:scale-110 transition-all duration-300 cursor-pointer">
                <h1 class="font-bold text-xl text-gray-400"> گالری طلا و جواهر نیل </h1>
            </div>
            <!--  -->

            <!-- Menu List -->
            <div class="fixed bottom-0 left-0 right-0 bg-black p-4 flex justify-center items-center z-100">
                <nav class="flex gap-4 mr-4 z-100">

                    <div class="flex justify-center items-center gap-2">
                        <i class="active">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#D4AF37">
                                >
                                <path stroke-linecap="round"
                                    d="M29.333 29.333H2.667M2.667 14.667 13.5 5.999a4 4 0 0 1 4.998 0l10.834 8.668M20.666 7.333V4.667c0-.369.299-.667.667-.667h3.334c.368 0 .666.298.666.667v6.666M5.333 29.333V12.667M26.666 29.333V12.667" />
                                <path
                                    d="M20 29.333v-6.666c0-1.886 0-2.829-.586-3.415-.586-.585-1.528-.585-3.414-.585-1.886 0-2.828 0-3.414.585-.586.586-.586 1.53-.586 3.415v6.666M18.667 12.667a2.667 2.667 0 1 1-5.333 0 2.667 2.667 0 0 1 5.333 0Z" />
                            </svg>
                        </i>
                        <a href="#" class="golden hover:text-white">خانه</a>
                    </div>

                    <div class="flex justify-center items-center gap-2">
                        <i class="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff">
                                <path
                                    d="M7.12 3.167h2.533c1.37 0 2.334.36 2.955.983.583.584.933 1.466.97 2.702l.002.252V9.64c0 1.37-.36 2.333-.983 2.956-.624.624-1.587.984-2.956.984H7.107c-1.369 0-2.333-.36-2.957-.984-.623-.623-.983-1.586-.983-2.956V7.107c0-1.369.36-2.333.984-2.956.625-.623 1.593-.984 2.97-.984ZM22.36 3.167h2.534c1.369 0 2.332.36 2.956.983.623.623.983 1.588.983 2.957V9.64c0 1.37-.36 2.333-.983 2.956-.624.624-1.587.984-2.956.984H22.36c-1.37 0-2.333-.36-2.957-.984-.623-.623-.983-1.586-.983-2.956V7.107c0-1.37.36-2.334.983-2.957.624-.623 1.588-.983 2.957-.983ZM22.36 18.407h2.534c1.369 0 2.332.36 2.956.983.623.623.983 1.588.983 2.957v2.533c0 1.37-.36 2.333-.983 2.956-.624.624-1.587.984-2.956.984H22.36c-1.37 0-2.333-.36-2.957-.984-.623-.623-.983-1.586-.983-2.956v-2.533c0-1.37.36-2.334.983-2.957.624-.623 1.588-.983 2.957-.983ZM7.12 18.407h2.533c1.37 0 2.333.36 2.954.984.583.585.934 1.471.97 2.714l.003.253v2.535c0 1.37-.36 2.334-.983 2.957-.624.623-1.587.983-2.956.983H7.107c-1.369 0-2.332-.36-2.956-.985-.623-.625-.984-1.591-.984-2.968v-2.533c0-1.369.36-2.333.984-2.956.625-.623 1.593-.984 2.97-.984Z" />
                            </svg>
                        </i>
                        <p href="#" class="text-gray-400 hover:text-white">دسته بندی</p>
                    </div>

                    <div class="hidden justify-center items-center gap-2">
                        <i class="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M22.338 13.692V6.77c0-1.53-.668-2.997-1.856-4.08C19.294 1.609 17.682 1 16.001 1s-3.293.608-4.482 1.69c-1.188 1.082-1.856 2.55-1.856 4.08v6.922m19.192-3.066 2.134 18.462C31.108 30.11 30.23 31 29.1 31H2.902c-.266 0-.53-.05-.774-.15a1.906 1.906 0 0 1-.64-.422 1.7 1.7 0 0 1-.396-.624 1.585 1.585 0 0 1-.083-.716l2.137-18.462c.049-.425.27-.819.619-1.105.349-.286.802-.444 1.272-.444h21.926c.973 0 1.79.67 1.89 1.55Zm-18.558 3.066c0 .153-.067.3-.186.408a.667.667 0 0 1-.448.17.667.667 0 0 1-.448-.17.552.552 0 0 1-.185-.408c0-.153.066-.3.185-.408a.667.667 0 0 1 .448-.169c.168 0 .33.061.448.17a.552.552 0 0 1 .186.407Zm12.675 0c0 .153-.067.3-.186.408a.667.667 0 0 1-.448.17.667.667 0 0 1-.448-.17.552.552 0 0 1-.186-.408c0-.153.067-.3.186-.408a.667.667 0 0 1 .448-.169c.168 0 .33.061.448.17a.552.552 0 0 1 .186.407Z">
                                </path>
                            </svg>
                        </i>
                        <p class="text-gray-400 hover:text-white">جستجو</p>
                    </div>

                    <div class="flex justify-center items-center gap-2">
                        <i class="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                aria-hidden="true" class="text-gray-500 dark:text-gray-400">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </i>
                        <p class="text-gray-400 hover:text-white">جستجو</p>
                    </div>

                    <div class="flex justify-center items-center gap-2">
                        <i class="hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" stroke="#fff">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                    d="M25.97 27.208A12.478 12.478 0 0 0 16 22.25a12.48 12.48 0 0 0-9.97 4.958m19.94 0a14.998 14.998 0 0 0 4.05-16.54 15 15 0 1 0-23.99 16.54m19.94 0A14.947 14.947 0 0 1 16 31a14.944 14.944 0 0 1-9.97-3.792M21 12.25a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z">
                                </path>
                            </svg>
                        </i>
                        <a href="auth-login.html" class="text-gray-400 hover:text-white">پروفایل</a>
                    </div>

                </nav>
            </div>
            <!--  -->

        </div>
        <!--  -->
    `;
    return header;
}


// export creatMainHeader;
export { creatMainHeader };