const gulp = require('gulp');


/* add vendor prefixes and minify css */
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix-minify-css', () =>
    gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles/'))
);


/* babel and minify JS files */
const minify = require("gulp-babel-minify");
gulp.task('minify-js', () =>{
  gulp.src('src/js/*.js')
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest('dist/js/'))
});



/* copy other files */
gulp.task('copy', function () {
    gulp.src(['src/images/*.svg', 'src/images/*.png'])
        .pipe(gulp.dest('dist/images/'));
        gulp.src('src/fonts/*')
        .pipe(gulp.dest('dist/fonts/'));
});


/* compress images */
const imagemin = require('gulp-imagemin');
gulp.task('compress-images', () =>
    gulp.src('src/images/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'))
);


/* watch for changes */
gulp.task('watch', function() {
  gulp.watch('src/styles/*.css', ['prefix-minify-css']);
  gulp.watch('src/js/*.js', ['minify-js']);
  gulp.watch('src/images/*.jpg', ['compress-images']);
});


/* combining our tasks to minify css, js & images */
gulp.task('default', ['prefix-minify-css', 'minify-js', 'copy', 'compress-images']);