'use strict';

/*
 * Require the path module
 */
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = (module.exports = require('@frctl/fractal').create());

/*
 * Give your project a title.
 */
fractal.set('project.title', 'ETCH Play - Boilerplate Pattern Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set(
    'path',
    path.join(__dirname, 'PatternLibrary/components')
);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'PatternLibrary/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'wwwroot'));

/*
 * Tell Fractal where to export HTML pattern library.
 */
fractal.web.set('builder.dest', path.join(__dirname, 'PatternLibrary/dist'));

/**
 * Configure theme.
 */
const mandelbrot = require('@frctl/mandelbrot');

fractal.web.theme(
    mandelbrot({
        skin: 'black',
        nav: ['docs', 'components'],
        panels: ['html', 'notes'],
    })
);
