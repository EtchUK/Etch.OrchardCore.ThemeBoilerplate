import Rellax from 'rellax';

const defaults = {
    percentage: 0.5,
    speed: 4
};

const parallax = () => {
    let hasInstance = false;

    document.querySelectorAll('.js-parallax').forEach(($el: Element) => {
        if (!$el.hasAttribute('data-rellax-percentage')) {
            $el.setAttribute('data-rellax-percentage', defaults.percentage.toString());
        }

        if (!$el.hasAttribute('data-rellax-speed')) {
            $el.setAttribute('data-rellax-speed', defaults.speed.toString());
        }

        hasInstance = true;
    });

    if (!hasInstance) {
        return;
    }

    const rellax = new Rellax('.js-parallax');

    window.onload = () => {
        rellax.refresh();
    };

};

export default parallax;
