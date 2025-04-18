/**
 * @description Creates a reusable product card component
 * @param {Object} product - Product data
 * @param {string} product.image - Product image URL
 * @param {string} product.name - Product name
 * @param {string} product.price - Product price string (e.g., "$200" or "1,000,000 Toman")
 * @param {string} product.status - Availability status text (e.g., "Available" / "Unavailable")
 * @param {string} product.type - Product type (e.g., "Ring")
 * @param {boolean} product.available - Whether the product is available or not
 * @returns {HTMLElement} - The HTML structure of the product card
 */

const createProductCard = (product) => {
    const swiper_slide = document.createElement("div");
    swiper_slide.className = "swiper-slide w-70 h-full flex flex-col justify-center items-center";
    const card = document.createElement("div");
    card.className = " bg-black rounded-lg shadow-lg";

    card.innerHTML = `
        <a href="#" class="w-70 h-full flex flex-col justify-center items-center">

            <!-- Image -->
            <div class="w-full flex justify-center items-center mb-2 mt-2">
                <img src="${product.image}" alt="${product.name}" class="w-3/4 h-44 mt-6" />
            </div>

            <!-- Status and Category -->
            <div class="w-full flex justify-between items-center mb-4 mt-4 px-8">
                <div class="golden border-1 border-yellow-300 rounded-lg px-4 py-1 flex justify-center items-center gap-2">
                    <span>${product.type}</span>
                </div>
                <div class="${product.available ? 'golden border-yellow-300 text-white' : 'text-red-600 border-red-600'} 
                            border-1 rounded-lg px-4 py-1 flex justify-center items-center gap-2">
                    <span>${product.status}</span>
                </div>
            </div>

            <!-- Name -->
            <div class="w-full flex justify-center items-center mb-4 mt-4 px-8">
                <span class="font-bold text-gray-700">${product.name}</span>
            </div>

            <!-- Price and Button -->
            <div class="w-full flex justify-between items-center mb-4 mt-4 px-8">
                <span class="font-bold ${product.available ? 'text-white' : ``}">
                    ${product.price}
                </span>

                ${product.available ? `
                <button class="border-1 border-yellow-300 text-black rounded-lg px-4 py-2 hover:bg-yellow-400 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#fff" viewBox="0 0 50 50">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="5"
                            d="M32.813 21.875V12.5a7.813 7.813 0 0 0-15.626 0v9.375m23.659-4.152 2.631 25a2.342 2.342 0 0 1-2.331 2.59H8.854a2.343 2.343 0 0 1-2.333-2.59l2.633-25a2.344 2.344 0 0 1 2.331-2.098h27.03c1.2 0 2.206.906 2.33 2.098Zm-22.877 4.152a.781.781 0 1 1-1.563 0 .781.781 0 0 1 1.563 0Zm15.625 0a.781.781 0 1 1-1.563 0 .781.781 0 0 1 1.563 0Z" />
                    </svg>
                </button>` : `<button class='py-6'/>`}
            </div>

        </a>
    `;

    swiper_slide.appendChild(card)
    return swiper_slide;
};

export { createProductCard };
