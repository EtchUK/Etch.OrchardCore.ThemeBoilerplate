/*
 * Applies special classes to relevant items when they're scrolled into view.
 * This can be used to apply animation or other CSS behaviour
 * that should occur when an element becomes visible
 */
const inViewport = () => {
    const CLASS = "in-viewport";
    const SELECTOR = ".js-in-viewport";
    const attributes = {
        REPEAT: "data-repeat",
    };

    if (typeof IntersectionObserver === "undefined") {
        document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
            $el.classList.add(CLASS);
        });

        return;
    }

    const checkEntry = (entry: IntersectionObserverEntry) => {
        const $entry = entry.target as HTMLHtmlElement;

        if (entry.isIntersecting) {
            $entry.classList.add(CLASS);

            if (!isRepeat($entry)) {
                observer.unobserve($entry);
            }

            return;
        }

        $entry.classList.remove(CLASS);
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(checkEntry);
    };

    const isRepeat = ($el: HTMLHtmlElement) => {
        return $el.getAttribute(attributes.REPEAT) === "true";
    };

    const observer = new IntersectionObserver(callback, {
        rootMargin: "0px",
        threshold: 0,
    });

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        observer.observe($el as HTMLElement);
    });
};

export default inViewport;
