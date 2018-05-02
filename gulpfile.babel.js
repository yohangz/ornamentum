import gulp from 'gulp';
import gulpFile from 'gulp-file';
import inlineTemplates from 'gulp-inline-ng2-template';

import sass from 'node-sass';
import cssnano from 'cssnano';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import url from 'postcss-url';
import stripInlineComments from 'postcss-strip-inline-comments';

import path from 'path';
import pump from 'pump';
import fs from 'fs';

import { rollup } from 'rollup';
import rollupUglify from 'rollup-plugin-uglify';
import rollupSourcemaps from 'rollup-plugin-sourcemaps';
import rollupNodeResolve from 'rollup-plugin-node-resolve';
import rollupCommonjs from 'rollup-plugin-commonjs';

import merge from 'lodash/merge';

const pkgJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

// Compile Sass to css
const styleProcessor = (stylePath, ext, styleFile, callback) => {
  /**
   * Remove comments, autoprefixer, Minifier
   */
  const processors = [
    stripInlineComments,
    autoprefixer,
    cssnano
  ];

  const postProcessCss = css => {
    postcss(processors)
      .use(url({
        url: 'inline',
        basePath: path.resolve(__dirname, 'src/library')
      }))
      .process(css, {
        from: undefined
      })
      .then(result => {
        result.warnings().forEach(function (warn) {
          log.warn(warn.toString());
        });
        styleFile = result.css;
        callback(null, styleFile);
      });
  };

  if (/\.(scss|sass)$/.test(ext[0])) {
    let sassObj = sass.renderSync({ file: stylePath });
    if (sassObj && sassObj['css']) {
      let css = sassObj.css.toString('utf8');
      postProcessCss(css);
    }
  } else if (/\.css$/.test(ext[0])) {
    postProcessCss(styleFile);
  }
};

/**
 * Inline templates configuration.
 * @see  https://github.com/ludohenin/gulp-inline-ng2-template
 */
const config = {
  src: './src/library/**/!(*.spec).ts',
  inlineTemplateDist: './.tmp/src-inlined',
  es5TmpDir: './.tmp/lib-es5',
  es2015TmpDir: './.tmp/lib-es2015',
  outDir: 'dist',
  inlineTemplateConfig: {
    base: '/src/library',
    useRelativePaths: true,
    styleProcessor: styleProcessor
  }
};

/**
 * Inline external HTML and SCSS templates into Angular component files.
 * @see: https://github.com/ludohenin/gulp-inline-ng2-template
 */
gulp.task('inline-templates', () => {
  return gulp.src(config.src)
    .pipe(inlineTemplates(config.inlineTemplateConfig))
    .pipe(gulp.dest(config.inlineTemplateDist));
});

gulp.task('copy-package-essentials', (cb) => {
  let targetPkgJson = {};
  let fieldsToCopy = ['version', 'description', 'keywords', 'author', 'repository', 'license', 'bugs', 'homepage'];

  targetPkgJson['name'] = pkgJson.name;

  //only copy needed properties from project's package json
  fieldsToCopy.forEach((field) => { targetPkgJson[field] = pkgJson[field]; });

  targetPkgJson['main'] = `./bundles/${pkgJson.name}.umd.js`;
  targetPkgJson['module'] = `./esm5/${pkgJson.name}.es5.js`;
  targetPkgJson['es2015'] = `./esm2015/${pkgJson.name}.js`;
  targetPkgJson['typings'] = `./${pkgJson.name}.d.ts`;

  // defines project's dependencies as 'peerDependencies' for final users
  targetPkgJson.peerDependencies = {};
  Object.keys(pkgJson.dependencies).forEach((dependency) => {
    // versions are defined as '^' by default, but you can customize it by editing "dependenciesRange" in '.yo-rc.json' file
    targetPkgJson.peerDependencies[dependency] = `^${pkgJson.dependencies[dependency].replace(/[\^~><=]/,'')}`;
  });

  // copy the needed additional files in the 'dist' folder
  pump([
      gulp.src(['README.md', 'LICENSE', 'CHANGELOG.md', `${config.es5TmpDir}/**/*.d.ts`, `${config.es5TmpDir}/**/*.metadata.json`]),
      gulpFile('package.json', JSON.stringify(targetPkgJson, null, 2)),
      gulp.dest(config.outDir)
  ], cb);
});

