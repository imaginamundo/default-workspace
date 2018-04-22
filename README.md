# Imagina Mundo default workspace
Created to use vanilla Javascript with ES6 and Sass.

Using Webpack to make ES6 compatible with current browsers and Gulp to compile CSS files.

## Commands
`yarn build` or `npm run build`: Build static assets;

`yarn watch` or `npm run watch`: Watch for changes on Sass and Javascript and generate files;

## Source
- [/js](#javascript-src)
    - [/components](#components-src)
        - component_1.js
        - component_2.js
    - [/structure](#structure-src)
        - home.js
        - contact.js
    - [global.js](#global-javascript-file)
- [/scss](#sass-src)
    - **/*.scss

### Javascript src
Generated with webpack. Use ES6 features and ESlinter.

*To do:* Configure eslinter

### Components src
Used by `structure` and `global`. Components will be called by others `.js`. Components will not be minified or transpiled alone.

Can be used by `structure`, `global` and even `components` itself.

### Structure src
For specifics `.js`, can be used if you want multiple files for each page.

Minified and transpiled for every file.

### Global javascript file
Common Javascript for every page.

### Sass src
Generated with Gulp.

## Distribution
- /js
    - structure
        - home.js
        - contact.js
    - global.js
- /css
    - **/*.css