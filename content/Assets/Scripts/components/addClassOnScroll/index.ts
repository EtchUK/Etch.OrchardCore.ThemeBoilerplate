/**
 * Applies a class when page height has been scrolled
 */
const SELECTOR = '.js-add-class-on-scroll';
const defaultCSS = 'page-scrolled';
let pageHeight = window.innerHeight;
const $scrollElements = document.querySelectorAll(SELECTOR);

const scrollBehaviour = () => {
    $scrollElements.forEach(($el: Element) => {
        const $htmlEl = $el as HTMLElement;
        let cssClass = defaultCSS;

        if ($htmlEl.dataset.class) {
            cssClass = $htmlEl.dataset.class;
        }

        if (window.scrollY > pageHeight) {
            $el.classList.add(cssClass);
            return;
        }

        $el.classList.remove(cssClass);
    });
};

const addClassOnScroll = () => {
    if (!$scrollElements.length) {
        return;
    }

    document.addEventListener('scroll', scrollBehaviour);
    scrollBehaviour();

    window.addEventListener('resize', () => {
        pageHeight = window.innerHeight;
    });
};

export default addClassOnScroll;
