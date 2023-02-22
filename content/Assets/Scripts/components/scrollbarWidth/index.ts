/*
 * Makes the scrollbar width available as a CSS variable.
 *
 * vw units return viewport width but assumes that scrollbars do not exist:
 * https://drafts.csswg.org/css-values-3/#viewport-relative-lengths
 * Scrollbar width changes per device, and is required if you want to
 * accurately create a 100vw element (inside a thinner element) which
 * accounts for the presence of a scrollbar.
 *
 * Example usage:
 * `width: calc(100vw - var(--scrollbarWidth));`
 */

const scrollbarWidth = () => {
    document.documentElement.style.setProperty(
        "--scrollbarWidth",
        `${window.innerWidth - document.documentElement.clientWidth}px`
    );
};

export default scrollbarWidth;
