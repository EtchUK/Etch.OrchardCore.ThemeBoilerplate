# Assets

## Content

Folder for placing images that ship with the theme, typically this would be icons. Try to avoid placing media that would be better if managed via the CMS. Create a separate folder (e.g. "PatternLibrary") for images that are used by the pattern library to demonstrate a component/page.

## Fonts

Our default stance for fonts used to be to utilise an external provier (e.g. Google Fonts), however [recent changes to browser caching](https://developers.google.com/web/updates/2020/10/http-cache-partitioning) means the benefits to using these services is obsolete and it's better for performance to self host fonts. 

### Resources

- [google-webfonts-helper](https://google-webfonts-helper.herokuapp.com/) is a tool for customising and downloading fonts from Google Fonts.
- [How to self-host Google Fonts](https://webdesign.tutsplus.com/tutorials/how-to-self-host-google-fonts--cms-34775) is a useful guide for how to self-host fonts from Google Fonts.

## Scripts

The template comes with a blank canvas when it comes to JavaScript. `index.js` is empty and acts a the starting point for the theme JavaScript. The theme comes with a [Webpack](https://webpack.js.org/) set up that comes with [Babel](https://babeljs.io/) to enables writing JavaScript with ES2015 syntax. Webpack will place the compiled output to `wwwroot/js/scripts.js`.

## Styles

The theme template comes with our starting point when putting together a stylesheet. What works for us might not necessarily work for you, simply remove the files in this directory and remove all the imports for `index.scss`. `index.scss` is used as the hook by webpack to compile the Sass in to a CSS file that's outputted to `wwwroot/css/style.css`.