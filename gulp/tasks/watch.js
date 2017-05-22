const gulp         = require('gulp');
const watch        = require('gulp-watch');

const conf = require('../gulpconfig');

gulp.task('watch', ['css'], () => (
    gulp.watch(`${conf.path.dev}/**/*.scss`, ['css'])
  )
);
