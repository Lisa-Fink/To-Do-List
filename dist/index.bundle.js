/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 103%;\n\tvertical-align: baseline;\n    list-style: none;\n    font-family: 'Roboto', sans-serif;\n}\n\n#main-content h1, #main-content h2, #main-content h3 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 5rem;\n    color: #0a0028;\n}\n\n#heading-check {\n    font-size: 5rem;\n    color: white;\n}\n\nh2 {\n    font-size: 3rem;\n    margin-top: 15px;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background-color: lightgray;\n    color: #0a0028;\n}\ninput, textarea {\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    vertical-align: middle;\n}\n#main {\n    display: flex;\n}\n\n#main-content {\n    flex-grow: 1;\n}\n\n#heading {\n    border-bottom: 2px #20008c solid;\n    background-color: #280c57;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#to {\n    color: #6628d2;\n}\n#do {\n    color: lightgray;\n}\n\n#add-project-input {\n    display: none;\n}\n\n#todo-form {\n    display: none;\n}\n#todo-form span, #edit-todo-form span {\n    font-size: 1.75rem;\n}\n\n#todo-form input, #edit-todo-form input {\n    font-size: 1rem;\n}\n\n#star-form {\n    grid-row: 4/5;\n    grid-column: 1/3;\n    justify-self: center;\n}\n#button-form {\n    grid-row: 5/6;\n    grid-column: 1/3;\n    justify-self: center;\n}\n\n#input-container {\n    display: grid;\n    grid-template-columns: 15% 20%;\n    row-gap: 15px;\n    width: 80%;\n    justify-content: center;\n    justify-items: start;\n    margin: 30px auto 15px auto;\n    border-bottom: 2px #0a0028 solid;\n}\n\n.task-list {\n    display: flex;\n    gap: 5px 80px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-list > div > span {\n    padding: 15px;\n}\n\n.task-ul > li {\n    padding: 15px;\n    border-bottom: 2px #0f0421 solid;\n}\n\n.description {\n    margin-left: 15px;\n    color: #443082;\n    font-style: italic;\n    word-break: break-word;\n}\n\n.complete {\n    text-decoration: line-through;\n}\n\n.important {\n    color: yellow;\n}\n\n.material-symbols-outlined:hover {\n    color: white;\n}\n.material-symbols-outlined{\n    vertical-align: middle;\n}\n\n#sidepanel {\n    background-color: darkgray;\n    min-height: 600px;\n    padding: 15px;\n    min-width: 236px;\n}\n\n#sidepanel li:hover, #sidepanel span:hover {\n    color: white;\n}\n\n#sidepanel ul {\n    margin: 5px 0;\n}\n\n#sidepanel li {\n    margin-left: 10px;\n    padding: 5px;\n}\n\n#project-name-input {\n    font-size: 1rem;\n}\n\n/* All projects page */\n\n#proj-links {\n    text-align: right;\n}\n\n#add-project-form > div {\n    display: inline-block;\n}\n\n#add-project-form > h3 {\n    margin-bottom: 20px;\n}\n\n#add-project-form > div > span {\n    padding: 5px;\n    font-size: 2rem;\n}\n\n#all-proj-container span:hover {\n    color: white;\n}\n\n#all-proj-ul {\n    display: grid;\n    grid-template-columns: 200px 200px 200px;\n    grid-auto-columns: 240px;\n    grid-auto-rows: minmax(240px, auto);\n    gap: 25px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 80%;\n    \n}\n\n.proj-card > div > form {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.proj-card > div > form > textarea {\n    font-size: 1.5rem;\n    text-align: center;\n    word-wrap: break-word;\n    border-radius: 15px;\n}\n\n#project-input-buttons > span {\n    font-size: 2rem;\n}\n#project-input-buttons {\n    padding: 5px;\n}\n\n.proj-card span {\n    text-align: right;\n}\n\n.proj-card {\n    background-color: #280c57;\n    border-radius: 20px;\n    border: 2px #0f0421 solid;\n    padding: 15px;\n    color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#all-proj-name-input {\n    font-size: 1.5rem;\n    padding: 8px;\n}\n\n#add-project-form {\n    width: fit-content;\n    margin: 10px auto;\n    padding: 15px;\n    padding-bottom: 40px;\n    display: none;\n}\n\n#add-task {\n    display: block;\n}\n\n#add-project-main, #add-project-main span, #add-task, #add-task span {\n    font-size: 2rem;\n    padding: 15px;\n    text-align: center;\n}\n\n/* task pgs */\n.task-ul {\n    width: 80%;\n    margin: 15px auto;\n}\n\n.task-container {\n    display: flex;\n    align-items: center;\n    gap: 5px 40px;\n}\n\n.empty {\n    text-align: center;\n}\n#buttons {\n    text-align: right;\n    margin-right: 20px;\n    padding: 5px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 103%;\n\tvertical-align: baseline;\n    list-style: none;\n    font-family: 'Roboto', sans-serif;\n}\n\n#main-content h1, #main-content h2, #main-content h3 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 5rem;\n    color: #0a0028;\n}\n\n#heading-check {\n    font-size: 5rem;\n    color: white;\n}\n\nh2 {\n    font-size: 3rem;\n    margin-top: 15px;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background-color: lightgray;\n    color: #0a0028;\n}\ninput, textarea {\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    vertical-align: middle;\n}\n#main {\n    display: flex;\n}\n\n#main-content {\n    flex-grow: 1;\n}\n\n#heading {\n    border-bottom: 2px #20008c solid;\n    background-color: #280c57;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#to {\n    color: #6628d2;\n}\n#do {\n    color: lightgray;\n}\n\n#add-project-input {\n    display: none;\n}\n\n#todo-form {\n    display: none;\n}\n#todo-form span, #edit-todo-form span {\n    font-size: 1.75rem;\n}\n\n#todo-form input, #edit-todo-form input {\n    font-size: 1rem;\n}\n\n#star-form {\n    grid-row: 4/5;\n    grid-column: 1/3;\n    justify-self: center;\n}\n#button-form {\n    grid-row: 5/6;\n    grid-column: 1/3;\n    justify-self: center;\n}\n\n#input-container {\n    display: grid;\n    grid-template-columns: 15% 20%;\n    row-gap: 15px;\n    width: 80%;\n    justify-content: center;\n    justify-items: start;\n    margin: 30px auto 15px auto;\n    border-bottom: 2px #0a0028 solid;\n}\n\n.task-list {\n    display: flex;\n    gap: 5px 80px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-list > div > span {\n    padding: 15px;\n}\n\n.task-ul > li {\n    padding: 15px;\n    border-bottom: 2px #0f0421 solid;\n}\n\n.description {\n    margin-left: 15px;\n    color: #443082;\n    font-style: italic;\n    word-break: break-word;\n}\n\n.complete {\n    text-decoration: line-through;\n}\n\n.important {\n    color: yellow;\n}\n\n.material-symbols-outlined:hover {\n    color: white;\n}\n.material-symbols-outlined{\n    vertical-align: middle;\n}\n\n#sidepanel {\n    background-color: darkgray;\n    min-height: 600px;\n    padding: 15px;\n    min-width: 236px;\n}\n\n#sidepanel li:hover, #sidepanel span:hover {\n    color: white;\n}\n\n#sidepanel ul {\n    margin: 5px 0;\n}\n\n#sidepanel li {\n    margin-left: 10px;\n    padding: 5px;\n}\n\n#project-name-input {\n    font-size: 1rem;\n}\n\n/* All projects page */\n\n#proj-links {\n    text-align: right;\n}\n\n#add-project-form > div {\n    display: inline-block;\n}\n\n#add-project-form > h3 {\n    margin-bottom: 20px;\n}\n\n#add-project-form > div > span {\n    padding: 5px;\n    font-size: 2rem;\n}\n\n#all-proj-container span:hover {\n    color: white;\n}\n\n#all-proj-ul {\n    display: grid;\n    grid-template-columns: 200px 200px 200px;\n    grid-auto-columns: 240px;\n    grid-auto-rows: minmax(240px, auto);\n    gap: 25px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 80%;\n    \n}\n\n.proj-card > div > form {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.proj-card > div > form > textarea {\n    font-size: 1.5rem;\n    text-align: center;\n    word-wrap: break-word;\n    border-radius: 15px;\n}\n\n#project-input-buttons > span {\n    font-size: 2rem;\n}\n#project-input-buttons {\n    padding: 5px;\n}\n\n.proj-card span {\n    text-align: right;\n}\n\n.proj-card {\n    background-color: #280c57;\n    border-radius: 20px;\n    border: 2px #0f0421 solid;\n    padding: 15px;\n    color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#all-proj-name-input {\n    font-size: 1.5rem;\n    padding: 8px;\n}\n\n#add-project-form {\n    width: fit-content;\n    margin: 10px auto;\n    padding: 15px;\n    padding-bottom: 40px;\n    display: none;\n}\n\n#add-task {\n    display: block;\n}\n\n#add-project-main, #add-project-main span, #add-task, #add-task span {\n    font-size: 2rem;\n    padding: 15px;\n    text-align: center;\n}\n\n/* task pgs */\n.task-ul {\n    width: 80%;\n    margin: 15px auto;\n}\n\n.task-container {\n    display: flex;\n    align-items: center;\n    gap: 5px 40px;\n}\n\n.empty {\n    text-align: center;\n}\n#buttons {\n    text-align: right;\n    margin-right: 20px;\n    padding: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");






