import del from 'del';

import { src, dest, watch, series, parallel } from 'gulp';

// JS
import { createGulpEsbuild } from 'gulp-esbuild';

//import rename from 'gulp-rename';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import tailwindcss from 'tailwindcss';

//import imagemin from 'gulp-imagemin';
import postcss from 'gulp-postcss';
import browserSync from 'browser-sync';
import sourcemaps from 'gulp-sourcemaps';
import sassGlob from 'gulp-sass-glob';
import filter from 'gulp-filter';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();
const dirs = {
    src: 'src',
    dest: 'assets',
};

const cleanDist = () => {
    return del('./assets');
};

const devStyles = () => {
    return src([
        dirs.src + '/scss/main.scss'
    ])
        .pipe(sassGlob())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('src'))
        .pipe(
            postcss([
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer'),
                require('cssnano')({
                    preset: 'default',
                }),
                //require('postcss-prefix-selector')(prefixConfig),
            ])
        )
        .pipe(sourcemaps.write())
        .pipe(dest(dirs.dest + '/'))
        .pipe(browserSync.stream());
};

const buildStyles = () => {
    return src([
        dirs.src + '/scss/main.scss'
    ])
        .pipe(sassGlob())
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('src'))
        .pipe(
            postcss([
                tailwindcss('./tailwind.config.js'),
                require('autoprefixer'),
                //require('postcss-prefix-selector')(prefixConfig),
                require('cssnano')({
                    preset: 'default',
                }),
            ])
        )
        .pipe(dest(dirs.dest + '/'));
};

// --------------------------------------------------
// Scripts
// --------------------------------------------------

function buildJs(env) {
    var config = {
        incremental: true,
    };

    if (env === 'prod') {
        config.incremental = false;
    }
    const gulpEsbuild = createGulpEsbuild(config);

    return src(['./' + dirs.src + '/js/main.js'])
        .pipe(
            gulpEsbuild({
                bundle: true,
                target: ['es6'],
                entryNames: '[dir]/[name]',
                outdir: './',
                minifyWhitespace: env === 'prod' ?? true,
                loader: {
                    '.js': 'jsx',
                },
            })
        )
        .pipe(dest(dirs.dest + '/'));
}

const devScripts = (callback) => {
    return buildJs('dev', callback);
};

const buildScripts = (callback) => {
    return buildJs('prod', callback);
};

const livePreview = (done) => {
    // browserSync.init({
    //     proxy: process.env.PROXY || 'allegra.bt.localhost',
    //     open: 'local',
    //     notify: true,
    //     ghostMode: false,
    //     files: [
    //         dirs.dest + '/css/*',
    //         dirs.dest + '/js/main.js',
    //         dirs.dest + '/images/**/*',
    //         '**/*.php',
    //     ],
    //     reloadDebounce: 300,
    //     reloadDelay: 300,
    // });

    watch('**/*.liquid', series(devStyles));
    watch(dirs.src + '/scss/**/*.scss', series(devStyles));
    watch(dirs.src + '/js/**/*', series(devScripts));

    done();
};

exports.default = series(
    //cleanDist,
    parallel(devStyles, devScripts),
    livePreview
);

exports.build = series(
    //cleanDist,
    parallel(buildStyles, buildScripts),
    livePreview
);
