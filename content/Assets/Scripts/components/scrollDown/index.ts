const SELECTOR = ".js-scroll-down";
const animationFactor = 1.5;

const scrollDown = () => {
    const $scrollElements = document.querySelectorAll(SELECTOR);
    if (!$scrollElements.length) {
        return;
    }

    $scrollElements.forEach(($el: Element) => {
        $el.addEventListener("click", () => {
            const rect = $el.getBoundingClientRect();

            // Animation factor included so if you click something while it's
            // in motion, as e.g scroll indicator may be, you scroll far enough away
            window.scrollBy(0, rect.top + $el.clientHeight * animationFactor);
        });
    });
};

export default scrollDown;
