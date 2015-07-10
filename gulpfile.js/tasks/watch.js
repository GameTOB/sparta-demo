var gulp = require('gulp'),
    del  = require('del'),
    data = require('gulp-data'),
    rename  = require('gulp-rename'),
    plumber = require('gulp-plumber'),
    swig    = require('gulp-swig'),
    browserSync = require('browser-sync');

var config = require('../config');

gulp.task('watch' , function(){

	var appkeys = require('../lib/app-conf').getAppkeys();

	gulp.watch(config.srcDirectory +'/guide.html', ['init::apps']);
	gulp.watch(config.srcDirectory +'/+('+ appkeys.join("|") +')/*.html', ['buildDist']);
	gulp.watch(config.srcDirectory +'/+('+ appkeys.join("|") +')/app/**/*', ['asset::apps','buildDist']);
	gulp.watch(config.srcDirectory +'/+('+ appkeys.join("|") +')/view/**/*', ['asset::apps','buildDist']);
	gulp.watch(config.baseSrcDirectory +'/module/**/*', ['asset::module','buildDist']);
	gulp.watch(config.baseSrcDirectory +'/framework/**/*', ['asset::framework','buildDist']);

});