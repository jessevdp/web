# Project WEB
Project WEB

# Development
The project uses [`gulp`](https://gulpjs.com/) as its task runner. There's a setup for the following tasks:
- sass conversion
- running a development server (using [browsersync](https://browsersync.io/))

To use gulp make sure you have [node.js](nodejs.org) and [npm](npmjs.org) installed.
On top of that you need to install `gulp` globally, if you haven't done that already.

```sh
npm i -g gulp

# you might want to run this using sudo if you run into any permission issues
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
Runing the gulp default task will fire up the `browserSync` server, opening the website in your standard browser 😇

# License & Disclaimer
This module is open-sourced under the MIT Licence (see [LICENSE](LICENSE) for the full license). So within some limits, you can do with the code whatever you want.

The software is provided as is. It might work as expected - or not. Just don't blame me.
