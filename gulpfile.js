const gulp = require('gulp')
const terser = require('gulp-terser')
const rename = require('gulp-rename')

function build() {
  return gulp.src('./confetti.js')
    .pipe(terser())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./'))
}

exports.default = build