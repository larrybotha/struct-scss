/*------------------------------------*\
#     $GULPFILE
/*------------------------------------*/

// All tasks are configured in ./gulp/tasks
// Simply add a new task there, and it will be automatically available as a gulp
// task for your project

const gulp         = require("gulp");
const requireDir   = require("require-dir");
const browserSync  = require("browser-sync").create();

global.isWatching = false;
global.browserSync = browserSync;

requireDir('./gulp/tasks', { recurse: false });





/*------------------------------------*\
#     $TASKS
/*------------------------------------*/
gulp.task('default', ['watch']);
