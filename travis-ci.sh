#/usr/bin/env/sh
set -e
pwd

# Run StandardJS.
echo "  [*] Running StandardJS (http://standardjs.com).."
standard "src/js/**/*.js"
echo "  [✓] Finished code style checks."

# Run gulp build
echo "  [*] Running gulp build."
gulp build
echo "  [✓] Finished gulp build."
