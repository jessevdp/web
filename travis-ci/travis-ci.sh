#/usr/bin/env/sh
set -e
pwd

# Run StandardJS.
echo -e "  [*] Running StandardJS (http://standardjs.com).."
standard "src/js/**/*.js"
echo -e "  [✓] Finished code style checks."

# Run gulp build
echo -e "  [*] Running gulp build."
gulp build
echo -e "  [✓] Finished gulp build."
