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

// export  creatAuthFoorter;
export { creatAuthFoorter };