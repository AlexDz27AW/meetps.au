'use strict';

// Load modules
// ======================================
var gulp         = require('gulp'),
	runSequence  = require('run-sequence'),
	sass         = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	spritesmith  = require('gulp.spritesmith'),
	imagemin     = require('gulp-imagemin'),
	buffer       = require('vinyl-buffer');


// Variables
// ======================================
var folders = {
	sass_folder: 'sass',
	sass_files: 'sass/**/*.scss',
	sass_target: '',

	sprites: 'sprites/*.{png,jpg,gif}',
	sprites_retina: 'sprites/*@2x.{png,jpg,gif}',
	sprites_target: ''
};


// GO
// ======================================
gulp.task('default', function() {
	runSequence(
		'sprite',
		'sass'
	);
});

// Sprites
gulp.task('sprite', function ()
{
	var spriteData = gulp.src(folders.sprites)
	.pipe(
		spritesmith({
			retinaSrcFilter: [folders.sprites_retina],
			retinaImgName: 'images/sprite@2x.png',
			imgName: 'images/sprite.png',
			cssName: '_sprite.scss',
			padding: 5,
			algorithm: 'top-down',
			cssVarMap: function (sprite) {
				sprite.name = 'sprite-' + sprite.name
			}
		})
	);
	
	spriteData.img
		.pipe(buffer())
		.pipe(imagemin())
		.pipe(gulp.dest(folders.sprites_target));

	spriteData.css.pipe(
		gulp.dest(folders.sass_folder)
	);
});

// SASS to CSS
// ======================================
gulp.task('sass', function ()
{
	return gulp.src(
		folders.sass_files
	)
		// sass
		.pipe(sass({
			// outputStyle: 'compressed'
		}))
		// autoprefixer
		.pipe(autoprefixer({
			browsers: ['last 5 version', 'ie >= 9', 'opera >= 12', '> 5%'],
			cascade: false
		}))
		.pipe(gulp.dest(folders.sass_target));
});