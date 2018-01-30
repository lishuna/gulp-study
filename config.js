const src = './app';
const dest = './dist';

const config = {
    src: src,
    dest: dest,
    script: {
        src: src + '/js/**/*.js',
        dest: dest + '/js'
    },
    style: {
        src: src + '/scss/**/*.scss',
        dest: dest + '/css'
    },
    html: {
        src: src + '/**/*.html'
    }

}
module.exports = config;