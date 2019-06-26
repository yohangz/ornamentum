# Build Task Detail

> This repo contains Ornamentum [library](https://www.npmjs.com/package/ornamentum) and [demo site](http://www.ornamentum.app) codebase.

## Demo application tasks

Ornamentum demo source reside under `src` directory. This is a [Angular CLI](https://github.com/angular/angular-cli) universal solution (SSR enabled) with service worker integration. 

```sh
# run TS lint
npm run lint:demo:ts

# run SCSS lint
npm run lint:demo:scss

# run test stute on watch mode
npm run test:demo

# run test suite and generate coverage report
npm run test:demo:coverage

# serve demo app on watch mode
npm run start

# serve demo app with server side rendering build
npm run start:ssr
```

## Library project tasks

Ornamentum library source reside under `projects/ornamentum/src` directory. This is a Angular CLI based [library project](https://github.com/angular/angular-cli/wiki/stories-create-library).

```sh
# run TS lint
npm run lint:lib:ts

# run SCSS lint
npm run lint:lib:scss

# run test stute on watch mode
npm run test:lib

# run test suite and generate coverage report
npm run test:lib:coverage

# build library project on dev mode
npm run build:lib:dev

# build library project on prod mode
npm run build:lib:prod
```

## Common tasks

```sh
# run both library and demo project linters
npm run lint

# build both library and demo project on production mode
npm run build

# bump package version and tag
npm run version

# publish library ro NPM registry
npm run release

# explore bundle size
npm run explorer
```

## Rapid development steps

1. Clone Ornamentum source and move to project directory `git clone git@github.com:yohangz/ornamentum.git && $_`
2. Install dependencies `npm install`
3. Run serve task `npm run start` 
5. Explicitly build lib project when lib code is updated ([Read more](https://github.com/angular/angular-cli/wiki/stories-create-library#why-do-i-need-to-build-the-library-everytime-i-make-changes)).
6. Execute linters and fix prompted `npm run lint`
6. Run build task after changes are done `npm run build`
7. Commit changes with a meaningful message if build is successful with no lint issues and unit test failures.
8. Push changes and verify travis build stats
