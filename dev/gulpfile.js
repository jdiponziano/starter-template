// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = '../src/';

gulp.task('plugins', function() {
	gulp.src(plugins.mainBowerFiles())
	.pipe(plugins.filter('*.js'))
	.pipe(plugins.concat('plugins.js'))
	.pipe(gulp.dest(dest + 'js'));
});

gulp.task('scripts', ['plugins'], function() {
	var jsFiles = ['../src/js/*.js'];
	gulp.src(jsFiles)
		.pipe(concat('scripts.js'))
		.pipe(plumber())
		.pipe(gulp.dest(dest + 'js'));

});

gulp.task('css', function() {

	var cssFiles = ['../src/css/*'];

	gulp.src(plugins.mainBowerFiles().concat(cssFiles))
		.pipe(plugins.filter('*.scss'))
		.pipe(plugins.concat('styles.css'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest(dest + 'css'));
});
