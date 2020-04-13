import Rellax from 'rellax';

const defaults = {
    percentage: 0.5,
    speed: 4
};

const parallax = () => {

    document.querySelectorAll('.parallax').forEach(($el: Element) => {
        if (!$el.hasAttribute('data-rellax-percentage')) {
            $el.setAttribute('data-rellax-percentage', defaults.percentage.toString());
        }

        if (!$el.hasAttribute('data-rellax-speed')) {
            $el.setAttribute('data-rellax-speed', defaults.speed.toString());
        }
    });

    const rellax = new Rellax('.parallax');

    window.onload = () => {
        rellax.refresh();
    };

};

export default parallax;
