/**
 * Initialises the toggle nav button that's responsible for showing/hiding
 * the main menu (likely on smaller devices).
 */
const toggleNav = () => {
    const CSS_VISIBLE = 'is-nav-visible';
    const SELECTOR = '.js-nav-button';

    const validHideKeyCodes = [38];
    const validShowKeyCodes = [40, 32];

    const $html = document.querySelector('html') as HTMLHtmlElement;

    const checkKeyboardShortcutForToggle = (e: KeyboardEvent) => {
        if (validShowKeyCodes.indexOf(e.keyCode) >= 0) {
            show();
            return;
        }

        if (validHideKeyCodes.indexOf(e.keyCode) >= 0) {
            hide();
            return;
        }
    };

    const hide = ($el: Element | null = null) => {
        $html.classList.remove(CSS_VISIBLE);

        if ($el) {
            $el.setAttribute('aria-expanded', 'false');
        }
    };

    const show = ($el: Element | null | undefined = null) => {
        $html.classList.add(CSS_VISIBLE);

        if ($el) {
            $el.setAttribute('aria-expanded', 'true');
        }
    };

    const toggleVisibility = (e: MouseEvent) => {
        if (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }

        const $target = (e.currentTarget as Element) || null;

        if ($html.classList.contains(CSS_VISIBLE)) {
            hide($target);
            return;
        }

        show($target);
    };

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        const $htmlElement = $el as HTMLElement;

        $htmlElement.addEventListener('click', toggleVisibility);
        $htmlElement.addEventListener(
            'keydown',
            checkKeyboardShortcutForToggle
        );
    });
};

export default toggleNav;
