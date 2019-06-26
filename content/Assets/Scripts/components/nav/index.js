import { makeSelector } from '../../utils/dom';

const CSS_SELECTED = 'is-selected';

/**
 * Reverts selected state on provided item.
 */
const deselectItem = $el => {
    $el.classList.remove(CSS_SELECTED);
    $el.querySelector('a').setAttribute('aria-expanded', 'false');
};

/**
 * Returns whether the navigation item has any sub items.
 */
const hasSubItems = $el => {
    return $el.parentNode.children.length > 1;
};

/**
 * Sets the selected state on provided item.
 */
const selectItem = $el => {
    $el.parentNode.classList.add(CSS_SELECTED);
    $el.setAttribute('aria-expanded', 'true');
};

/**
 * Initialises a new navigation component.
 */
const instance = $el => {
    /**
     * Handles a top level item being selected but unselecting the currently
     * selected item and setting the top level item has selected, unless it
     * was already selected.
     */
    const onItemSelect = e => {
        e.stopImmediatePropagation();
        e.preventDefault();

        let $selectedItem = $el.querySelector(makeSelector(CSS_SELECTED));

        // de-select the currently selected item if there is one.
        if ($selectedItem) {
            deselectItem($selectedItem);
        }

        if ($selectedItem !== e.currentTarget.parentNode) {
            selectItem(e.currentTarget);
        }
    };

    $el.querySelectorAll('li > a').forEach($el => {
        if (!hasSubItems($el)) {
            return;
        }

        $el.addEventListener('click', onItemSelect);
    });
};

/**
 * Initialises each element matching the selector.
 */
const nav = () => {
    const SELECTOR = '.js-nav';

    document.querySelectorAll(SELECTOR).forEach($el => {
        instance($el);
    });
};

export default nav;
