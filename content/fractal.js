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
fractal.set('project.title', 'Theme Pattern Library');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set(
    'path',
    path.join(__dirname, 'PatternLibrary', 'components')
);

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'PatternLibrary/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'wwwroot'));
