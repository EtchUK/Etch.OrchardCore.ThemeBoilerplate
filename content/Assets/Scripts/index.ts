import 'picturefill';
import Rellax from 'rellax';

import gallery from './components/gallery';
import nav from './components/nav';
import toggleNav from './components/toggleNav';

/**
 * Called once the page is loaded and handles initialising
 * the different components.
 */
const init = () => {
    gallery();
    nav();
    toggleNav();
    Rellax('.parallax');
};

const canInit = () => {
    const regReady = (window as any).attachEvent ? /d$|^c/ : /d$|^c|^i/;
    return regReady.test(document.readyState || '');
};

let timer: NodeJS.Timeout;

const checkCanInit = () => {
    if (canInit()) {
        if (timer) {
            clearTimeout(timer);
        }

        init();
        return;
    }

    timer = setTimeout(checkCanInit, 100);
};

checkCanInit();
