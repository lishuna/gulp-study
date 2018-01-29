const gulp = require('gulp');
const color = require('color'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const reload = browserSync.reload;


// 本地服务
gulp.task('serve', ['js', 'sass', 'html'], () => {
    browserSync.init({
        server: {
            // 浏览器访问的跟路径
            baseDir: './dist'
        }
    });
    // 监听变化
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch('./app/js/*.js', ['js']);
    gulp.watch('./app/*.html', ['html']).on('change', reload);
});
gulp.task('sass', () => {
    return gulp.src('./app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('js', () => {
    const src = './app/js/*.js';
    const dest = './dist/js';
    return gulp.src(src)
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(dest))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('html', () => {
    return gulp.src('./app/*.html')
        .pipe(gulp.dest('./dist'));
});
gulp.task('default', ['server']);