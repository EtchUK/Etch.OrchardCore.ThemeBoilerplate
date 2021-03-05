/**
 * Applies special classes to relevant items when they're scrolled into view.
 * This can be used to apply animation or other CSS behaviour
 * that should occur when an element becomes visible
 */
const inViewport = () => {
    const SELECTOR = '.js-in-viewport';
    const CLASS = 'in-viewport--is'; // Only applies when something is currently in view
    const PERMANENT_CLASS = 'in-viewport--has-been'; // Applies the first time something appears in viewport (and stays)

    // If IntersectionObserver is not supported, add these classes immediately
    // This means older browsers get all animations immediately on load as a graceful fallback
    if (typeof IntersectionObserver === 'undefined') {
        document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
            $el.classList.add(CLASS);
            $el.classList.add(PERMANENT_CLASS);
        });
        return;
    }

    const checkEntry = (entry: IntersectionObserverEntry) => {
        const $entry = entry.target as HTMLHtmlElement;

        if (entry.isIntersecting) {
            // Highlight this item in the navigation
            $entry.classList.add(CLASS);
            $entry.classList.add(PERMANENT_CLASS);
        } else {
            // Unhighlight this item in the navigation
            $entry.classList.remove(CLASS);
        }
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(checkEntry);
    };

    const options = {
        rootMargin: '0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);
    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        observer.observe($el as HTMLElement);
    });
};

export default inViewport;
