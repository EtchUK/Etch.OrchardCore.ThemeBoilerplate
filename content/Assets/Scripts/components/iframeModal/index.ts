/**
 * iframeModal lightbox
 */

/* tslint:disable */
import 'lightgallery.js';
/* tslint:enable */

const lightGallery = (window as any).lightGallery;

const instance = ($el: Element) => {
    const isWide = () => {
        return $el.getAttribute('data-wide') === 'true';
    };

    // Handle multiple images/links
    lightGallery($el, {
        counter: false,
        download: false,
        height: '100%',
        iframeMaxWidth: '100%',
        selector: 'this',
        videoMaxWidth: '100%',
    });

    $el.addEventListener(
        'onAfterOpen',
        (e) => {
            const $wrapper = document.getElementsByClassName('lg-video');
            if ($wrapper.length < 0) {
                return;
            }

            if (!isWide()) {
                $wrapper[0].classList.add('lg-iframe');
            }
        },
        false
    );

    $el.addEventListener(
        'onAfterClose',
        (e) => {
            const $wrapper = document.getElementsByClassName('lg-video');
            if ($wrapper.length < 0) {
                return;
            }

            if (!isWide()) {
                $wrapper[0].classList.remove('lg-iframe');
            }
        },
        false
    );
};

const iframeModal = () => {
    const SELECTOR = '.js-iframe-modal';

    document.querySelectorAll(SELECTOR).forEach(($el: Element) => {
        instance($el);
    });
};

export default iframeModal;
