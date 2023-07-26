const buildSass = require("gulp-sass-build");

buildSass.setup({
    styles: ['./css/**/*.scss', './scss/**/*.scss'],
    outDir: __dirname + '/dist'
});