import addClassOnScroll from "./components/addClassOnScroll";
import carousel from "./components/carousel";
import closeMenuOnAnchorClick from "./components/closeMenuOnAnchorClick";
import gallery from "./components/gallery";
import iframeModal from "./components/iframeModal";
import inViewport from "./components/inViewport";
import nav from "./components/nav";
import parallax from "./components/parallax";
import scrollbarWidth from "./components/scrollbarWidth";
import toggleNav from "./components/toggleNav";

/*
 * Called once the page is loaded and handles initialising
 * the different components.
 */
const init = () => {
    addClassOnScroll();
    carousel();
    closeMenuOnAnchorClick();
    gallery();
    iframeModal();
    inViewport();
    nav();
    parallax();
    scrollbarWidth();
    toggleNav();
};

const canInit = () => {
    const regReady = (window as any).attachEvent ? /d$|^c/ : /d$|^c|^i/;
    return regReady.test(document.readyState || "");
};

let timer: NodeJS.Timeout;

const checkCanInit = () => {
    if (canInit()) {
        if (timer) {
            clearTimeout(timer);
        }

        init();
        return;
    }

    timer = setTimeout(checkCanInit, 100);
};

// update DOM to indicate JavaScript is available
// https://www.paulirish.com/2009/avoiding-the-fouc-v3/
document.documentElement.className = document.documentElement.className.replace(
    /\bno-js\b/,
    "js"
);

checkCanInit();
