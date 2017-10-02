# Project WEB
Project WEB

# Development
The project uses [`gulp`](https://gulpjs.com/) as its task runner. There's a setup for the following tasks:
- Sass to css conversion
- JavaScript Concatenation & Minification
- Markdown conversion and injection
- Running a development server (using [browsersync](https://browsersync.io/))
  - This task runs the other 3

I explain these tasks [down below](#tasks).

To use gulp make sure you have [node.js](nodejs.org) and [npm](npmjs.org) installed.
On top of that you need to install `gulp` globally, if you haven't done that already.

```sh
npm i -g gulp

# you might need to run this using sudo if you run into any permission issues
sudo i -g gulp
```

After that, getting up and running is easy

```sh
# clone the repository
git clone https://github.com/jessevdp/web.git web
cd web/

# install all dependencies
npm install

# run gulp
gulp

# Tada 🎉🎉
```
Runing the gulp **default task** will fire up the `browserSync` server, opening the website in your standard browser 😇

## Tasks
- **Sass conversion**  
This task will take any `.scss` files in the `src/sass/` folder (including it's sub folders) and process it into normal css files.  
To avoid an overflow of files `sass partials` should be prefixed with an underscore. An example: `_partial.scss`

- **JS concatenation and minification**  
This task will concatinate all `.js` files in the `src/js/` folder (including it's sub folders) into one file named `all.js`. On top of that `all.js` will be minified into `all.min.js` (using [uglify.js](https://www.npmjs.com/package/gulp-uglify))

- **Markdown conversion and injection**  
This task will take all `.md` files in the `src/content/` folder and turn them into `.html` files. These `.html` files are then ready to be injected into any normal `.html` file placed in the `src/` folder.
To inject a file place a snippet like this into your regular `.html` file:
```html
<!-- inject:path/to/file.html -->
<!-- endinject -->
```

# License & Disclaimer
This module is open-sourced under the MIT Licence (see [LICENSE](LICENSE) for the full license). So within some limits, you can do with the code whatever you want.

The software is provided as is. It might work as expected — or not. Just don't blame me.
