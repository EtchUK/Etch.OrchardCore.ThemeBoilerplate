const ANCHOR_LINK_SELECTOR = 'a[href*="#"]';
const CSS_VISIBLE = "is-nav-visible";

const closeMenuOnAnchorClick = () => {
    const anchorLinks = document.querySelectorAll(ANCHOR_LINK_SELECTOR);
    const $html = document.querySelector("html") as HTMLHtmlElement;

    anchorLinks.forEach((link) => {
        link.addEventListener("click", () => {
            $html.classList.remove(CSS_VISIBLE);
            return true;
        });
    });
};

export default closeMenuOnAnchorClick;
