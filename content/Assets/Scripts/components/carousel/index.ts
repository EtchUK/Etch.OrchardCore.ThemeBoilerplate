/*
 * Handles showing multiple featured items within a carousel.
 */

import debounce from "../../utils/debounce";

const CSS = {
    active: "is-active",
};

const defaults = {
    duration: 5000,
};

const instance = ($el: Element) => {
    const dom = {
        $items: $el.querySelectorAll(".js-carousel-item"),
        $track: $el.querySelector(".js-carousel-track") as HTMLElement,
        $nextBtn: $el.querySelector(".js-next-btn"),
        $prevBtn: $el.querySelector(".js-prev-btn"),
        $changeBtns: $el.querySelectorAll(".js-change-to-btn"),
    };

    const itemCount: number = dom.$items.length;

    const configurdDuration: string | null = $el.getAttribute("data-duration");
    let duration: number = defaults.duration;

    if (configurdDuration !== null) {
        duration = parseInt(configurdDuration, 10);
    }

    let activeIndex = 0;
    let timer: number;

    const changeTo = (event: Event) => {
        const index: string | null = (
            event.currentTarget as HTMLButtonElement
        ).getAttribute("data-index");

        if (index !== null) {
            setActive(parseInt(index, 10));
        }
    };

    const enableTimer = () => {
        if (duration === 0 || dom.$items.length < 2) {
            return;
        }

        timer = window.setTimeout(() => {
            if (activeIndex + 1 === itemCount) {
                setActive(0);
                return;
            }

            setActive(activeIndex + 1);
        }, duration);
    };

    const next = () => {
        setActive(activeIndex + 1);
    };

    const previous = () => {
        setActive(activeIndex - 1);
    };

    const setActive = (index: number) => {
        clearTimeout(timer);
        const itemWidth = dom.$items[0].clientWidth;

        if (index >= itemCount) {
            index = 0;
        }

        if (index === -1) {
            index = itemCount - 1;
        }

        const offset = itemWidth * index * -1;

        dom.$items[activeIndex].classList.remove(CSS.active);
        dom.$track.style.transform = `translateX(${offset}px)`;
        dom.$items[index].classList.add(CSS.active);

        let parentElement: HTMLElement | null =
            dom.$changeBtns[activeIndex].parentElement;

        if (parentElement !== null) {
            parentElement.classList.remove(CSS.active);
        }

        parentElement = dom.$changeBtns[index].parentElement;

        if (parentElement !== null) {
            parentElement.classList.add(CSS.active);
        }

        activeIndex = index;

        enableTimer();
    };

    if (dom.$nextBtn) {
        dom.$nextBtn.addEventListener("click", next);
    }

    if (dom.$prevBtn) {
        dom.$prevBtn.addEventListener("click", previous);
    }

    for (const $btn of dom.$changeBtns) {
        $btn.addEventListener("click", changeTo);
    }

    window.addEventListener(
        "resize",
        debounce(() => {
            // Reset on resize
            // (as item width will otherwise cause layout issues)
            dom.$track.style.transform = "translateX(0)";
        })
    );

    enableTimer();
};

const carousel = () => {
    const SELECTOR = ".js-carousel";

    document.querySelectorAll(SELECTOR).forEach(($el) => {
        instance($el);
    });
};

export default carousel;
