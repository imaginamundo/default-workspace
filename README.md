## Source
- [/js](#javascript-src)
    - [/vendor](#vendor-src)
        - plugin_1.js
        - plugin_2.js
    - [/components](#components-src)
        - component_1.js
        - component_2.js
    - [/structure](#structure-src)
        - home.js
        - contact.js
    - [global.js](#global-javascript-file)
- [/scss](#sass-src)
    - */**.scss

### Javascript src
Generated with webpack. Use ES6 features and ESlinter.

*To do:* Configure eslinter

### Vendor src
External plugins or libraries without codebase dependencies, like *jQuery*, *Flickity* or others.

*To do:* Minified one by one, without transpile.

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
    - vendor
        - plugin_1.min.js
        - plugin_2.min.js
    - structure
        - home.js
        - contact.js
    - global.js
- /css
    - **/*.css