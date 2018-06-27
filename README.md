<style>
	ul.icon-list {
    list-style-type: none;
  }
  ul.icon-list li {
    position: relative;
    padding-left: 0.4em;
    line-height: 2em;
  }
  ul.icon-list li::before {
    position: absolute;
    left: -1.5em;
    top: 0.1em;
  }
  ul.icon-list li.data-icon::before {
    content: url(./documentation/data.svg);
  }
  ul.icon-list li.sort-icon::before {
    content: url(./documentation/sort.svg);
  }
  ul.icon-list li.filter-icon::before {
    content: url(./documentation/filter.svg);
  }
  ul.icon-list li.layout-icon::before {
    content: url(./documentation/layout.svg);
  }
  ul.icon-list li.persist-icon::before {
    content: url(./documentation/persist.svg);
  }
  ul.icon-list li.paging-icon::before {
    content: url(./documentation/paging.svg);
  }
  ul.icon-list li.select-icon::before {
    content: url(./documentation/select.svg);
  }
  ul.icon-list li.resize-icon::before {
    content: url(./documentation/resize.svg);
  }
  ul.icon-list li.group-icon::before {
    content: url(./documentation/group.svg);
  }
  ul.icon-list li.translation-icon::before {
    content: url(./documentation/translate.svg);
  }
</style>
<p align="center">
  <img src="./documentation/ornamentum.svg" alt="ornamentum"/>
  
  <a href="https://travis-ci.org/yohangz/ornamentum">
    <img src="https://travis-ci.org/yohangz/ornamentum.svg?branch=master" alt="travis build" height="18">
  </a>
  <a href="https://github.com/yohangz/ornamentum/blob/master/LICENSE">
    <img src="http://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="license" height="18">
  </a>  
  <a href="https://badge.fury.io/js/ornamentum">
    <img src="https://badge.fury.io/js/ornamentum.svg" alt="npm version" height="18">
  </a>
</p>

> Lightweight, feature rich, highly configurable, UI framework agnostic, full responsive Angular data table with minimal dependencies.

Ornamentum data table is a powerful widget which allows you to visualize via its table representation. This is a ```Highly Configurable``` ```Open Source``` library which has ```Minimum Dependency Support``` and works in all most all the well-known browsers. 

Check out the [documentation](https://ornamentum.app/api-docs/) & [demos](https://ornamentum.app/) for more information!

## Installation

Install the Ornamentum package and its [dependencies](#peer-dependencies) using the following command:

Via Yarn

```yarn add ornamentum lodash-es --save```

Via NPM

```npm install ornamentum lodash-es --save```

## Peer Dependencies

* Angular 6 or above
* Lodash-es 2.14.10 (get and orderBy)

## Features
<ul class="icon-list">
  <li class="data-icon">Client, server and realtime data binding support with observables</li>
  <li class="sort-icon">Single and multi column sorting</li>
  <li class="filter-icon">Single and multi value filtering</li>
  <li class="layout-icon">Custom layout templating support</li>
  <li class="persist-icon">Data table state persistence with session/local storage modes</li>
  <li class="paging-icon">Client and server side pagination</li>
  <li class="select-icon">Single, multi and single toggle row selection modes</li>
  <li class="resize-icon">Experimental column resizing</li>
  <li class="group-icon">Experimental row grouping support</li>
  <li class="translation-icon">Translation support and much more</li>
</ul>

## How to Contribute

Setup project in local development environment

```
# clone project
git clone git@github.com:yohangz/ornamentum.git
cd ornamentum

# this would install and would do a yarn link for jest-editor-support
yarn install

# start the app
yarn start
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
|[<img src="https://avatars2.githubusercontent.com/u/5279079?s=400&v=4" width="100px;"/><br /><sub>Yohan Gomez</sub>][yohan-profile]<br />💬 [💻](https://github.com/yohangz/ornamentum/commits?author=yohangz) 📖 🎨 💡 🤔 👀|[<img src="https://avatars2.githubusercontent.com/u/6312524?s=400&u=efc9267c6f903c379fafaaf7b3b0d9a939474c01&v=4" width="100px;"/><br /><sub>Lahiru Jayamanna</sub>][lahiru-profile]<br />💬 [💻](https://github.com/yohangz/ornamentum/commits?author=lahiruz) 📖 🎨 💡 🤔 👀|[<img src="https://avatars2.githubusercontent.com/u/35022498?s=400&v=4" width="100px;"/><br /><sub>Samuditha Wadigamangawa</sub>][samuditha-profile]<br />[💻](https://github.com/yohangz/ornamentum/commits?author=samudithaw) 🎨 💡 🤔|
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind are welcome!

## Changelog

Recent changes can be viewed on Github on the [CHANGELOG.md](https://github.com/yohangz/ornamentum/blob/master/CHANGELOG.md)

## License

This software is licensed under the [MIT License][license]

[license-badge]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license]: https://github.com/yohangz/ornamentum/blob/master/LICENSE

[yohan-profile]: https://github.com/yohangz
[lahiru-profile]: https://github.com/lahiruz
[samuditha-profile]: https://github.com/samudithaw
