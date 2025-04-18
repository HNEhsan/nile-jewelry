/**
 * @description Creates a "Show More" card to link to more products
 * @param {string} url - Link to the product list or catalog page
 * @returns {HTMLElement} - The HTML element of the Show More card
 */
const createShowMoreCard = (url = "#") => {
    const card = document.createElement("a");
    card.href = url;
    card.className = "bg-black rounded-lg shadow-lg h-[410px] flex flex-col justify-center items-center border-2 border-yellow-300";

    card.innerHTML = `
        <div class="text-white bg-black flex flex-col justify-center items-center w-40 gap-4">
            <svg width="40" height="40" viewBox="0 0 40 40" stroke="#D4AF37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.0083 13L12.0083 19.75L19.0083 26.5M32 19.75H12.5M39.0083 19.75C39.0083 22.2123 38.5233 24.6505 37.581 26.9253C36.6387 29.2002 35.2576 31.2672 33.5165 33.0083C31.7754 34.7493 29.7084 36.1305 27.4336 37.0727C25.1587 38.015 22.7205 38.5 20.2583 38.5C17.796 38.5 15.3578 38.015 13.0829 37.0727C10.8081 36.1305 8.7411 34.7493 7 33.0083C5.2589 31.2672 3.87779 29.2002 2.93551 26.9253C1.99323 24.6505 1.50825 22.2123 1.50825 19.75C1.50825 14.7772 3.48369 10.0081 7 6.49175C10.5163 2.97544 15.2854 1 20.2583 1C25.2311 1 30.0002 2.97544 33.5165 6.49175C37.0328 10.0081 39.0083 14.7772 39.0083 19.75Z"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                />
            </svg>
            <span class="block">مشاهده بیشتر</span>
        </div>
    `;

    return card;
};

export { createShowMoreCard };
