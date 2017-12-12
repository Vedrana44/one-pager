var gulp = require('gulp');
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('compile-sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch-sass', function() {  
    gulp.watch('app/scss/*.scss' , ['compile-sass']);
});

gulp.task('serve', function () {
    
       // Serve files from the root of this project
       browserSync.init({
           server: {
               baseDir: "./app/"
           }
       }); 
       gulp.watch('app/scss/*.scss').on("change", reload);
       gulp.watch("app/*.html").on("change", reload);
   });
    
   /* Task when running `gulp` from terminal */
   gulp.task('default', ['watch-sass', 'serve']);