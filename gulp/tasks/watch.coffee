gulp         = require 'gulp'
watch        = require 'gulp-watch'

conf = require '../gulpconfig'

gulp.task 'watch', ['css'], () ->
  gulp.watch "#{conf.path.dev}/**/*.scss", ['css']
