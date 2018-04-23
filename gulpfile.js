const gulp = require('gulp');

const inlineTemplates = require('gulp-inline-ng2-template');

const sass = require('node-sass');
const cssnano = require('cssnano');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const url = require("postcss-url");
const stripInlineComments = require('postcss-strip-inline-comments');

const log = require('fancy-log');

const path = require('path');

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
        basePath: path.resolve(__dirname, 'src/library')  // path.resolve(__dirname, 'src/library').fixed()
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
const INLINE_TEMPLATES = {
  SRC: './src/library/**/*.ts',
  DIST: './.tmp/src-inlined',
  CONFIG: {
    base: '/src/library',
    target: 'es6',
    useRelativePaths: true,
    styleProcessor: styleProcessor
  }
};

/**
 * Inline external HTML and SCSS templates into Angular component files.
 * @see: https://github.com/ludohenin/gulp-inline-ng2-template
 */
gulp.task('inline-templates', () => {
  return gulp.src(INLINE_TEMPLATES.SRC)
    .pipe(inlineTemplates(INLINE_TEMPLATES.CONFIG))
    .pipe(gulp.dest(INLINE_TEMPLATES.DIST));
});
