# Assets

## Scripts

The template comes with a blank canvas when it comes to JavaScript. `index.js` is empty and acts a the starting point for the theme JavaScript. The theme comes with a [Webpack](https://webpack.js.org/) set up that comes with [Babel](https://babeljs.io/) to enables writing JavaScript with ES2015 syntax. Webpack will place the compiled output to `wwwroot/js/scripts.js`.

## Styles

The theme template comes with our starting point when putting together a stylesheet. What works for us might not necessarily work for you, simply remove the files in this directory and remove all the imports for `index.scss`. `index.scss` is used as the hook by webpack to compile the Sass in to a CSS file that's outputted to `wwwroot/css/style.css`.