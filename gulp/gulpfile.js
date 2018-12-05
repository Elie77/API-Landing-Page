var gulp = require('gulp'),
	sass = require('gulp-sass');
	//browserSync = require('browser-sync').create();

//var reload  = browserSync.reload;

var config = {
	sourceSass: "./scss/",
	destinationSass: "../css",
	targetSass: "styles.scss",
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('css', function() {
	return gulp.src(config.sourceSass + config.targetSass)
	.pipe(sass(config.options).on('error', sass.logError))
	.pipe(gulp.dest(config.destinationSass))
})

gulp.task('watch', function() {
	/*browserSync.init({
        server: {
            baseDir: "../"
        }
    });*/
	gulp.watch(config.sourceSass +'**/*.scss', ['css']);
})

/*gulp.task('includeFonts', function() {
	return gulp.src(config.sourceFont)
	.pipe(gulp.dest(config.targetFont))
})*/

//gulp.task('build', ['includeFonts']);

gulp.task('default', ['watch']);