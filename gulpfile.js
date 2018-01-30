const gulp = require('gulp');
const color = require('color'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const config = require('./config');
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
    gulp.watch(config.style.src, ['sass']);
    gulp.watch(config.script.src, ['js']);
    gulp.watch(config.html.src, ['html']).on('change', reload);
});
gulp.task('sass', () => {
    return gulp.src(config.style.src)
        .pipe(concat('core.css'))
        .pipe(sass())
        .pipe(gulp.dest(config.style.dest))
        .pipe(reload({
            stream: true
        }));
});
gulp.task('js', () => {
    const src = './app/js/*.js';
    const dest = './dist/js';
    return gulp.src(config.script.src)
        .pipe(concat('core.js'))
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
    return gulp.src(config.html.src)
        .pipe(gulp.dest('./dist'));
});
gulp.task('default', ['server']);