var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWordsStrict` to `formatDistanceStrict`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(2015, 0, 2),
 *     new Date(2014, 6, 2)
 *   ) //=> '6 months'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(2014, 6, 2),
 *     new Date(2015, 0, 2)
 *   ) //=> '6 months'
 *   ```
 *
 * - `partialMethod` option is renamed to `roundingMethod`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { partialMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { roundingMethod: 'ceil' }
 *   ) //=> '2 minutes'
 *   ```
 *
 * - If `roundingMethod` is not specified, it now defaults to `round` instead of `floor`.
 *
 * - `unit` option now accepts one of the strings:
 *   'second', 'minute', 'hour', 'day', 'month' or 'year' instead of 's', 'm', 'h', 'd', 'M' or 'Y'
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWordsStrict(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     { unit: 'm' }
 *   )
 *
 *   // v2.0.0 onward
 *
 *   formatDistanceStrict(
 *     new Date(1986, 3, 4, 10, 33, 1),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { unit: 'minute' }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
  }

  var roundingMethod = options.roundingMethod == null ? 'round' : String(options.roundingMethod);
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var unit;

  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(options.unit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && options.unit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNowStrict)
/* harmony export */ });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * var result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = formatDistanceToNowStrict(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), dirtyOptions);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/allProjects.js":
/*!****************************!*\
  !*** ./src/allProjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allProjControl": () => (/* binding */ allProjControl),
/* harmony export */   "allProjRender": () => (/* binding */ allProjRender),
/* harmony export */   "makeIcon": () => (/* binding */ makeIcon)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectPage */ "./src/projectPage.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _sideProjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideProjects */ "./src/sideProjects.js");





const makeIcon = (name) => {
    const span = document.createElement('span');
    span.classList.add('material-symbols-outlined');
    span.innerText = name;
    return span;
};

const allProjControl = (() => {
    const makePage = () => {
        allProjRender.page();
    }
    const projFunctions = (e) => {
        const projectClicked = e.target.parentElement.parentElement.data;
        const funcClicked =  e.target.data;
        if (funcClicked == 'view') {
            viewProject(projectClicked);
        } else if (funcClicked == 'rename') {
            renameProject(projectClicked, e);
        } else if (funcClicked == 'delete') {
            deleteProject(projectClicked);
        }
    }
    const viewProject = (project) => {
        ___WEBPACK_IMPORTED_MODULE_2__.contentController.goToProjectPage(project);
    }
    const renameProject = (project, e) => {
        const h3 = e.target.parentElement.parentElement.firstChild
        allProjRender.changeToInput(project, h3)
    }
    const deleteProject = (project) => {
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.removeProject(_classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.getIndex(project));
        _sideProjects__WEBPACK_IMPORTED_MODULE_3__.sideRender.update();
    }

    const makeEdit = (e) => {
        const projClicked = e.target.parentElement.parentElement.parentElement.parentElement.data;
        const newName = e.target.parentElement.parentElement[0].value;
        projClicked.name = newName == '' ? 'unnamed project' : newName;
        _sideProjects__WEBPACK_IMPORTED_MODULE_3__.sideRender.update();
    }
    const cancelEdit = () => {
        allProjRender.update();
    }
    const cancelForm = () => {
        const input = document.getElementById('all-proj-name-input');
        input.value = '';
        cancelEdit();
    }

    return {makePage, viewProject, projFunctions, makeEdit, cancelEdit, cancelForm};
})()

const allProjCreate = (() => {
    const heading = () => { 
        const head = document.createElement('h2');
        head.innerText = 'My Projects';
        return head;
        }
    const inputForm = (project) => {
        const form = document.createElement('form');
        form.style.display = 'flex';
        const nameInput = document.createElement('textarea');
        nameInput.value = project.name;

        const buttonDiv = document.createElement('div');
        buttonDiv.id = 'project-input-buttons'

        const check = makeIcon('check_circle');
        const cancel = makeIcon('cancel');
        check.addEventListener('click', allProjControl.makeEdit);
        cancel.addEventListener('click', allProjControl.cancelEdit);
        buttonDiv.appendChild(check);
        buttonDiv.appendChild(cancel);

        form.appendChild(nameInput);
        form.appendChild(buttonDiv);
        return form;
    }
    const projList = () => {
        const projectUl = document.createElement('ul');
        projectUl.id = 'all-proj-ul'
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects.forEach(project => {
            projectUl.appendChild(projCard(project));
        })
        return projectUl;
    }
    const projCard = (project) => {
        let li = document.createElement('li');
        li.data = project;
        li.classList.add('proj-card');

        const projHead = document.createElement('h3');
        projHead.innerText = project.name.length < 29 ? project.name: 
            `${project.name.slice(0,28)}...`;

        const projItems = document.createElement('p');
        projItems.innerText = `${project.todos.length} tasks`;

        const projLink = document.createElement('div');
        projLink.id = 'proj-links';
        const view = makeIcon('open_in_new');
        view.data = 'view';
        const rename = makeIcon('edit');
        rename.data = 'rename';
        const del = makeIcon('delete_forever');
        del.data = 'delete';

        const topDiv = document.createElement('div');
        
        projLink.appendChild(view);
        projLink.appendChild(rename);
        projLink.appendChild(del);
        projLink.addEventListener('click', allProjControl.projFunctions);

        topDiv.appendChild(projHead);
        topDiv.appendChild(projItems);
        li.appendChild(topDiv);
        li.appendChild(projLink);
        return li;
    }
    const addProject = () => {
        const addProject = document.createElement('div');
        addProject.innerText = 'Add Project ';
        addProject.appendChild(makeIcon('add_circle'));
        addProject.addEventListener('click', allProjRender.showForm);
        addProject.id = 'add-project-main'
        return addProject;
    }
    const addProjectForm = () => {
        const addDiv = document.createElement('div');
        addDiv.id = 'add-project-form'

        const projFormHeading = document.createElement('h3');
        projFormHeading.innerText = 'Create a New Project'

        const input = document.createElement('input');
        input.id = 'all-proj-name-input';
        input.placeholder = 'Enter Project Name';

        const buttons = document.createElement('div');
        const check = makeIcon('check_circle');
        const cancel = makeIcon('cancel');
        check.addEventListener('click', _sideProjects__WEBPACK_IMPORTED_MODULE_3__.sideControl.makeNewProject);
        cancel.addEventListener('click', allProjControl.cancelForm);
        buttons.appendChild(check);
        buttons.appendChild(cancel);

        addDiv.appendChild(projFormHeading);
        addDiv.appendChild(input);
        addDiv.appendChild(buttons);
        return addDiv;
    }
    return {projList, heading, inputForm, addProject, addProjectForm};
})()

const allProjRender = (() => {
    const changeToInput = (project, toBeChanged) => {
        toBeChanged.innerHTML = ''
        toBeChanged.appendChild(allProjCreate.inputForm(project));
    }
    const page = () => {
        const contentDiv = document.getElementById('main-content');
        contentDiv.data = 'all-projects'
        contentDiv.innerHTML = '';
        const allProjContainer = document.createElement('div');
        allProjContainer.id = 'all-proj-container';
        contentDiv.appendChild(allProjContainer);
        allProjContainer.appendChild(allProjCreate.heading());
        allProjContainer.appendChild(allProjCreate.addProjectForm());
        allProjContainer.appendChild(allProjCreate.addProject());
        allProjContainer.appendChild(allProjCreate.projList());
    }
    const update = () => {
        const addProj = document.getElementById('add-project-main')
        addProj && addProj.style.display != 'block' ? 
            addProj.style.display = 'none' : null;
        page()
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.updateStorage();
    }
    const showForm = () => {
        const addProj = document.getElementById('add-project-main')
        addProj.style.display = 'none'
        const form = document.getElementById('add-project-form');
        form.style.display = 'block'
    }
    return {page, update, changeToInput, showForm};
})()



/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ToDoList": () => (/* binding */ ToDoList),
/* harmony export */   "Todo": () => (/* binding */ Todo),
/* harmony export */   "todoLists": () => (/* binding */ todoLists)
/* harmony export */ });
/* harmony import */ var _allProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allProjects */ "./src/allProjects.js");


class ToDoList {
    constructor() {
        this.projects = projects;
    }
    addProject(project) {
        this.projects.push(project);
    }
    findProject(name) {
        let arr = this.projects
        for (let obj of arr) {
            if (obj.name == name) {
                return obj;
            }
        }
    }
    getIndex(project) {
        const index = this.projects.findIndex(x => x == project);
        return index;
    }
    removeProject(index) {
        this.projects = this.projects.slice(0,index).concat(this.projects.slice(index+1));
    }
    updateStorage() {
        localStorage.setItem('todoLists', JSON.stringify(this));
        const getTodoLists = localStorage.getItem('todoLists');
        const parsedTodoLists = JSON.parse(getTodoLists)
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodo(todo) {
        this.todos.push(todo);
    }
    findTodo(name) {
        for (let object of this.todos) {
            if (object.name == name) {
                return object;
            }
        }
    }
    removeTodo(index) {
        this.todos = this.todos.slice(0,index).concat(this.todos.slice(index+1));
    }
}

class Todo {
    constructor(name, description, date, important, complete=false) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.important = important;
        this.complete = complete;
    }
}

let todoLists = new ToDoList;

const populateStorage = () => {
    localStorage.setItem('todoLists', JSON.stringify(todoLists));
}

const setTodoLists = () => {
    const getTodoLists = localStorage.getItem('todoLists');
    const parsedTodoLists = JSON.parse(getTodoLists)
    const proj = [...parsedTodoLists.projects]
    
    if (proj) {
        proj.forEach(project => {
            let newProj = new Project(project.name);
            if (project.todos) {
                project.todos.forEach(todo => {
                    let newTodo = new Todo(todo.name, todo.description, 
                        todo.date, todo.important, todo.complete);
                    newProj.addTodo(newTodo)
                })
            }
            todoLists.addProject(newProj);
        })
    }     
}

if (!localStorage.getItem('todoLists')) {
    populateStorage()
} else {
    setTodoLists();
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentController": () => (/* binding */ contentController)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _sideProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideProjects */ "./src/sideProjects.js");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectPage */ "./src/projectPage.js");
/* harmony import */ var _sideHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideHome */ "./src/sideHome.js");







const contentController = (() => {
    const goToProjectPage = (project) => {
        _projectPage__WEBPACK_IMPORTED_MODULE_3__.projectControl.makePage(project);
    }
    const goToTasks = (taskType) => {
        _sideHome__WEBPACK_IMPORTED_MODULE_4__["default"].makeTasksPage(taskType);
    } 
    return {goToProjectPage, goToTasks};
})();




/***/ }),

/***/ "./src/projectPage.js":
/*!****************************!*\
  !*** ./src/projectPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectControl": () => (/* binding */ projectControl),
/* harmony export */   "todoCreate": () => (/* binding */ todoCreate)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _sideProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sideProjects */ "./src/sideProjects.js");
/* harmony import */ var _allProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allProjects */ "./src/allProjects.js");
/* harmony import */ var _sideHome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sideHome */ "./src/sideHome.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");






let thisProject = null;

const todoCreate = (() => {
    const heading = () => {
        const heading = document.createElement('h2');
        heading.innerText = thisProject.name;
        return heading;
    }

    const filters = (project, filter) => {
        let filteredTodos = project.todos;
        if (filter) {
            if (filter == 'important') {
                filteredTodos = project.todos.filter(todo => todo.important);
            } else if (filter == 'today') {
                let today = new Date();
                const dd = String(today.getDate()).padStart(2, '0');
                const mm = String(today.getMonth() + 1).padStart(2, '0');
                const yyyy = today.getFullYear();
                const formatToday = yyyy + '-' + mm + '-' + dd;
                filteredTodos = project.todos.filter(todo => todo.date == formatToday);
                } else {
                    filteredTodos = project.todos.
                        filter(todo => {
                           return  (todo.date && 
                            (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(todo.date)).split(' ')[0] <= 7) ?
                                todo : null;
                        });
                }
            }
        return filteredTodos;
    }
    const list = (project, filter=null) => {
        const ul = document.getElementById('todo-list-ul');
        if (project.todos) {
            let i = 1;
            let filteredTodos = filters(project, filter);
            for (let task of filteredTodos) {
                let li = document.createElement('li');
                li.id = i;
                li.data = task;
                let topDiv = document.createElement('div');

                let nameDiv = document.createElement('div');
                nameDiv.innerText = task.name.length < 31 ? task.name :
                `${task.name.slice(0,30)}...`;

                let dateDiv = document.createElement('div');
                if (task.date) {
                    dateDiv.innerText = `Due: ${task.date}`;
                } else {
                    dateDiv.innerText = 'No Due Date';
                }

                let taskChangeDiv = changerDiv(project, task);
                taskChangeDiv.data = i;

                const leftContainer = document.createElement('div');
                const rightContainer = document.createElement('div');
                rightContainer.className = 'task-container'
                leftContainer.className = 'task-container'

                leftContainer.appendChild(checkBox(task));
                leftContainer.appendChild(nameDiv);
                rightContainer.appendChild(dateDiv);
                rightContainer.appendChild(taskChangeDiv);
                topDiv.classList.add('task-list');
                topDiv.appendChild(leftContainer);
                topDiv.appendChild(rightContainer);
                li.appendChild(topDiv);
                let description = document.createElement('div');
                if (task.description) {
                    description = document.createElement('div');
                    description.classList.add('description');

                    description.innerText = task.description.length < 301 ? 
                        task.description :
                        `${task.description.slice(0,300)}...`;

                    li.appendChild(description);
                }
                task.complete ? 
                    (nameDiv.className = 'complete',
                        description.classList.add('complete')) :
                    (nameDiv.className = '',
                        description.className = 'description');
                i ++;
                ul.appendChild(li);
            }
        }
    }
    const todoList = () => {
        const ul = document.createElement('ul');
        ul.classList.add('task-ul');
        ul.id = 'todo-list-ul';
        return ul
    }
    
    const checkBox = (task) => {
        const checkBox = task.complete ? (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('check_box') :
            (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('check_box_outline_blank');
        checkBox.addEventListener('click', projectControl.changeStatus);
        checkBox.data = task;
        return checkBox;
    }
    const starIcon = (task) => {
        let star = null;
        if (task && task.important) {
            star = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('star');
            star.classList.add('important');
        } else {
            star = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('grade');
        }
        star.data = task;
        return star;
    }

    const changerDiv = (project, task) => {
        let changeDiv = document.createElement('div');
       
        let edit = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('edit');
        let remove = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('delete_forever');
        remove.data = project;
        let star = starIcon(task);
        

        star.addEventListener('click', projectControl.starClick);
        remove.addEventListener('click', projectControl.removeTodo);
        edit.addEventListener('click', projectControl.editTodo);

        changeDiv.appendChild(star);
        changeDiv.appendChild(edit);
        changeDiv.appendChild(remove);
        return changeDiv;
    }
    
    const todoForm = (editing=false, selectedTodo=null) => {
        const formHeading = document.createElement('h3');
        

        const todoForm = document.createElement('form');
        todoForm.autocomplete = 'off';
        todoForm.id = 'todo-form';
    
        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'Title: ';
        const titleInput = document.createElement('input');
        titleInput.classList.add('todo-input');
    
        const detailLabel = document.createElement('label');
        detailLabel.innerText = 'Details: ';
        const detailInput = document.createElement('textarea');
        detailInput.classList.add('todo-input');
    
        const dateLabel = document.createElement('label');
        dateLabel.innerText = 'Date: ';
        const dateInput = document.createElement('input');
        dateInput.type = 'date';
        dateInput.classList.add('todo-input');

        const starLabel = document.createElement('label');
        starLabel.appendChild(starIcon(selectedTodo));
        const starInput = document.createElement('input');
        starInput.type = 'hidden'
        starLabel.id = 'star-form'
        starLabel.addEventListener('click', projectControl.starForm);

        const addButton = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('check_circle');
        const cancelButton = (0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('cancel');
        
        if (editing) {
            formHeading.innerText = 'Edit a Task'
            todoForm.data = selectedTodo;
            todoForm.id = 'edit-todo-form';
            titleInput.value = selectedTodo.name;
            detailInput.value = selectedTodo.description ? 
                selectedTodo.description : '';
            dateInput.value = selectedTodo.date;
            addButton.addEventListener('click', projectControl.makeTodoEdit);
            cancelButton.addEventListener('click', projectControl.cancelEditTodoForm);
        } else {
            formHeading.innerText = 'Add a Task'
            addButton.addEventListener('click', projectControl.makeNewTodo);
            cancelButton.addEventListener('click', projectControl.cancelTodoForm);
        }
        const inputContainer = document.createElement('div')
        const buttonContainer = document.createElement('div')
        buttonContainer.id = 'button-form'
        inputContainer.id = 'input-container'

        todoForm.appendChild(formHeading);
        inputContainer.appendChild(titleLabel);
        inputContainer.appendChild(titleInput);
        inputContainer.appendChild(dateLabel);
        inputContainer.appendChild(dateInput);
        inputContainer.appendChild(detailLabel);
        inputContainer.appendChild(detailInput);
        inputContainer.appendChild(starLabel);
        inputContainer.appendChild(starInput);

        buttonContainer.appendChild(addButton);
        buttonContainer.appendChild(cancelButton);
        inputContainer.appendChild(buttonContainer);
        todoForm.appendChild(inputContainer);

        return todoForm;
    }
    
    const addTodoBtn = () => {
        const addTodo = document.createElement('div');
        addTodo.innerText = 'Add Task ';
        addTodo.appendChild((0,_allProjects__WEBPACK_IMPORTED_MODULE_2__.makeIcon)('add_circle'));
        addTodo.addEventListener('click', projectRender.showTodoForm);
        addTodo.id = 'add-task'
        return addTodo;
    }

    return {addTodoBtn, todoForm, todoList, heading, list};
})()



const projectRender = (() => {
    const contentDiv = document.getElementById('main-content');
    
    const projectPage = () => {
        contentDiv.innerHTML = '';
        contentDiv.data = 'project-page';
        contentDiv.appendChild(todoCreate.heading());
        contentDiv.appendChild(todoCreate.todoForm());
        contentDiv.appendChild(todoCreate.addTodoBtn());
        contentDiv.appendChild(todoCreate.todoList());
        todoCreate.list(thisProject);

    }

    const showTodoForm = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv.style.display = 'none'
        const todoForm = document.getElementById('todo-form');
        todoForm.style.display != 'block' ? 
            todoForm.style.display = 'block': null;
    }
    const hideTodoForm = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv.style.display = 'block'
        const todoForm = document.getElementById('todo-form');
        todoForm.style.display == 'block' ? 
            (todoForm.style.display = 'none', clearTodoForm): null;
    }

    const update = () => {
        const addTaskDiv = document.getElementById('add-task');
        addTaskDiv && addTaskDiv.style.display != 'block' ? addTaskDiv.style.display == 'block' : null;
        contentDiv.data == 'project-page' ? projectPage(thisProject) :
            contentDiv.data == 'all-tasks' ? _sideHome__WEBPACK_IMPORTED_MODULE_3__["default"].makeTasksPage('all') :
            contentDiv.data == 'important' ? _sideHome__WEBPACK_IMPORTED_MODULE_3__["default"].makeTasksPage('important') :
            contentDiv.data == 'today' ? _sideHome__WEBPACK_IMPORTED_MODULE_3__["default"].makeTasksPage('today') :
            contentDiv.data == 'week' ? _sideHome__WEBPACK_IMPORTED_MODULE_3__["default"].makeTasksPage('week') : null; 
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.updateStorage();
        }

    const clearTodoForm = () => {
        const inputs = document.querySelectorAll('.todo-input');
        inputs.forEach(input => input.value = '')
    };
    const changeLiToForm = (selectedTodo, selectedLi) => {
        selectedLi.innerHTML = ''
        selectedLi.appendChild(todoCreate.todoForm(true, selectedTodo));
    }
    return {projectPage, showTodoForm, hideTodoForm, update, clearTodoForm,
        changeLiToForm};
})()

const projectControl = (() => {
    const makePage = (project) => {
        setProject(project);
        projectRender.projectPage();
    }

    const setProject = (project) => {
        thisProject = project;
    }

    const makeNewTodo = (e) => {
        e.preventDefault();
        let todoInfo = getTodoInfo(e);
        let newTodo = createTodo(todoInfo[0], todoInfo[1], todoInfo[2], todoInfo[3]);
        thisProject.addTodo(newTodo);
        projectRender.showTodoForm();
        projectRender.update();
    }

    const getTodoInfo = (e) => {
        e.preventDefault();
        const values = [...e.target.parentElement.parentElement.parentElement]
        const name = values[0].value == '' ? 'unnamed task' : values[0].value
        const details = values[2].value;
        const date = values[1].value;
        const important = (values[3].previousSibling.
                childNodes[0].classList.contains('important')) ? true : false;
        return [name, details, date, important];
    }
    const createTodo = (name, description, date, important) => {
        name == '' ? name = 'unnamed task' : null;
        let newTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo(name, description, date, important);
        return newTodo;
    }
    const removeTodo = (e) => {
        let index = e.target.parentElement.data - 1;
        const project = e.target.data;
        project.removeTodo(index);
        projectRender.update();
    }
    const cancelTodoForm = (e) => {
        e.preventDefault();
        projectRender.hideTodoForm();
        projectRender.clearTodoForm();
    }
    const editTodo = (e) => {
        let selLi = findSelectedLi(e);
        let selectedTodo = selLi.data;
        projectRender.changeLiToForm(selectedTodo, selLi);
    }
    const findSelectedLi = (e) => {
        let id = e.target.parentElement.data;
        let selectedLi = document.getElementById(id);
        return selectedLi;
    }
    const cancelEditTodoForm = (e) => {
        e.preventDefault();
        projectRender.update();
    }
    const makeTodoEdit = (e) => {
        e.preventDefault();
        const selectedTodo = e.target.parentElement.parentElement.parentElement.data;
        let values = getTodoInfo(e);
        selectedTodo.name = values[0];
        selectedTodo.description = values[1];
        selectedTodo.date = values[2];
        selectedTodo.important = values[3];
        projectRender.update();
    }
    const starClick = (e) => {
        const todo = e.target.data;
        todo.important ? 
            (e.target.classList.remove('important'),
                e.target.innerText = 'grade',
                todo.important = false) :
            (e.target.classList.add('important'),
                e.target.innerText = 'star',
                todo.important = true);
        projectRender.update();
    }
    const changeStatus = (e) => {
        const todo = e.target.data;
        todo.complete ? todo.complete = false: todo.complete = true;
        projectRender.update();
    }
    const starForm = (e) => {
        (e.target.classList.contains('important')) ?
            (e.target.classList.remove('important'),
            e.target.innerText = 'grade') :
            (e.target.classList.add('important'),
            e.target.innerText = 'star')
    }
    
    return {makeNewTodo, setProject, makePage, cancelTodoForm, editTodo, 
            cancelEditTodoForm, makeTodoEdit, removeTodo, starClick, changeStatus, starForm};

})()



/***/ }),

/***/ "./src/sideHome.js":
/*!*************************!*\
  !*** ./src/sideHome.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var _allProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allProjects */ "./src/allProjects.js");
/* harmony import */ var _projectPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectPage */ "./src/projectPage.js");




const taskControl = (() => {
    const makeTasksPage = (type) => {
        let filter = type;
        //insert the correct content in the ul
        if (type == 'all') {
            render.tasksPage('all-tasks', 'All Tasks');
            const ulTask = document.getElementById('todo-list-ul');
            for (let proj of _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects) {
                _projectPage__WEBPACK_IMPORTED_MODULE_2__.todoCreate.list(proj);          
                }
            ulTask.innerHTML == '' ? render.emptyList('') : null;
            } else if (type == 'important') {
                render.tasksPage('important', 'Important Tasks');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects) {
                    _projectPage__WEBPACK_IMPORTED_MODULE_2__.todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList('important') : null;
            } else if (type == 'week') {
                render.tasksPage('week', 'Tasks Due This Week');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects) {
                    _projectPage__WEBPACK_IMPORTED_MODULE_2__.todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList(' due this week') : null;
            } else if (type == 'today') {
                render.tasksPage('today', 'Tasks Due Today');
                const ulTask  = document.getElementById('todo-list-ul');
                for (let proj of _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects) {
                    _projectPage__WEBPACK_IMPORTED_MODULE_2__.todoCreate.list(proj, filter);
                }
                    ulTask.innerHTML == '' ? render.emptyList(' due today') : null;
            }
            else if (type == 'projects') {
                _allProjects__WEBPACK_IMPORTED_MODULE_1__.allProjControl.makePage();
            }
        }

    return {makeTasksPage};
})()


const create = (() => {
    const heading = (headingText) => { 
    const head = document.createElement('h2');
    head.innerText = headingText;
    return head;
    }
    const ul = () => {
        const ul = document.createElement('ul');
        ul.classList.add('task-ul');
        ul.id = 'todo-list-ul';
        return ul;
    }
    const emptyList = (string) => {
        const emptyText = document.createElement('p');
        emptyText.classList.add('empty');
        emptyText.classList.add('description');
        emptyText.innerText = string != 'important' ? 
            `There are no tasks${string}.`:
            `There are no ${string} tasks.`;
        return emptyText;
    }
    
    return {heading, ul, emptyList};
})()

const render = (() => {
    const contentDiv = document.getElementById('main-content');
    const tasksPage = (dataType, headingText) => {
        contentDiv.data = dataType
        contentDiv.innerHTML = ''
        contentDiv.appendChild(create.heading(headingText));
        contentDiv.appendChild(create.ul());
    }
    const emptyList = (string) => {
        const ulTask = document.getElementById('todo-list-ul');
        ulTask.appendChild(create.emptyList(string));
    }
    return {tasksPage, emptyList};
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskControl);

/***/ }),

/***/ "./src/sideProjects.js":
/*!*****************************!*\
  !*** ./src/sideProjects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sideControl": () => (/* binding */ sideControl),
/* harmony export */   "sideFunc": () => (/* binding */ sideFunc),
/* harmony export */   "sideRender": () => (/* binding */ sideRender)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _allProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./allProjects */ "./src/allProjects.js");




const sideFunc = (() => {
    const createProject = (name) => {
        let newProject = new _classes__WEBPACK_IMPORTED_MODULE_0__.Project(name);
        return newProject;
    }
    const getInputName = (e) => {
        //checks if new project is added from side nav or projects page
        const input = e.target.id == 'add-button' ? 
            document.getElementById('project-name-input'):
            document.getElementById('all-proj-name-input');
        const name = input.value == '' ? 'unnamed project' : input.value;
        return name;
    }
    const getProject = (e) => {
        return e.target.data;
    }
    const getTaskType = (e) => {
        return e.target.attributes[0].nodeValue;
    }
    
    return {createProject, getInputName, getProject, getTaskType};
})()

const sideControl = (() => {
    const makeNewProject = (e) => {
        const name = sideFunc.getInputName(e);
        let newProject = sideFunc.createProject(name);
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.addProject(newProject);
        sideRender.hideProjectInput();
        sideRender.update();
    }

    const removeProject = (project) => {
        let index = _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.findIndex(project);
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.removeProject(index);
        sideRender.update();
    }
    const selectTask = (e) => {
        const taskType = sideFunc.getTaskType(e);
        ___WEBPACK_IMPORTED_MODULE_1__.contentController.goToTasks(taskType);
    }
    const selectProject = (e) => {
        const projectClicked = sideFunc.getProject(e);
        ___WEBPACK_IMPORTED_MODULE_1__.contentController.goToProjectPage(projectClicked);
    }
    const cancelProjectInput = () => {
        sideRender.clearInput();
        sideRender.hideProjectInput();
    }

    return {makeNewProject, removeProject, selectProject, cancelProjectInput,
        selectTask};
})()

const sideRender = (() => {
    let contentDiv = document.getElementById('main-content');
    let projectUl = document.getElementById('projects');
    const input = document.getElementById('project-name-input');

    const update = () => {
        clear();
        sidebar();
        contentDiv.data == 'all-projects' ? _allProjects__WEBPACK_IMPORTED_MODULE_2__.allProjRender.update(): null;
    }

    const sidebar = () => {
        _classes__WEBPACK_IMPORTED_MODULE_0__.todoLists.projects.forEach(project => {
            let li = document.createElement('li'); 
            li.innerText = project.name.length < 29 ? project.name: 
            `${project.name.slice(0,28)}...`;
            li.data = project;
            projectUl.appendChild(li);
        })
    }
    const clear = () => {
        projectUl.innerHTML = '';
        clearInput()
    }
    const clearInput = () => {
        input.value = '';
    }
    const showProjectInput = () => {
        const addProjectDiv = document.getElementById('add-project');
        addProjectDiv.style.display = 'none';
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display != 'block' ? inputDiv.style.display = 'block':
            null
    }
    const hideProjectInput = () => {
        const addProjectDiv = document.getElementById('add-project');
        addProjectDiv.style.display = 'block';
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display == 'block' ? inputDiv.style.display = 'none':
            null
    }
    return {update, showProjectInput, hideProjectInput, clearInput};
})();

const eventListeners = (() => {
    const addProject = document.getElementById('add-project');
    addProject.addEventListener('click', sideRender.showProjectInput);

    const addButton = document.getElementById('add-button');
    const cancelButton = document.getElementById('cancel-button');
    addButton.addEventListener('click', sideControl.makeNewProject);
    cancelButton.addEventListener('click', sideControl.cancelProjectInput);

    const projectSelect = document.getElementById('projects');
    projectSelect.addEventListener('click', sideControl.selectProject);

    const taskSelect = document.getElementById('task-view')
    taskSelect.addEventListener('click', sideControl.selectTask)
})();

sideRender.update()
// start with all projects page
_allProjects__WEBPACK_IMPORTED_MODULE_2__.allProjRender.page();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxV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QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsNERBQWtCOzs7Ozs7OztVQ3hIbEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FsbFByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlSG9tZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGVQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMyU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNtYWluLWNvbnRlbnQgaDEsICNtYWluLWNvbnRlbnQgaDIsICNtYWluLWNvbnRlbnQgaDMge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBjb2xvcjogIzBhMDAyODtcXG59XFxuXFxuI2hlYWRpbmctY2hlY2sge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDIge1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbmgzIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xcbiAgICBjb2xvcjogIzBhMDAyODtcXG59XFxuaW5wdXQsIHRleHRhcmVhIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4jbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbiNoZWFkaW5nIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICMyMDAwOGMgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODBjNTc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jdG8ge1xcbiAgICBjb2xvcjogIzY2MjhkMjtcXG59XFxuI2RvIHtcXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWlucHV0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbiN0b2RvLWZvcm0gc3BhbiwgI2VkaXQtdG9kby1mb3JtIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDEuNzVyZW07XFxufVxcblxcbiN0b2RvLWZvcm0gaW5wdXQsICNlZGl0LXRvZG8tZm9ybSBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3N0YXItZm9ybSB7XFxuICAgIGdyaWQtcm93OiA0LzU7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG4jYnV0dG9uLWZvcm0ge1xcbiAgICBncmlkLXJvdzogNS82O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTUlIDIwJTtcXG4gICAgcm93LWdhcDogMTVweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBtYXJnaW46IDMwcHggYXV0byAxNXB4IGF1dG87XFxuICAgIGJvcmRlci1ib3R0b206IDJweCAjMGEwMDI4IHNvbGlkO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHggODBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udGFzay1saXN0ID4gZGl2ID4gc3BhbiB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi50YXNrLXVsID4gbGkge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggIzBmMDQyMSBzb2xpZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIGNvbG9yOiAjNDQzMDgyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi5jb21wbGV0ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaW1wb3J0YW50IHtcXG4gICAgY29sb3I6IHllbGxvdztcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQ6aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVke1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG4jc2lkZXBhbmVsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XFxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtaW4td2lkdGg6IDIzNnB4O1xcbn1cXG5cXG4jc2lkZXBhbmVsIGxpOmhvdmVyLCAjc2lkZXBhbmVsIHNwYW46aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNzaWRlcGFuZWwgdWwge1xcbiAgICBtYXJnaW46IDVweCAwO1xcbn1cXG5cXG4jc2lkZXBhbmVsIGxpIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Byb2plY3QtbmFtZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLyogQWxsIHByb2plY3RzIHBhZ2UgKi9cXG5cXG4jcHJvai1saW5rcyB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0gPiBoMyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtID4gZGl2ID4gc3BhbiB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jYWxsLXByb2otY29udGFpbmVyIHNwYW46aG92ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNhbGwtcHJvai11bCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggMjAwcHggMjAwcHg7XFxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAyNDBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgyNDBweCwgYXV0byk7XFxuICAgIGdhcDogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG59XFxuXFxuLnByb2otY2FyZCA+IGRpdiA+IGZvcm0ge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qLWNhcmQgPiBkaXYgPiBmb3JtID4gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0LWlucHV0LWJ1dHRvbnMgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4jcHJvamVjdC1pbnB1dC1idXR0b25zIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvai1jYXJkIHNwYW4ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnByb2otY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODBjNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4ICMwZjA0MjEgc29saWQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2FsbC1wcm9qLW5hbWUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuI2FkZC1wcm9qZWN0LW1haW4sICNhZGQtcHJvamVjdC1tYWluIHNwYW4sICNhZGQtdGFzaywgI2FkZC10YXNrIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogdGFzayBwZ3MgKi9cXG4udGFzay11bCB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbjogMTVweCBhdXRvO1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweCA0MHB4O1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNidXR0b25zIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLHdCQUF3QjtJQUNyQixnQkFBZ0I7SUFDaEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUEsc0JBQXNCOztBQUV0QjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQyxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxVQUFVOztBQUVkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQSxhQUFhO0FBQ2I7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDMlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGgxLCAjbWFpbi1jb250ZW50IGgyLCAjbWFpbi1jb250ZW50IGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6ICMwYTAwMjg7XFxufVxcblxcbiNoZWFkaW5nLWNoZWNrIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6ICMwYTAwMjg7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jaGVhZGluZyB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCAjMjAwMDhjIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwYzU3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvIHtcXG4gICAgY29sb3I6ICM2NjI4ZDI7XFxufVxcbiNkbyB7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdG9kby1mb3JtIHNwYW4sICNlZGl0LXRvZG8tZm9ybSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LCAjZWRpdC10b2RvLWZvcm0gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzdGFyLWZvcm0ge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuI2J1dHRvbi1mb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCU7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweCBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggIzBhMDAyOCBzb2xpZDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4IDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IGRpdiA+IHNwYW4ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4udGFzay11bCA+IGxpIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICMwZjA0MjEgc29saWQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBjb2xvcjogIzQ0MzA4MjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuI3NpZGVwYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiAyMzZweDtcXG59XFxuXFxuI3NpZGVwYW5lbCBsaTpob3ZlciwgI3NpZGVwYW5lbCBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2lkZXBhbmVsIHVsIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuI3NpZGVwYW5lbCBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIEFsbCBwcm9qZWN0cyBwYWdlICovXFxuXFxuI3Byb2otbGlua3Mge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtID4gaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSA+IGRpdiA+IHNwYW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2FsbC1wcm9qLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWxsLXByb2otdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDIwMHB4IDIwMHB4O1xcbiAgICBncmlkLWF1dG8tY29sdW1uczogMjQwcHg7XFxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMjQwcHgsIGF1dG8pO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgXFxufVxcblxcbi5wcm9qLWNhcmQgPiBkaXYgPiBmb3JtIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvai1jYXJkID4gZGl2ID4gZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dC1idXR0b25zID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuI3Byb2plY3QtaW5wdXQtYnV0dG9ucyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2otY2FyZCBzcGFuIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5wcm9qLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwYzU3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCAjMGYwNDIxIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBjb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhbGwtcHJvai1uYW1lLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1tYWluLCAjYWRkLXByb2plY3QtbWFpbiBzcGFuLCAjYWRkLXRhc2ssICNhZGQtdGFzayBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIHRhc2sgcGdzICovXFxuLnRhc2stdWwge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHggNDBweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYnV0dG9ucyB7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRpcnR5T2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7IiwiaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSAxMDAwICogNjA7XG52YXIgTUlOVVRFU19JTl9EQVkgPSA2MCAqIDI0O1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSBNSU5VVEVTX0lOX0RBWSAqIDMwO1xudmFyIE1JTlVURVNfSU5fWUVBUiA9IE1JTlVURVNfSU5fREFZICogMzY1O1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVN0cmljdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3Jkc1N0cmljdGAgdG8gYGZvcm1hdERpc3RhbmNlU3RyaWN0YFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMjAxNSwgMCwgMiksXG4gKiAgICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqICAgKSAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAgIG5ldyBEYXRlKDIwMTUsIDAsIDIpXG4gKiAgICkgLy89PiAnNiBtb250aHMnXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnRpYWxNZXRob2RgIG9wdGlvbiBpcyByZW5hbWVkIHRvIGByb3VuZGluZ01ldGhvZGAuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyBwYXJ0aWFsTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IHJvdW5kaW5nTWV0aG9kOiAnY2VpbCcgfVxuICogICApIC8vPT4gJzIgbWludXRlcydcbiAqICAgYGBgXG4gKlxuICogLSBJZiBgcm91bmRpbmdNZXRob2RgIGlzIG5vdCBzcGVjaWZpZWQsIGl0IG5vdyBkZWZhdWx0cyB0byBgcm91bmRgIGluc3RlYWQgb2YgYGZsb29yYC5cbiAqXG4gKiAtIGB1bml0YCBvcHRpb24gbm93IGFjY2VwdHMgb25lIG9mIHRoZSBzdHJpbmdzOlxuICogICAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInIGluc3RlYWQgb2YgJ3MnLCAnbScsICdoJywgJ2QnLCAnTScgb3IgJ1knXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgeyB1bml0OiAnbScgfVxuICogICApXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZVN0cmljdChcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzMsIDEpLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyB1bml0OiAnbWludXRlJyB9XG4gKiAgIClcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0geydzZWNvbmQnfCdtaW51dGUnfCdob3VyJ3wnZGF5J3wnbW9udGgnfCd5ZWFyJ30gW29wdGlvbnMudW5pdF0gLSBpZiBzcGVjaWZpZWQsIHdpbGwgZm9yY2UgYSB1bml0XG4gKiBAcGFyYW0geydmbG9vcid8J2NlaWwnfCdyb3VuZCd9IFtvcHRpb25zLnJvdW5kaW5nTWV0aG9kPSdyb3VuZCddIC0gd2hpY2ggd2F5IHRvIHJvdW5kIHBhcnRpYWwgdW5pdHNcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMucm91bmRpbmdNZXRob2RgIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLnVuaXRgIG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAyKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKVxuICogKVxuICogLy89PiAnMTUgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIGluIG1pbnV0ZXM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21pbnV0ZSdcbiAqIH0pXG4gKiAvLz0+ICc1MjU2MDAgbWludXRlcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNVxuICogLy8gdG8gMjggSmFudWFyeSAyMDE1LCBpbiBtb250aHMsIHJvdW5kZWQgdXA/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE1LCAwLCAyOCksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtb250aCcsXG4gKiAgIHJvdW5kaW5nTWV0aG9kOiAnY2VpbCdcbiAqIH0pXG4gKiAvLz0+ICcxIG1vbnRoJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUuZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciByb3VuZGluZ01ldGhvZCA9IG9wdGlvbnMucm91bmRpbmdNZXRob2QgPT0gbnVsbCA/ICdyb3VuZCcgOiBTdHJpbmcob3B0aW9ucy5yb3VuZGluZ01ldGhvZCk7XG4gIHZhciByb3VuZGluZ01ldGhvZEZuO1xuXG4gIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ2Zsb29yJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmZsb29yO1xuICB9IGVsc2UgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnY2VpbCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5jZWlsO1xuICB9IGVsc2UgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAncm91bmQnKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGgucm91bmQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJyb3VuZGluZ01ldGhvZCBtdXN0IGJlICdmbG9vcicsICdjZWlsJyBvciAncm91bmQnXCIpO1xuICB9XG5cbiAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGVSaWdodC5nZXRUaW1lKCkgLSBkYXRlTGVmdC5nZXRUaW1lKCk7XG4gIHZhciBtaW51dGVzID0gbWlsbGlzZWNvbmRzIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCk7IC8vIFVzZSBEU1Qtbm9ybWFsaXplZCBkaWZmZXJlbmNlIGluIG1pbnV0ZXMgZm9yIHllYXJzLCBtb250aHMgYW5kIGRheXM7XG4gIC8vIHVzZSByZWd1bGFyIGRpZmZlcmVuY2UgaW4gbWludXRlcyBmb3IgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMuXG5cbiAgdmFyIGRzdE5vcm1hbGl6ZWRNaW51dGVzID0gKG1pbGxpc2Vjb25kcyAtIHRpbWV6b25lT2Zmc2V0KSAvIE1JTExJU0VDT05EU19JTl9NSU5VVEU7XG4gIHZhciB1bml0O1xuXG4gIGlmIChvcHRpb25zLnVuaXQgPT0gbnVsbCkge1xuICAgIGlmIChtaW51dGVzIDwgMSkge1xuICAgICAgdW5pdCA9ICdzZWNvbmQnO1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IDYwKSB7XG4gICAgICB1bml0ID0gJ21pbnV0ZSc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICAgIHVuaXQgPSAnaG91cic7XG4gICAgfSBlbHNlIGlmIChkc3ROb3JtYWxpemVkTWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICAgIHVuaXQgPSAnZGF5JztcbiAgICB9IGVsc2UgaWYgKGRzdE5vcm1hbGl6ZWRNaW51dGVzIDwgTUlOVVRFU19JTl9ZRUFSKSB7XG4gICAgICB1bml0ID0gJ21vbnRoJztcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9ICd5ZWFyJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpO1xuICB9IC8vIDAgdXAgdG8gNjAgc2Vjb25kc1xuXG5cbiAgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XG4gICAgdmFyIHNlY29uZHMgPSByb3VuZGluZ01ldGhvZEZuKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hTZWNvbmRzJywgc2Vjb25kcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byA2MCBtaW5zXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21pbnV0ZScpIHtcbiAgICB2YXIgcm91bmRlZE1pbnV0ZXMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgcm91bmRlZE1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMjQgaG91cnNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnaG91cicpIHtcbiAgICB2YXIgaG91cnMgPSByb3VuZGluZ01ldGhvZEZuKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdkYXknKSB7XG4gICAgdmFyIGRheXMgPSByb3VuZGluZ01ldGhvZEZuKGRzdE5vcm1hbGl6ZWRNaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAxMiBtb250aHNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnbW9udGgnKSB7XG4gICAgdmFyIG1vbnRocyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbW9udGhzID09PSAxMiAmJiBvcHRpb25zLnVuaXQgIT09ICdtb250aCcgPyBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIDEsIGxvY2FsaXplT3B0aW9ucykgOiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd5ZWFyJykge1xuICAgIHZhciB5ZWFycyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX1lFQVIpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ1bml0IG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1wiKTtcbn0iLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2VTdHJpY3QgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlU3RyaWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMsIHVzaW5nIHN0cmljdCB1bml0cy5cbiAqIFRoaXMgaXMgbGlrZSBgZm9ybWF0RGlzdGFuY2VgLCBidXQgZG9lcyBub3QgdXNlIGhlbHBlcnMgbGlrZSAnYWxtb3N0JywgJ292ZXInLFxuICogJ2xlc3MgdGhhbicgYW5kIHRoZSBsaWtlLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDU5IHNlY3MgICAgICAgICAgfCBbMC4uNTldIHNlY29uZHMgICAgIHxcbiAqIHwgMSAuLi4gNTkgbWlucyAgICAgICAgICB8IFsxLi41OV0gbWludXRlcyAgICAgfFxuICogfCAxIC4uLiAyMyBocnMgICAgICAgICAgIHwgWzEuLjIzXSBob3VycyAgICAgICB8XG4gKiB8IDEgLi4uIDI5IGRheXMgICAgICAgICAgfCBbMS4uMjldIGRheXMgICAgICAgIHxcbiAqIHwgMSAuLi4gMTEgbW9udGhzICAgICAgICB8IFsxLi4xMV0gbW9udGhzICAgICAgfFxuICogfCAxIC4uLiBOIHllYXJzICAgICAgICAgIHwgWzEuLk5dICB5ZWFycyAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7J3NlY29uZCd8J21pbnV0ZSd8J2hvdXInfCdkYXknfCdtb250aCd8J3llYXInfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3JvdW5kJ10gLSB3aGljaCB3YXkgdG8gcm91bmQgcGFydGlhbCB1bml0c1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSAwMDowMDoxNSwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpXG4gKiApXG4gKiAvLz0+ICcyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2LCB3aXRoIGEgc3VmZml4P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyOCBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwPz9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIHVuaXQ6ICdtb250aCcsXG4gKiAgIHJvdW5kaW5nTWV0aG9kOiAnY2VpbCdcbiAqIH0pXG4gKiAvLz0+ICcxIG1vbnRoJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgQXVndXN0IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogdmFyIGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE2LCA3LCAxKSxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGZvcm1hdERpc3RhbmNlU3RyaWN0KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgZGlydHlPcHRpb25zKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiAodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiAoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyAyIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgdG9kb0xpc3RzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHByb2plY3RDb250cm9sIGZyb20gXCIuL3Byb2plY3RQYWdlXCI7XG5pbXBvcnQgeyBjb250ZW50Q29udHJvbGxlcn0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IHNpZGVSZW5kZXIsIHNpZGVDb250cm9sIH0gZnJvbSBcIi4vc2lkZVByb2plY3RzXCI7XG5cbmNvbnN0IG1ha2VJY29uID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gbmFtZTtcbiAgICByZXR1cm4gc3Bhbjtcbn07XG5cbmNvbnN0IGFsbFByb2pDb250cm9sID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWtlUGFnZSA9ICgpID0+IHtcbiAgICAgICAgYWxsUHJvalJlbmRlci5wYWdlKCk7XG4gICAgfVxuICAgIGNvbnN0IHByb2pGdW5jdGlvbnMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2xpY2tlZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhO1xuICAgICAgICBjb25zdCBmdW5jQ2xpY2tlZCA9ICBlLnRhcmdldC5kYXRhO1xuICAgICAgICBpZiAoZnVuY0NsaWNrZWQgPT0gJ3ZpZXcnKSB7XG4gICAgICAgICAgICB2aWV3UHJvamVjdChwcm9qZWN0Q2xpY2tlZCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnVuY0NsaWNrZWQgPT0gJ3JlbmFtZScpIHtcbiAgICAgICAgICAgIHJlbmFtZVByb2plY3QocHJvamVjdENsaWNrZWQsIGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGZ1bmNDbGlja2VkID09ICdkZWxldGUnKSB7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3RDbGlja2VkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB2aWV3UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnRlbnRDb250cm9sbGVyLmdvVG9Qcm9qZWN0UGFnZShwcm9qZWN0KTtcbiAgICB9XG4gICAgY29uc3QgcmVuYW1lUHJvamVjdCA9IChwcm9qZWN0LCBlKSA9PiB7XG4gICAgICAgIGNvbnN0IGgzID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGRcbiAgICAgICAgYWxsUHJvalJlbmRlci5jaGFuZ2VUb0lucHV0KHByb2plY3QsIGgzKVxuICAgIH1cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgdG9kb0xpc3RzLnJlbW92ZVByb2plY3QodG9kb0xpc3RzLmdldEluZGV4KHByb2plY3QpKTtcbiAgICAgICAgc2lkZVJlbmRlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRWRpdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pDbGlja2VkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5kYXRhO1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50WzBdLnZhbHVlO1xuICAgICAgICBwcm9qQ2xpY2tlZC5uYW1lID0gbmV3TmFtZSA9PSAnJyA/ICd1bm5hbWVkIHByb2plY3QnIDogbmV3TmFtZTtcbiAgICAgICAgc2lkZVJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsRWRpdCA9ICgpID0+IHtcbiAgICAgICAgYWxsUHJvalJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2otbmFtZS1pbnB1dCcpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBjYW5jZWxFZGl0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHttYWtlUGFnZSwgdmlld1Byb2plY3QsIHByb2pGdW5jdGlvbnMsIG1ha2VFZGl0LCBjYW5jZWxFZGl0LCBjYW5jZWxGb3JtfTtcbn0pKClcblxuY29uc3QgYWxsUHJvakNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9ICgpID0+IHsgXG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkLmlubmVyVGV4dCA9ICdNeSBQcm9qZWN0cyc7XG4gICAgICAgIHJldHVybiBoZWFkO1xuICAgICAgICB9XG4gICAgY29uc3QgaW5wdXRGb3JtID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJ1dHRvbkRpdi5pZCA9ICdwcm9qZWN0LWlucHV0LWJ1dHRvbnMnXG5cbiAgICAgICAgY29uc3QgY2hlY2sgPSBtYWtlSWNvbignY2hlY2tfY2lyY2xlJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IG1ha2VJY29uKCdjYW5jZWwnKTtcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxQcm9qQ29udHJvbC5tYWtlRWRpdCk7XG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFByb2pDb250cm9sLmNhbmNlbEVkaXQpO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KTtcbiAgICAgICAgcmV0dXJuIGZvcm07XG4gICAgfVxuICAgIGNvbnN0IHByb2pMaXN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICBwcm9qZWN0VWwuaWQgPSAnYWxsLXByb2otdWwnXG4gICAgICAgIHRvZG9MaXN0cy5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFVsLmFwcGVuZENoaWxkKHByb2pDYXJkKHByb2plY3QpKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHByb2plY3RVbDtcbiAgICB9XG4gICAgY29uc3QgcHJvakNhcmQgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaS5kYXRhID0gcHJvamVjdDtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgncHJvai1jYXJkJyk7XG5cbiAgICAgICAgY29uc3QgcHJvakhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qSGVhZC5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWUubGVuZ3RoIDwgMjkgPyBwcm9qZWN0Lm5hbWU6IFxuICAgICAgICAgICAgYCR7cHJvamVjdC5uYW1lLnNsaWNlKDAsMjgpfS4uLmA7XG5cbiAgICAgICAgY29uc3QgcHJvakl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwcm9qSXRlbXMuaW5uZXJUZXh0ID0gYCR7cHJvamVjdC50b2Rvcy5sZW5ndGh9IHRhc2tzYDtcblxuICAgICAgICBjb25zdCBwcm9qTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qTGluay5pZCA9ICdwcm9qLWxpbmtzJztcbiAgICAgICAgY29uc3QgdmlldyA9IG1ha2VJY29uKCdvcGVuX2luX25ldycpO1xuICAgICAgICB2aWV3LmRhdGEgPSAndmlldyc7XG4gICAgICAgIGNvbnN0IHJlbmFtZSA9IG1ha2VJY29uKCdlZGl0Jyk7XG4gICAgICAgIHJlbmFtZS5kYXRhID0gJ3JlbmFtZSc7XG4gICAgICAgIGNvbnN0IGRlbCA9IG1ha2VJY29uKCdkZWxldGVfZm9yZXZlcicpO1xuICAgICAgICBkZWwuZGF0YSA9ICdkZWxldGUnO1xuXG4gICAgICAgIGNvbnN0IHRvcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBcbiAgICAgICAgcHJvakxpbmsuYXBwZW5kQ2hpbGQodmlldyk7XG4gICAgICAgIHByb2pMaW5rLmFwcGVuZENoaWxkKHJlbmFtZSk7XG4gICAgICAgIHByb2pMaW5rLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICAgIHByb2pMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxsUHJvakNvbnRyb2wucHJvakZ1bmN0aW9ucyk7XG5cbiAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKHByb2pIZWFkKTtcbiAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKHByb2pJdGVtcyk7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHRvcERpdik7XG4gICAgICAgIGxpLmFwcGVuZENoaWxkKHByb2pMaW5rKTtcbiAgICAgICAgcmV0dXJuIGxpO1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFByb2plY3QuaW5uZXJUZXh0ID0gJ0FkZCBQcm9qZWN0ICc7XG4gICAgICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQobWFrZUljb24oJ2FkZF9jaXJjbGUnKSk7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxQcm9qUmVuZGVyLnNob3dGb3JtKTtcbiAgICAgICAgYWRkUHJvamVjdC5pZCA9ICdhZGQtcHJvamVjdC1tYWluJ1xuICAgICAgICByZXR1cm4gYWRkUHJvamVjdDtcbiAgICB9XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGREaXYuaWQgPSAnYWRkLXByb2plY3QtZm9ybSdcblxuICAgICAgICBjb25zdCBwcm9qRm9ybUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qRm9ybUhlYWRpbmcuaW5uZXJUZXh0ID0gJ0NyZWF0ZSBhIE5ldyBQcm9qZWN0J1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuaWQgPSAnYWxsLXByb2otbmFtZS1pbnB1dCc7XG4gICAgICAgIGlucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIFByb2plY3QgTmFtZSc7XG5cbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBjaGVjayA9IG1ha2VJY29uKCdjaGVja19jaXJjbGUnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gbWFrZUljb24oJ2NhbmNlbCcpO1xuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGVDb250cm9sLm1ha2VOZXdQcm9qZWN0KTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxsUHJvakNvbnRyb2wuY2FuY2VsRm9ybSk7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2hlY2spO1xuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGNhbmNlbCk7XG5cbiAgICAgICAgYWRkRGl2LmFwcGVuZENoaWxkKHByb2pGb3JtSGVhZGluZyk7XG4gICAgICAgIGFkZERpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGFkZERpdi5hcHBlbmRDaGlsZChidXR0b25zKTtcbiAgICAgICAgcmV0dXJuIGFkZERpdjtcbiAgICB9XG4gICAgcmV0dXJuIHtwcm9qTGlzdCwgaGVhZGluZywgaW5wdXRGb3JtLCBhZGRQcm9qZWN0LCBhZGRQcm9qZWN0Rm9ybX07XG59KSgpXG5cbmNvbnN0IGFsbFByb2pSZW5kZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNoYW5nZVRvSW5wdXQgPSAocHJvamVjdCwgdG9CZUNoYW5nZWQpID0+IHtcbiAgICAgICAgdG9CZUNoYW5nZWQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgdG9CZUNoYW5nZWQuYXBwZW5kQ2hpbGQoYWxsUHJvakNyZWF0ZS5pbnB1dEZvcm0ocHJvamVjdCkpO1xuICAgIH1cbiAgICBjb25zdCBwYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xuICAgICAgICBjb250ZW50RGl2LmRhdGEgPSAnYWxsLXByb2plY3RzJ1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBhbGxQcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFsbFByb2pDb250YWluZXIuaWQgPSAnYWxsLXByb2otY29udGFpbmVyJztcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhbGxQcm9qQ29udGFpbmVyKTtcbiAgICAgICAgYWxsUHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxQcm9qQ3JlYXRlLmhlYWRpbmcoKSk7XG4gICAgICAgIGFsbFByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsUHJvakNyZWF0ZS5hZGRQcm9qZWN0Rm9ybSgpKTtcbiAgICAgICAgYWxsUHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxQcm9qQ3JlYXRlLmFkZFByb2plY3QoKSk7XG4gICAgICAgIGFsbFByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQoYWxsUHJvakNyZWF0ZS5wcm9qTGlzdCgpKTtcbiAgICB9XG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRQcm9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LW1haW4nKVxuICAgICAgICBhZGRQcm9qICYmIGFkZFByb2ouc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snID8gXG4gICAgICAgICAgICBhZGRQcm9qLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBudWxsO1xuICAgICAgICBwYWdlKClcbiAgICAgICAgdG9kb0xpc3RzLnVwZGF0ZVN0b3JhZ2UoKTtcbiAgICB9XG4gICAgY29uc3Qgc2hvd0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtbWFpbicpXG4gICAgICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIH1cbiAgICByZXR1cm4ge3BhZ2UsIHVwZGF0ZSwgY2hhbmdlVG9JbnB1dCwgc2hvd0Zvcm19O1xufSkoKVxuXG5leHBvcnQge2FsbFByb2pDb250cm9sLCBhbGxQcm9qUmVuZGVyLCBtYWtlSWNvbn07IiwiaW1wb3J0IHsgYWxsUHJvalJlbmRlciB9IGZyb20gXCIuL2FsbFByb2plY3RzXCI7XG5cbmNsYXNzIFRvRG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzO1xuICAgIH1cbiAgICBhZGRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cbiAgICBmaW5kUHJvamVjdChuYW1lKSB7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnByb2plY3RzXG4gICAgICAgIGZvciAobGV0IG9iaiBvZiBhcnIpIHtcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRJbmRleChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoeCA9PiB4ID09IHByb2plY3QpO1xuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICAgIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuc2xpY2UoMCxpbmRleCkuY29uY2F0KHRoaXMucHJvamVjdHMuc2xpY2UoaW5kZXgrMSkpO1xuICAgIH1cbiAgICB1cGRhdGVTdG9yYWdlKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkodGhpcykpO1xuICAgICAgICBjb25zdCBnZXRUb2RvTGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3RzJyk7XG4gICAgICAgIGNvbnN0IHBhcnNlZFRvZG9MaXN0cyA9IEpTT04ucGFyc2UoZ2V0VG9kb0xpc3RzKVxuICAgIH1cbn1cblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9zID0gW107XG4gICAgfVxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICAgIGZpbmRUb2RvKG5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIHRoaXMudG9kb3MpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVUb2RvKGluZGV4KSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLnNsaWNlKDAsaW5kZXgpLmNvbmNhdCh0aGlzLnRvZG9zLnNsaWNlKGluZGV4KzEpKTtcbiAgICB9XG59XG5cbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpbXBvcnRhbnQsIGNvbXBsZXRlPWZhbHNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5pbXBvcnRhbnQgPSBpbXBvcnRhbnQ7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG59XG5cbmxldCB0b2RvTGlzdHMgPSBuZXcgVG9Eb0xpc3Q7XG5cbmNvbnN0IHBvcHVsYXRlU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0xpc3RzJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3RzKSk7XG59XG5cbmNvbnN0IHNldFRvZG9MaXN0cyA9ICgpID0+IHtcbiAgICBjb25zdCBnZXRUb2RvTGlzdHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3RzJyk7XG4gICAgY29uc3QgcGFyc2VkVG9kb0xpc3RzID0gSlNPTi5wYXJzZShnZXRUb2RvTGlzdHMpXG4gICAgY29uc3QgcHJvaiA9IFsuLi5wYXJzZWRUb2RvTGlzdHMucHJvamVjdHNdXG4gICAgXG4gICAgaWYgKHByb2opIHtcbiAgICAgICAgcHJvai5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgbGV0IG5ld1Byb2ogPSBuZXcgUHJvamVjdChwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgaWYgKHByb2plY3QudG9kb3MpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG8odG9kby5uYW1lLCB0b2RvLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8uZGF0ZSwgdG9kby5pbXBvcnRhbnQsIHRvZG8uY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9qLmFkZFRvZG8obmV3VG9kbylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9kb0xpc3RzLmFkZFByb2plY3QobmV3UHJvaik7XG4gICAgICAgIH0pXG4gICAgfSAgICAgXG59XG5cbmlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9MaXN0cycpKSB7XG4gICAgcG9wdWxhdGVTdG9yYWdlKClcbn0gZWxzZSB7XG4gICAgc2V0VG9kb0xpc3RzKCk7XG59XG5cbmV4cG9ydCB7VG9Eb0xpc3QsIFByb2plY3QsIFRvZG8sIHRvZG9MaXN0c307IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3NpZGVSZW5kZXIsIHNpZGVDb250cm9sLCBzaWRlRnVuY30gZnJvbSAnLi9zaWRlUHJvamVjdHMnO1xuaW1wb3J0IHtUb0RvTGlzdCwgUHJvamVjdCwgVG9kbywgdG9kb0xpc3RzfSBmcm9tICcuL2NsYXNzZXMnO1xuaW1wb3J0IHtwcm9qZWN0Q29udHJvbH0gZnJvbSAnLi9wcm9qZWN0UGFnZSc7XG5pbXBvcnQgdGFza0NvbnRyb2wgZnJvbSAnLi9zaWRlSG9tZSc7XG5cblxuY29uc3QgY29udGVudENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdvVG9Qcm9qZWN0UGFnZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sLm1ha2VQYWdlKHByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBnb1RvVGFza3MgPSAodGFza1R5cGUpID0+IHtcbiAgICAgICAgdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSh0YXNrVHlwZSk7XG4gICAgfSBcbiAgICByZXR1cm4ge2dvVG9Qcm9qZWN0UGFnZSwgZ29Ub1Rhc2tzfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y29udGVudENvbnRyb2xsZXJ9O1xuIiwiaW1wb3J0IHsgVG9kbywgdG9kb0xpc3RzIH0gZnJvbSBcIi4vY2xhc3Nlc1wiO1xuaW1wb3J0IHsgc2lkZVJlbmRlciB9IGZyb20gXCIuL3NpZGVQcm9qZWN0c1wiO1xuaW1wb3J0IHsgbWFrZUljb24gfSBmcm9tIFwiLi9hbGxQcm9qZWN0c1wiO1xuaW1wb3J0IHRhc2tDb250cm9sIGZyb20gXCIuL3NpZGVIb21lXCI7XG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0LCBwYXJzZUlTTyB9IGZyb20gJ2RhdGUtZm5zJztcblxubGV0IHRoaXNQcm9qZWN0ID0gbnVsbDtcblxuY29uc3QgdG9kb0NyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGhpc1Byb2plY3QubmFtZTtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmc7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsdGVycyA9IChwcm9qZWN0LCBmaWx0ZXIpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlcmVkVG9kb3MgPSBwcm9qZWN0LnRvZG9zO1xuICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRUb2RvcyA9IHByb2plY3QudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pbXBvcnRhbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGQgPSBTdHJpbmcodG9kYXkuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1tID0gU3RyaW5nKHRvZGF5LmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHl5eXkgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdFRvZGF5ID0geXl5eSArICctJyArIG1tICsgJy0nICsgZGQ7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWRUb2RvcyA9IHByb2plY3QudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5kYXRlID09IGZvcm1hdFRvZGF5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZFRvZG9zID0gcHJvamVjdC50b2Rvcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcih0b2RvID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgKHRvZG8uZGF0ZSAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KHBhcnNlSVNPKHRvZG8uZGF0ZSkpLnNwbGl0KCcgJylbMF0gPD0gNykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2RvIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpbHRlcmVkVG9kb3M7XG4gICAgfVxuICAgIGNvbnN0IGxpc3QgPSAocHJvamVjdCwgZmlsdGVyPW51bGwpID0+IHtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LXVsJyk7XG4gICAgICAgIGlmIChwcm9qZWN0LnRvZG9zKSB7XG4gICAgICAgICAgICBsZXQgaSA9IDE7XG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRUb2RvcyA9IGZpbHRlcnMocHJvamVjdCwgZmlsdGVyKTtcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgZmlsdGVyZWRUb2Rvcykge1xuICAgICAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgbGkuaWQgPSBpO1xuICAgICAgICAgICAgICAgIGxpLmRhdGEgPSB0YXNrO1xuICAgICAgICAgICAgICAgIGxldCB0b3BEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICAgICAgICAgIGxldCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZURpdi5pbm5lclRleHQgPSB0YXNrLm5hbWUubGVuZ3RoIDwgMzEgPyB0YXNrLm5hbWUgOlxuICAgICAgICAgICAgICAgIGAke3Rhc2submFtZS5zbGljZSgwLDMwKX0uLi5gO1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVEaXYuaW5uZXJUZXh0ID0gYER1ZTogJHt0YXNrLmRhdGV9YDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRlRGl2LmlubmVyVGV4dCA9ICdObyBEdWUgRGF0ZSc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tDaGFuZ2VEaXYgPSBjaGFuZ2VyRGl2KHByb2plY3QsIHRhc2spO1xuICAgICAgICAgICAgICAgIHRhc2tDaGFuZ2VEaXYuZGF0YSA9IGk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzay1jb250YWluZXInXG4gICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzay1jb250YWluZXInXG5cbiAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KHRhc2spKTtcbiAgICAgICAgICAgICAgICBsZWZ0Q29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDaGFuZ2VEaXYpO1xuICAgICAgICAgICAgICAgIHRvcERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcbiAgICAgICAgICAgICAgICB0b3BEaXYuYXBwZW5kQ2hpbGQobGVmdENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKHJpZ2h0Q29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZCh0b3BEaXYpO1xuICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlmICh0YXNrLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGFzay5kZXNjcmlwdGlvbi5sZW5ndGggPCAzMDEgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGFzay5kZXNjcmlwdGlvbi5zbGljZSgwLDMwMCl9Li4uYDtcblxuICAgICAgICAgICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGUgPyBcbiAgICAgICAgICAgICAgICAgICAgKG5hbWVEaXYuY2xhc3NOYW1lID0gJ2NvbXBsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJykpIDpcbiAgICAgICAgICAgICAgICAgICAgKG5hbWVEaXYuY2xhc3NOYW1lID0gJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgICAgICBpICsrO1xuICAgICAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b2RvTGlzdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKCd0YXNrLXVsJyk7XG4gICAgICAgIHVsLmlkID0gJ3RvZG8tbGlzdC11bCc7XG4gICAgICAgIHJldHVybiB1bFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjaGVja0JveCA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gdGFzay5jb21wbGV0ZSA/IG1ha2VJY29uKCdjaGVja19ib3gnKSA6XG4gICAgICAgICAgICBtYWtlSWNvbignY2hlY2tfYm94X291dGxpbmVfYmxhbmsnKTtcbiAgICAgICAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5jaGFuZ2VTdGF0dXMpO1xuICAgICAgICBjaGVja0JveC5kYXRhID0gdGFzaztcbiAgICAgICAgcmV0dXJuIGNoZWNrQm94O1xuICAgIH1cbiAgICBjb25zdCBzdGFySWNvbiA9ICh0YXNrKSA9PiB7XG4gICAgICAgIGxldCBzdGFyID0gbnVsbDtcbiAgICAgICAgaWYgKHRhc2sgJiYgdGFzay5pbXBvcnRhbnQpIHtcbiAgICAgICAgICAgIHN0YXIgPSBtYWtlSWNvbignc3RhcicpO1xuICAgICAgICAgICAgc3Rhci5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXIgPSBtYWtlSWNvbignZ3JhZGUnKTtcbiAgICAgICAgfVxuICAgICAgICBzdGFyLmRhdGEgPSB0YXNrO1xuICAgICAgICByZXR1cm4gc3RhcjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VyRGl2ID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICAgICAgbGV0IGNoYW5nZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgIFxuICAgICAgICBsZXQgZWRpdCA9IG1ha2VJY29uKCdlZGl0Jyk7XG4gICAgICAgIGxldCByZW1vdmUgPSBtYWtlSWNvbignZGVsZXRlX2ZvcmV2ZXInKTtcbiAgICAgICAgcmVtb3ZlLmRhdGEgPSBwcm9qZWN0O1xuICAgICAgICBsZXQgc3RhciA9IHN0YXJJY29uKHRhc2spO1xuICAgICAgICBcblxuICAgICAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuc3RhckNsaWNrKTtcbiAgICAgICAgcmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wucmVtb3ZlVG9kbyk7XG4gICAgICAgIGVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5lZGl0VG9kbyk7XG5cbiAgICAgICAgY2hhbmdlRGl2LmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICBjaGFuZ2VEaXYuYXBwZW5kQ2hpbGQoZWRpdCk7XG4gICAgICAgIGNoYW5nZURpdi5hcHBlbmRDaGlsZChyZW1vdmUpO1xuICAgICAgICByZXR1cm4gY2hhbmdlRGl2O1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB0b2RvRm9ybSA9IChlZGl0aW5nPWZhbHNlLCBzZWxlY3RlZFRvZG89bnVsbCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIFxuXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICB0b2RvRm9ybS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgdG9kb0Zvcm0uaWQgPSAndG9kby1mb3JtJztcbiAgICBcbiAgICAgICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHRpdGxlTGFiZWwuaW5uZXJUZXh0ID0gJ1RpdGxlOiAnO1xuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWlucHV0Jyk7XG4gICAgXG4gICAgICAgIGNvbnN0IGRldGFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGV0YWlsTGFiZWwuaW5uZXJUZXh0ID0gJ0RldGFpbHM6ICc7XG4gICAgICAgIGNvbnN0IGRldGFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgZGV0YWlsSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1pbnB1dCcpO1xuICAgIFxuICAgICAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBkYXRlTGFiZWwuaW5uZXJUZXh0ID0gJ0RhdGU6ICc7XG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1pbnB1dCcpO1xuXG4gICAgICAgIGNvbnN0IHN0YXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIHN0YXJMYWJlbC5hcHBlbmRDaGlsZChzdGFySWNvbihzZWxlY3RlZFRvZG8pKTtcbiAgICAgICAgY29uc3Qgc3RhcklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc3RhcklucHV0LnR5cGUgPSAnaGlkZGVuJ1xuICAgICAgICBzdGFyTGFiZWwuaWQgPSAnc3Rhci1mb3JtJ1xuICAgICAgICBzdGFyTGFiZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5zdGFyRm9ybSk7XG5cbiAgICAgICAgY29uc3QgYWRkQnV0dG9uID0gbWFrZUljb24oJ2NoZWNrX2NpcmNsZScpO1xuICAgICAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBtYWtlSWNvbignY2FuY2VsJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoZWRpdGluZykge1xuICAgICAgICAgICAgZm9ybUhlYWRpbmcuaW5uZXJUZXh0ID0gJ0VkaXQgYSBUYXNrJ1xuICAgICAgICAgICAgdG9kb0Zvcm0uZGF0YSA9IHNlbGVjdGVkVG9kbztcbiAgICAgICAgICAgIHRvZG9Gb3JtLmlkID0gJ2VkaXQtdG9kby1mb3JtJztcbiAgICAgICAgICAgIHRpdGxlSW5wdXQudmFsdWUgPSBzZWxlY3RlZFRvZG8ubmFtZTtcbiAgICAgICAgICAgIGRldGFpbElucHV0LnZhbHVlID0gc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uID8gXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uIDogJyc7XG4gICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBzZWxlY3RlZFRvZG8uZGF0ZTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDb250cm9sLm1ha2VUb2RvRWRpdCk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5jYW5jZWxFZGl0VG9kb0Zvcm0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9ybUhlYWRpbmcuaW5uZXJUZXh0ID0gJ0FkZCBhIFRhc2snXG4gICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5tYWtlTmV3VG9kbyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5jYW5jZWxUb2RvRm9ybSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidXR0b25Db250YWluZXIuaWQgPSAnYnV0dG9uLWZvcm0nXG4gICAgICAgIGlucHV0Q29udGFpbmVyLmlkID0gJ2lucHV0LWNvbnRhaW5lcidcblxuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGluZyk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsTGFiZWwpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxJbnB1dCk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJMYWJlbCk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJJbnB1dCk7XG5cbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHRvZG9Gb3JtO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBhZGRUb2RvQnRuID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRvZG8uaW5uZXJUZXh0ID0gJ0FkZCBUYXNrICc7XG4gICAgICAgIGFkZFRvZG8uYXBwZW5kQ2hpbGQobWFrZUljb24oJ2FkZF9jaXJjbGUnKSk7XG4gICAgICAgIGFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0UmVuZGVyLnNob3dUb2RvRm9ybSk7XG4gICAgICAgIGFkZFRvZG8uaWQgPSAnYWRkLXRhc2snXG4gICAgICAgIHJldHVybiBhZGRUb2RvO1xuICAgIH1cblxuICAgIHJldHVybiB7YWRkVG9kb0J0biwgdG9kb0Zvcm0sIHRvZG9MaXN0LCBoZWFkaW5nLCBsaXN0fTtcbn0pKClcblxuXG5cbmNvbnN0IHByb2plY3RSZW5kZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnRlbnREaXYuZGF0YSA9ICdwcm9qZWN0LXBhZ2UnO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZG9DcmVhdGUuaGVhZGluZygpKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRlLnRvZG9Gb3JtKCkpO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRvZG9DcmVhdGUuYWRkVG9kb0J0bigpKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRlLnRvZG9MaXN0KCkpO1xuICAgICAgICB0b2RvQ3JlYXRlLmxpc3QodGhpc1Byb2plY3QpO1xuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1RvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG4gICAgICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcbiAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snID8gXG4gICAgICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzogbnVsbDtcbiAgICB9XG4gICAgY29uc3QgaGlkZVRvZG9Gb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRUYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG4gICAgICAgIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG4gICAgICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJyA/IFxuICAgICAgICAgICAgKHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScsIGNsZWFyVG9kb0Zvcm0pOiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuICAgICAgICBhZGRUYXNrRGl2ICYmIGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snID8gYWRkVGFza0Rpdi5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycgOiBudWxsO1xuICAgICAgICBjb250ZW50RGl2LmRhdGEgPT0gJ3Byb2plY3QtcGFnZScgPyBwcm9qZWN0UGFnZSh0aGlzUHJvamVjdCkgOlxuICAgICAgICAgICAgY29udGVudERpdi5kYXRhID09ICdhbGwtdGFza3MnID8gdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSgnYWxsJykgOlxuICAgICAgICAgICAgY29udGVudERpdi5kYXRhID09ICdpbXBvcnRhbnQnID8gdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSgnaW1wb3J0YW50JykgOlxuICAgICAgICAgICAgY29udGVudERpdi5kYXRhID09ICd0b2RheScgPyB0YXNrQ29udHJvbC5tYWtlVGFza3NQYWdlKCd0b2RheScpIDpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuZGF0YSA9PSAnd2VlaycgPyB0YXNrQ29udHJvbC5tYWtlVGFza3NQYWdlKCd3ZWVrJykgOiBudWxsOyBcbiAgICAgICAgdG9kb0xpc3RzLnVwZGF0ZVN0b3JhZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgY29uc3QgY2xlYXJUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvZG8taW5wdXQnKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSAnJylcbiAgICB9O1xuICAgIGNvbnN0IGNoYW5nZUxpVG9Gb3JtID0gKHNlbGVjdGVkVG9kbywgc2VsZWN0ZWRMaSkgPT4ge1xuICAgICAgICBzZWxlY3RlZExpLmlubmVySFRNTCA9ICcnXG4gICAgICAgIHNlbGVjdGVkTGkuYXBwZW5kQ2hpbGQodG9kb0NyZWF0ZS50b2RvRm9ybSh0cnVlLCBzZWxlY3RlZFRvZG8pKTtcbiAgICB9XG4gICAgcmV0dXJuIHtwcm9qZWN0UGFnZSwgc2hvd1RvZG9Gb3JtLCBoaWRlVG9kb0Zvcm0sIHVwZGF0ZSwgY2xlYXJUb2RvRm9ybSxcbiAgICAgICAgY2hhbmdlTGlUb0Zvcm19O1xufSkoKVxuXG5jb25zdCBwcm9qZWN0Q29udHJvbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFrZVBhZ2UgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnByb2plY3RQYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHRoaXNQcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlTmV3VG9kbyA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHRvZG9JbmZvID0gZ2V0VG9kb0luZm8oZSk7XG4gICAgICAgIGxldCBuZXdUb2RvID0gY3JlYXRlVG9kbyh0b2RvSW5mb1swXSwgdG9kb0luZm9bMV0sIHRvZG9JbmZvWzJdLCB0b2RvSW5mb1szXSk7XG4gICAgICAgIHRoaXNQcm9qZWN0LmFkZFRvZG8obmV3VG9kbyk7XG4gICAgICAgIHByb2plY3RSZW5kZXIuc2hvd1RvZG9Gb3JtKCk7XG4gICAgICAgIHByb2plY3RSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0VG9kb0luZm8gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFsuLi5lLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudF1cbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbHVlc1swXS52YWx1ZSA9PSAnJyA/ICd1bm5hbWVkIHRhc2snIDogdmFsdWVzWzBdLnZhbHVlXG4gICAgICAgIGNvbnN0IGRldGFpbHMgPSB2YWx1ZXNbMl0udmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB2YWx1ZXNbMV0udmFsdWU7XG4gICAgICAgIGNvbnN0IGltcG9ydGFudCA9ICh2YWx1ZXNbM10ucHJldmlvdXNTaWJsaW5nLlxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQnKSkgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHJldHVybiBbbmFtZSwgZGV0YWlscywgZGF0ZSwgaW1wb3J0YW50XTtcbiAgICB9XG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaW1wb3J0YW50KSA9PiB7XG4gICAgICAgIG5hbWUgPT0gJycgPyBuYW1lID0gJ3VubmFtZWQgdGFzaycgOiBudWxsO1xuICAgICAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2RvKG5hbWUsIGRlc2NyaXB0aW9uLCBkYXRlLCBpbXBvcnRhbnQpO1xuICAgICAgICByZXR1cm4gbmV3VG9kbztcbiAgICB9XG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IChlKSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YSAtIDE7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBlLnRhcmdldC5kYXRhO1xuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8oaW5kZXgpO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBjYW5jZWxUb2RvRm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcHJvamVjdFJlbmRlci5oaWRlVG9kb0Zvcm0oKTtcbiAgICAgICAgcHJvamVjdFJlbmRlci5jbGVhclRvZG9Gb3JtKCk7XG4gICAgfVxuICAgIGNvbnN0IGVkaXRUb2RvID0gKGUpID0+IHtcbiAgICAgICAgbGV0IHNlbExpID0gZmluZFNlbGVjdGVkTGkoZSk7XG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSBzZWxMaS5kYXRhO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLmNoYW5nZUxpVG9Gb3JtKHNlbGVjdGVkVG9kbywgc2VsTGkpO1xuICAgIH1cbiAgICBjb25zdCBmaW5kU2VsZWN0ZWRMaSA9IChlKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YTtcbiAgICAgICAgbGV0IHNlbGVjdGVkTGkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZExpO1xuICAgIH1cbiAgICBjb25zdCBjYW5jZWxFZGl0VG9kb0Zvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VUb2RvRWRpdCA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YTtcbiAgICAgICAgbGV0IHZhbHVlcyA9IGdldFRvZG9JbmZvKGUpO1xuICAgICAgICBzZWxlY3RlZFRvZG8ubmFtZSA9IHZhbHVlc1swXTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uID0gdmFsdWVzWzFdO1xuICAgICAgICBzZWxlY3RlZFRvZG8uZGF0ZSA9IHZhbHVlc1syXTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmltcG9ydGFudCA9IHZhbHVlc1szXTtcbiAgICAgICAgcHJvamVjdFJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhckNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kbyA9IGUudGFyZ2V0LmRhdGE7XG4gICAgICAgIHRvZG8uaW1wb3J0YW50ID8gXG4gICAgICAgICAgICAoZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaW1wb3J0YW50JyksXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ2dyYWRlJyxcbiAgICAgICAgICAgICAgICB0b2RvLmltcG9ydGFudCA9IGZhbHNlKSA6XG4gICAgICAgICAgICAoZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50JyksXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ3N0YXInLFxuICAgICAgICAgICAgICAgIHRvZG8uaW1wb3J0YW50ID0gdHJ1ZSk7XG4gICAgICAgIHByb2plY3RSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldC5kYXRhO1xuICAgICAgICB0b2RvLmNvbXBsZXRlID8gdG9kby5jb21wbGV0ZSA9IGZhbHNlOiB0b2RvLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgcHJvamVjdFJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhckZvcm0gPSAoZSkgPT4ge1xuICAgICAgICAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbXBvcnRhbnQnKSkgP1xuICAgICAgICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudCcpLFxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ2dyYWRlJykgOlxuICAgICAgICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpLFxuICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJUZXh0ID0gJ3N0YXInKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge21ha2VOZXdUb2RvLCBzZXRQcm9qZWN0LCBtYWtlUGFnZSwgY2FuY2VsVG9kb0Zvcm0sIGVkaXRUb2RvLCBcbiAgICAgICAgICAgIGNhbmNlbEVkaXRUb2RvRm9ybSwgbWFrZVRvZG9FZGl0LCByZW1vdmVUb2RvLCBzdGFyQ2xpY2ssIGNoYW5nZVN0YXR1cywgc3RhckZvcm19O1xuXG59KSgpXG5cbmV4cG9ydCB7cHJvamVjdENvbnRyb2wsIHRvZG9DcmVhdGV9OyIsImltcG9ydCB7IHRvZG9MaXN0cyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7YWxsUHJvakNvbnRyb2x9IGZyb20gXCIuL2FsbFByb2plY3RzXCI7XG5pbXBvcnQgeyB0b2RvQ3JlYXRlIH0gZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcblxuY29uc3QgdGFza0NvbnRyb2wgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VUYXNrc1BhZ2UgPSAodHlwZSkgPT4ge1xuICAgICAgICBsZXQgZmlsdGVyID0gdHlwZTtcbiAgICAgICAgLy9pbnNlcnQgdGhlIGNvcnJlY3QgY29udGVudCBpbiB0aGUgdWxcbiAgICAgICAgaWYgKHR5cGUgPT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJlbmRlci50YXNrc1BhZ2UoJ2FsbC10YXNrcycsICdBbGwgVGFza3MnKTtcbiAgICAgICAgICAgIGNvbnN0IHVsVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtdWwnKTtcbiAgICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgdG9kb0xpc3RzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgdG9kb0NyZWF0ZS5saXN0KHByb2opOyAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB1bFRhc2suaW5uZXJIVE1MID09ICcnID8gcmVuZGVyLmVtcHR5TGlzdCgnJykgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICdpbXBvcnRhbnQnKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyLnRhc2tzUGFnZSgnaW1wb3J0YW50JywgJ0ltcG9ydGFudCBUYXNrcycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVsVGFzayAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LXVsJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiB0b2RvTGlzdHMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0ZS5saXN0KHByb2osIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bFRhc2suaW5uZXJIVE1MID09ICcnID8gcmVuZGVyLmVtcHR5TGlzdCgnaW1wb3J0YW50JykgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICd3ZWVrJykge1xuICAgICAgICAgICAgICAgIHJlbmRlci50YXNrc1BhZ2UoJ3dlZWsnLCAnVGFza3MgRHVlIFRoaXMgV2VlaycpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVsVGFzayAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LXVsJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiB0b2RvTGlzdHMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0ZS5saXN0KHByb2osIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bFRhc2suaW5uZXJIVE1MID09ICcnID8gcmVuZGVyLmVtcHR5TGlzdCgnIGR1ZSB0aGlzIHdlZWsnKSA6IG51bGw7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgICAgIHJlbmRlci50YXNrc1BhZ2UoJ3RvZGF5JywgJ1Rhc2tzIER1ZSBUb2RheScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVsVGFzayAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LXVsJyk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiB0b2RvTGlzdHMucHJvamVjdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0ZS5saXN0KHByb2osIGZpbHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1bFRhc2suaW5uZXJIVE1MID09ICcnID8gcmVuZGVyLmVtcHR5TGlzdCgnIGR1ZSB0b2RheScpIDogbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gJ3Byb2plY3RzJykge1xuICAgICAgICAgICAgICAgIGFsbFByb2pDb250cm9sLm1ha2VQYWdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIHJldHVybiB7bWFrZVRhc2tzUGFnZX07XG59KSgpXG5cblxuY29uc3QgY3JlYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gKGhlYWRpbmdUZXh0KSA9PiB7IFxuICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWQuaW5uZXJUZXh0ID0gaGVhZGluZ1RleHQ7XG4gICAgcmV0dXJuIGhlYWQ7XG4gICAgfVxuICAgIGNvbnN0IHVsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdWwnKTtcbiAgICAgICAgdWwuaWQgPSAndG9kby1saXN0LXVsJztcbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUxpc3QgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGVtcHR5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZW1wdHlUZXh0LmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XG4gICAgICAgIGVtcHR5VGV4dC5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBlbXB0eVRleHQuaW5uZXJUZXh0ID0gc3RyaW5nICE9ICdpbXBvcnRhbnQnID8gXG4gICAgICAgICAgICBgVGhlcmUgYXJlIG5vIHRhc2tzJHtzdHJpbmd9LmA6XG4gICAgICAgICAgICBgVGhlcmUgYXJlIG5vICR7c3RyaW5nfSB0YXNrcy5gO1xuICAgICAgICByZXR1cm4gZW1wdHlUZXh0O1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge2hlYWRpbmcsIHVsLCBlbXB0eUxpc3R9O1xufSkoKVxuXG5jb25zdCByZW5kZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgY29uc3QgdGFza3NQYWdlID0gKGRhdGFUeXBlLCBoZWFkaW5nVGV4dCkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmRhdGEgPSBkYXRhVHlwZVxuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnXG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlLmhlYWRpbmcoaGVhZGluZ1RleHQpKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjcmVhdGUudWwoKSk7XG4gICAgfVxuICAgIGNvbnN0IGVtcHR5TGlzdCA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdWxUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC11bCcpO1xuICAgICAgICB1bFRhc2suYXBwZW5kQ2hpbGQoY3JlYXRlLmVtcHR5TGlzdChzdHJpbmcpKTtcbiAgICB9XG4gICAgcmV0dXJuIHt0YXNrc1BhZ2UsIGVtcHR5TGlzdH07XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IHRhc2tDb250cm9sOyIsImltcG9ydCB7VG9Eb0xpc3QsIFByb2plY3QsIFRvZG8sIHRvZG9MaXN0c30gZnJvbSAnLi9jbGFzc2VzJztcbmltcG9ydCB7Y29udGVudENvbnRyb2xsZXJ9IGZyb20gJy4nO1xuaW1wb3J0IHsgYWxsUHJvalJlbmRlciB9IGZyb20gJy4vYWxsUHJvamVjdHMnO1xuXG5jb25zdCBzaWRlRnVuYyA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QobmFtZSk7XG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBnZXRJbnB1dE5hbWUgPSAoZSkgPT4ge1xuICAgICAgICAvL2NoZWNrcyBpZiBuZXcgcHJvamVjdCBpcyBhZGRlZCBmcm9tIHNpZGUgbmF2IG9yIHByb2plY3RzIHBhZ2VcbiAgICAgICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC5pZCA9PSAnYWRkLWJ1dHRvbicgPyBcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTpcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvai1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBpbnB1dC52YWx1ZSA9PSAnJyA/ICd1bm5hbWVkIHByb2plY3QnIDogaW5wdXQudmFsdWU7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmRhdGE7XG4gICAgfVxuICAgIGNvbnN0IGdldFRhc2tUeXBlID0gKGUpID0+IHtcbiAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmF0dHJpYnV0ZXNbMF0ubm9kZVZhbHVlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3QsIGdldElucHV0TmFtZSwgZ2V0UHJvamVjdCwgZ2V0VGFza1R5cGV9O1xufSkoKVxuXG5jb25zdCBzaWRlQ29udHJvbCA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFrZU5ld1Byb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gc2lkZUZ1bmMuZ2V0SW5wdXROYW1lKGUpO1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHNpZGVGdW5jLmNyZWF0ZVByb2plY3QobmFtZSk7XG4gICAgICAgIHRvZG9MaXN0cy5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBzaWRlUmVuZGVyLmhpZGVQcm9qZWN0SW5wdXQoKTtcbiAgICAgICAgc2lkZVJlbmRlci51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgbGV0IGluZGV4ID0gdG9kb0xpc3RzLmZpbmRJbmRleChwcm9qZWN0KTtcbiAgICAgICAgdG9kb0xpc3RzLnJlbW92ZVByb2plY3QoaW5kZXgpO1xuICAgICAgICBzaWRlUmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3RUYXNrID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza1R5cGUgPSBzaWRlRnVuYy5nZXRUYXNrVHlwZShlKTtcbiAgICAgICAgY29udGVudENvbnRyb2xsZXIuZ29Ub1Rhc2tzKHRhc2tUeXBlKTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDbGlja2VkID0gc2lkZUZ1bmMuZ2V0UHJvamVjdChlKTtcbiAgICAgICAgY29udGVudENvbnRyb2xsZXIuZ29Ub1Byb2plY3RQYWdlKHByb2plY3RDbGlja2VkKTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsUHJvamVjdElucHV0ID0gKCkgPT4ge1xuICAgICAgICBzaWRlUmVuZGVyLmNsZWFySW5wdXQoKTtcbiAgICAgICAgc2lkZVJlbmRlci5oaWRlUHJvamVjdElucHV0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHttYWtlTmV3UHJvamVjdCwgcmVtb3ZlUHJvamVjdCwgc2VsZWN0UHJvamVjdCwgY2FuY2VsUHJvamVjdElucHV0LFxuICAgICAgICBzZWxlY3RUYXNrfTtcbn0pKClcblxuY29uc3Qgc2lkZVJlbmRlciA9ICgoKSA9PiB7XG4gICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgbGV0IHByb2plY3RVbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZS1pbnB1dCcpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICBjbGVhcigpO1xuICAgICAgICBzaWRlYmFyKCk7XG4gICAgICAgIGNvbnRlbnREaXYuZGF0YSA9PSAnYWxsLXByb2plY3RzJyA/IGFsbFByb2pSZW5kZXIudXBkYXRlKCk6IG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcbiAgICAgICAgdG9kb0xpc3RzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyBcbiAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IHByb2plY3QubmFtZS5sZW5ndGggPCAyOSA/IHByb2plY3QubmFtZTogXG4gICAgICAgICAgICBgJHtwcm9qZWN0Lm5hbWUuc2xpY2UoMCwyOCl9Li4uYDtcbiAgICAgICAgICAgIGxpLmRhdGEgPSBwcm9qZWN0O1xuICAgICAgICAgICAgcHJvamVjdFVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RVbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY2xlYXJJbnB1dCgpXG4gICAgfVxuICAgIGNvbnN0IGNsZWFySW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGNvbnN0IHNob3dQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3REaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QnKTtcbiAgICAgICAgYWRkUHJvamVjdERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBpbnB1dERpdi5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycgPyBpbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzpcbiAgICAgICAgICAgIG51bGxcbiAgICB9XG4gICAgY29uc3QgaGlkZVByb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpO1xuICAgICAgICBhZGRQcm9qZWN0RGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCBpbnB1dERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1pbnB1dCcpO1xuICAgICAgICBpbnB1dERpdi5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycgPyBpbnB1dERpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOlxuICAgICAgICAgICAgbnVsbFxuICAgIH1cbiAgICByZXR1cm4ge3VwZGF0ZSwgc2hvd1Byb2plY3RJbnB1dCwgaGlkZVByb2plY3RJbnB1dCwgY2xlYXJJbnB1dH07XG59KSgpO1xuXG5jb25zdCBldmVudExpc3RlbmVycyA9ICgoKSA9PiB7XG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdCcpO1xuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlUmVuZGVyLnNob3dQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1idXR0b24nKTtcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsLWJ1dHRvbicpO1xuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGVDb250cm9sLm1ha2VOZXdQcm9qZWN0KTtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlQ29udHJvbC5jYW5jZWxQcm9qZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpO1xuICAgIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlQ29udHJvbC5zZWxlY3RQcm9qZWN0KTtcblxuICAgIGNvbnN0IHRhc2tTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay12aWV3JylcbiAgICB0YXNrU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lkZUNvbnRyb2wuc2VsZWN0VGFzaylcbn0pKCk7XG5cbnNpZGVSZW5kZXIudXBkYXRlKClcbi8vIHN0YXJ0IHdpdGggYWxsIHByb2plY3RzIHBhZ2VcbmFsbFByb2pSZW5kZXIucGFnZSgpO1xuXG5leHBvcnQge3NpZGVSZW5kZXIsIHNpZGVDb250cm9sLCBzaWRlRnVuY307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=