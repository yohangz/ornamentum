# Build Task Detail

> This repo contains Ornamentum [library](https://www.npmjs.com/package/ornamentum) and [demo site](http://www.ornamentum.app) codebase.

## Demo site

Ornamentum demo source reside under `src` directory. This is a [Angular CLI](https://github.com/angular/angular-cli) universal solution (SSR enabled) with service worker integration. 

```sh
# run SCSS lint and TS lint
yarn lint:demo

# run test stute on watch mode
yarn test:demo

# run test suite and generate coverage report
yarn test:demo:coverage

# serve demo app on watch mode
yarn start

# serve demo app with server side rendering build
yarn start:ssr
```

## Library project

Ornamentum library source reside under `projects/ornamentum/src` directory. This is a Angular CLI based [library project](https://github.com/angular/angular-cli/wiki/stories-create-library).

```sh
# run test stute on watch mode
yarn test:lib

# run test suite and generate coverage report
yarn test:lib:coverage

# build library project on dev mode
yarn build:lib:dev

# build library project on prod mode
yarn build:lib:prod

# build both library and demo project on production mode
yarn build

# bump package version and tag
yarn version

# publish library ro NPM registry
yarn release

# explore bundle size
yarn explorer
```

## Rapid development steps

1. Clone Ornamentum source and move to project directory `git clone git@github.com:yohangz/ornamentum.git && $_`
2. Install dependencies `yarn`
3. Run serve task `yarn start` 
5. Explicitly build lib project when lib code is updated [(Read more)](https://github.com/angular/angular-cli/wiki/stories-create-library#why-do-i-need-to-build-the-library-everytime-i-make-changes).
6. Run build task after change is done: `yarn build`
7. Commit changes with a meaningful message if build is successful with no lint issues and unit test failures.
8. Push changes and verify travis build stats
