/**
 * Initialises the toggle nav button that's responsible for showing/hiding
 * the main menu (likely on smaller devices).
 */
const toggleNav = () => {
    const CSS_VISIBLE = 'is-nav-visible';
    const SELECTOR = '.js-nav-button';

    const validHideKeyCodes = [38];
    const validShowKeyCodes = [40, 32];

    let $html = document.querySelector('html');

    const checkKeyboardShortcutForToggle = e => {
        if (validShowKeyCodes.indexOf(e.keyCode) >= 0) {
            show();
            return;
        }

        if (validHideKeyCodes.indexOf(e.keyCode) >= 0) {
            hide();
            return;
        }
    };

    const hide = $el => {
        $html.classList.remove(CSS_VISIBLE);
        $el.setAttribute('aria-expanded', 'false');
    };

    const show = $el => {
        $html.classList.add(CSS_VISIBLE);
        $el.setAttribute('aria-expanded', 'true');
    };

    const toggleVisibility = e => {
        if (e) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }

        if ($html.classList.contains(CSS_VISIBLE)) {
            hide(e.currentTarget);
            return;
        }

        show(e.currentTarget);
    };

    document.querySelectorAll(SELECTOR).forEach($el => {
        $el.addEventListener('click', toggleVisibility);
        $el.addEventListener('keydown', checkKeyboardShortcutForToggle);
    });
};

export default toggleNav;