// Bundles the library as UMD/FESM bundles using RollupJS
gulp.task('rollup-bundle', () => {
  // Base configuration.
  const es5Input = path.join(config.es5TmpDir, `${pkgJson.name}.js`);
  const es2015Input = path.join(config.es2015TmpDir, `${pkgJson.name}.js`);
  const globals = {
    // The key here is library name, and the value is the name of the global variable name
    // the window object.
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#globals for more.

    // Angular dependencies
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    '@angular/platform-browser': 'ng.platform-browser',
    '@angular/animations': 'ng.animations',

    // Rxjs dependencies
    'rxjs/Subject': 'Rx',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/forkJoin': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/add/observable/merge': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',
    'rxjs/add/operator/auditTime': 'Rx.Observable.prototype',
    'rxjs/add/operator/toPromise': 'Rx.Observable.prototype',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/filter': 'Rx.Observable.prototype',
    'rxjs/add/operator/do': 'Rx.Observable.prototype',
    'rxjs/add/operator/share': 'Rx.Observable.prototype',
    'rxjs/add/operator/finally': 'Rx.Observable.prototype',
    'rxjs/add/operator/catch': 'Rx.Observable.prototype',
    'rxjs/add/observable/empty': 'Rx.Observable.prototype',
    'rxjs/add/operator/first': 'Rx.Observable.prototype',
    'rxjs/add/operator/startWith': 'Rx.Observable.prototype',
    'rxjs/add/operator/switchMap': 'Rx.Observable.prototype',
    'rxjs/add/operator/debounceTime': 'Rx.Observable.prototype',
    'rxjs/add/operator/take': 'Rx.Observable.prototype',

    'lodash-es/get': '_.get',
    'lodash-es/orderBy': '_.orderBy'
  };

  const rollupBaseConfig = {
    output:{
      name: pkgJson.name,
      sourcemap: true,
      globals: globals
    },
    onwarn: function (warning) {
      // Suppress this error message... there are hundreds of them. Angular team says to ignore it.
      // https://github.com/rollup/rollup/wiki/Troubleshooting#this-is-undefined
      if (warning.code === 'THIS_IS_UNDEFINED') {
        return;
      }
      console.error(warning.message);
    },
    // List of dependencies
    // See https://github.com/rollup/rollup/wiki/JavaScript-API#external for more.
    external: Object.keys(globals),
    plugins: [
      rollupCommonjs({
        include: 'node_modules/**'
      }),
      rollupSourcemaps(),
      rollupNodeResolve({
        jsnext: true,
        module: true,
        jail: config.outDir, // to use final 'package.json' from 'dist/'
      })
    ]
  };

  // UMD bundle.
  const umdConfig = merge({}, rollupBaseConfig, {
    input: es5Input,
    output: {
      name: pkgJson.name,
      format: 'umd',
      file: path.join(config.outDir, `bundles`, `${pkgJson.name}.umd.js`)
    }
  });

  // Minified UMD bundle.
  const minifiedUmdConfig = merge({}, rollupBaseConfig, {
    input: es5Input,
    output: {
      name: pkgJson.name,
      format: 'umd',
      file: path.join(config.outDir, `bundles`, `${pkgJson.name}.umd.min.js`),
    },
    plugins: rollupBaseConfig.plugins.concat([rollupUglify({})])
  });

  // ESM+ES5 flat module bundle.
  const fesm5config = merge({}, rollupBaseConfig, {
    input: es5Input,
    output: {
      format: 'es',
      file: path.join(config.outDir, 'esm5', `${pkgJson.name}.es5.js`),
    }
  });

  // ESM+ES2015 flat module bundle.
  const fesm2015config = merge({}, rollupBaseConfig, {
    input: es2015Input,
    output: {
      format: 'es',
      file: path.join(config.outDir, 'esm2015', `${pkgJson.name}.js`),
    }
  });

  const allBundles = [
    umdConfig,
    minifiedUmdConfig,
    fesm5config,
    fesm2015config
  ].map(cfg => rollup(cfg).then(bundle => bundle.write(cfg.output)));

  return Promise.all(allBundles)
    .then(() => console.log('All bundles generated successfully.'))
    .catch(e => {
      console.error('rollup-bundling failed. See below for errors.');
      console.error(e);
      process.exit(1);
    });
});

