var gulp = require('gulp');
var sass = require('gulp-sass');

//copy my index.html file to dist folder using Gulp
gulp.task('copyHtml', function() {
gulp.src('src/index.html')
.pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
gulp.src('src/scss/*.scss')
.pipe(sass().on('error', sass.logError))
.pipe(gulp.dest('dist/css'));
});