/*
 * Gallery lightbox
 */

// lightgallery.js must come before lg-video otherwise an
// undefined error occurs

/* tslint:disable */
import "lightgallery.js";
import "lg-video.js";
/* tslint:enable */

const lightGallery = (window as any).lightGallery;

const instance = ($el: Element) => {
    // Handle multiple images/links
    lightGallery($el, {
        hideBarsDelay: 0,
        selector: "a",
        videoMaxWidth: "100%",
    });
};

const gallery = () => {
    const SELECTOR = ".js-gallery";

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        instance($el);
    });
};

export default gallery;
