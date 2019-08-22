(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk1"],{

/***/ "./src/headlines.js":
/*!**************************!*\
  !*** ./src/headlines.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.lazyload = lazyload;\n\nvar _API = __webpack_require__(/*! ./API */ \"./src/API.js\");\n\nvar _AddContent = __webpack_require__(/*! ./AddContent */ \"./src/AddContent.js\");\n\n__webpack_require__(/*! @babel/polyfill */ \"./node_modules/@babel/polyfill/lib/index.js\");\n\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nfunction lazyload() {\n  console.log(\"fsf\");\n  fetch(_API.api.headlines).then(function (response) {\n    response.json().then(function (data) {\n      console.log(data);\n      (0, _AddContent.dynamicContentAdd)(data.articles);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/headlines.js?");

/***/ })

}]);