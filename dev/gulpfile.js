// Include Gulp
var gulp = require('gulp');

// Include plugins
var plugins = require("gulp-load-plugins")({
	pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});

// Define default destination folder
var dest = '../src/';


gulp.task('js', function() {

	var jsFiles = ['../src/js/*'];

	gulp.src(plugins.mainBowerFiles().concat(jsFiles))
		.pipe(plugins.filter('*.js'))
		.pipe(plugins.concat('scripts.js'))
		.pipe(plugins.uglify())
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
