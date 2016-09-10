var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
//var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserSync', 'sass'], function() {

	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);

});

gulp.task('browserSync', function() {

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	})
});

gulp.task('sass', function() {

 	return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    	.pipe(sass())
    	.pipe(gulp.dest('app/css'))
    	.pipe(browserSync.stream())
});
