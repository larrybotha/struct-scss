gulp         = require 'gulp'
autoprefixer = require 'gulp-autoprefixer'
sass         = require 'gulp-sass'
sourcemaps   = require 'gulp-sourcemaps'

conf = require '../gulpconfig'




#*------------------------------------*\
#     $CSS
#*------------------------------------*/
gulp.task 'css', () ->
  gulp.src(["./scss/**/*.{scss,sass}"])
    .pipe sourcemaps.init()
    .pipe(sass({
      includePaths: ['node_modules/normalize.css']
    }).on('error', sass.logError))
    .pipe autoprefixer({browsers: ['last 2 versions']})
    .pipe sourcemaps.write()
    .pipe gulp.dest("#{conf.path.dist}")
