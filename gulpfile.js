var gulp        = require('gulp');
var shell       = require('gulp-shell');
var browserSync = require('browser-sync').create();

gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// If not using bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

gulp.task('serve', function () {
    browserSync.init({server: {baseDir: '_site/'}});
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);