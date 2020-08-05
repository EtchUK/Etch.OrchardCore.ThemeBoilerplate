const CSS_SELECTED = 'is-selected';

/**
 * Reverts selected state on provided item.
 */
const deselectItem = ($el: Element) => {
    $el.classList.remove(CSS_SELECTED);

    const $anchor = $el.querySelector('a');

    if ($anchor) {
        $anchor.setAttribute('aria-expanded', 'false');
    }
};

/**
 * Returns whether the navigation item has any sub items.
 */
const hasSubItems = ($el: Element): boolean => {
    if (!$el.parentNode) {
        return false;
    }

    return $el.parentNode.children.length > 1;
};

/**
 * Sets the selected state on provided item.
 */
const selectItem = ($el: Element) => {
    const $parent = $el.parentNode as Element;

    if (!$parent) {
        return;
    }

    $parent.classList.add(CSS_SELECTED);
    $el.setAttribute('aria-expanded', 'true');
};

/**
 * Initialises a new navigation component.
 */
const instance = ($el: Element) => {
    /**
     * Handles a top level item being selected but unselecting the currently
     * selected item and setting the top level item has selected, unless it
     * was already selected.
     */
    const onItemSelect = (e: Event) => {
        e.stopImmediatePropagation();
        e.preventDefault();

        const $selectedItem = $el.querySelector(`.${CSS_SELECTED}`);
        const $target = e.currentTarget as Element;

        // de-select the currently selected item if there is one.
        if ($selectedItem) {
            deselectItem($selectedItem);
        }

        if ($target && $selectedItem !== $target.parentNode) {
            selectItem($target);
        }
    };

    $el.querySelectorAll('.js-nav-parent-link').forEach(($anchor: Element) => {
        if (!hasSubItems($anchor)) {
            return;
        }

        $anchor.addEventListener('click', onItemSelect);
    });
};

/**
 * Initialises each element matching the selector.
 */
const nav = () => {
    const SELECTOR = '.js-nav';

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        instance($el);
    });
};

export default nav;
