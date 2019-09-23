# Assets

## Content

Folder for placing images that ship with the theme, typically this would be icons. Try to avoid placing media that would be better if managed via the CMS. Create a separate folder (e.g. "PatternLibrary") for images that are used by the pattern library to demonstrate a component/page.

## Fonts

Ideally fonts will be loaded via a third party site (e.g. [Google Fonts](https://fonts.google.com/) or [Adone Fonts](https://fonts.adobe.com/)). There are some scenarios where the font won't be available via a third party site. In those cases, use this directory to include font files within the theme.

## Scripts

The template comes with a blank canvas when it comes to JavaScript. `index.js` is empty and acts a the starting point for the theme JavaScript. The theme comes with a [Webpack](https://webpack.js.org/) set up that comes with [Babel](https://babeljs.io/) to enables writing JavaScript with ES2015 syntax. Webpack will place the compiled output to `wwwroot/js/scripts.js`.

## Styles

The theme template comes with our starting point when putting together a stylesheet. What works for us might not necessarily work for you, simply remove the files in this directory and remove all the imports for `index.scss`. `index.scss` is used as the hook by webpack to compile the Sass in to a CSS file that's outputted to `wwwroot/css/style.css`.