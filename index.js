import request from 'axios-low-encapsulation/';
import axios from 'axios';


const input = path.join(paths.src, 'index.js');
const outputName = {
  dev: 'funnies.dev.js',
  production: 'funnies.min.js',
};

const opts = Object.assign({}, watchify.args, {
  entries: 'docs/script.js',
  debug: true,
});
const bundler = watchify(browserify(opts)); 
bundler.transform('babelify', {presets: ['es2015', 'react']});

function bundle() {
  bundler.bundle()
    .on('error', console.log)
    .pipe(source('docs/bundle.js'))
    .pipe(connect.reload())
    .pipe(gulp.dest('docs/dist'))
}

var units = [
  { max: 2760000, value: 60000, name: 'minute', past: 'a minute ago', future: 'in a minute' },
  { max: 72000000, value: 3600000, name: 'hour', past: 'an hour ago', future: 'in an hour' },
  { max: 518400000, value: 86400000, name: 'day', past: 'yesterday', future: 'tomorrow' },
  { max: 2419200000, value: 604800000, name: 'week', past: 'last week', future: 'in a week' },
  { max: 28512000000, value: 2592000000, name: 'month', past: 'last month', future: 'in a month' } // max: 11 months
];