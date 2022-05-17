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
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 103%;\n\tvertical-align: baseline;\n    list-style: none;\n}\n\n#main-content h1, #main-content h2, #main-content h3 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 5rem;\n    color: #0a0028;\n}\n\n#heading-check {\n    font-size: 5rem;\n    color: white;\n}\n\nh2 {\n    font-size: 3rem;\n    margin-top: 15px;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background-color: lightgray;\n    color: #0a0028;\n}\ninput, textarea {\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    vertical-align: middle;\n}\n#main {\n    display: flex;\n}\n\n#main-content {\n    flex-grow: 1;\n}\n\n#heading {\n    border-bottom: 2px #20008c solid;\n    background-color: #280c57;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#to {\n    color: #6628d2;\n}\n#do {\n    color: lightgray;\n}\n\n#add-project-input {\n    display: none;\n}\n\n#todo-form {\n    display: none;\n}\n#todo-form span, #edit-todo-form span {\n    font-size: 1.75rem;\n}\n\n#todo-form input, #edit-todo-form input {\n    font-size: 1rem;\n}\n\n#star-form {\n    grid-row: 4/5;\n    grid-column: 1/3;\n    justify-self: center;\n}\n#button-form {\n    grid-row: 5/6;\n    grid-column: 1/3;\n    justify-self: center;\n}\n\n#input-container {\n    display: grid;\n    grid-template-columns: 15% 20%;\n    row-gap: 15px;\n    width: 80%;\n    justify-content: center;\n    justify-items: start;\n    margin: 30px auto 15px auto;\n    border-bottom: 2px #0a0028 solid;\n}\n\n.task-list {\n    display: flex;\n    gap: 5px 80px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-list > div > span {\n    padding: 15px;\n}\n\n.task-ul > li {\n    padding: 15px;\n    border-bottom: 2px #0f0421 solid;\n}\n\n.description {\n    margin-left: 15px;\n    color: #443082;\n    font-style: italic;\n    word-break: break-word;\n}\n\n.complete {\n    text-decoration: line-through;\n}\n\n.important {\n    color: yellow;\n}\n\n.material-symbols-outlined:hover {\n    color: white;\n}\n.material-symbols-outlined{\n    vertical-align: middle;\n}\n\n#sidepanel {\n    background-color: darkgray;\n    min-height: 600px;\n    padding: 15px;\n    min-width: 236px;\n}\n\n#sidepanel li:hover, #sidepanel span:hover {\n    color: white;\n}\n\n#sidepanel ul {\n    margin: 5px 0;\n}\n\n#sidepanel li {\n    margin-left: 10px;\n    padding: 5px;\n}\n\n#project-name-input {\n    font-size: 1rem;\n}\n\n/* All projects page */\n/* #all-proj-container {\n    text-align: center;\n} */\n\n.proj-card {\n    color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#proj-links {\n    text-align: right;\n}\n\n#add-project-form > div {\n    display: inline-block;\n}\n\n#add-project-form > h3 {\n    margin-bottom: 20px;\n}\n\n#add-project-form > div > span {\n    padding: 5px;\n    font-size: 2rem;\n}\n\n#all-proj-container span:hover {\n    color: white;\n}\n\n#all-proj-ul {\n    display: grid;\n    grid-template-columns: 200px 200px 200px;\n    grid-auto-rows: 240px;\n    gap: 25px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 80%;\n    \n}\n\n.proj-card > div > form {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.proj-card > div > form > textarea {\n    font-size: 1.5rem;\n    text-align: center;\n    word-wrap: break-word;\n    border-radius: 15px;\n}\n\n#project-input-buttons > span {\n    font-size: 2rem;\n}\n#project-input-buttons {\n    padding: 5px;\n}\n\n.proj-card span {\n    text-align: right;\n}\n\n.proj-card {\n    background-color: #280c57;\n    border-radius: 20px;\n    border: 2px #0f0421 solid;\n    padding: 15px;\n}\n\n#all-proj-name-input {\n    font-size: 1.5rem;\n    padding: 8px;\n}\n\n#add-project-form {\n    width: fit-content;\n    margin: 10px auto;\n    padding: 15px;\n    padding-bottom: 40px;\n    display: none;\n}\n\n#add-task {\n    display: block;\n}\n\n#add-project-main, #add-project-main span, #add-task, #add-task span {\n    font-size: 2rem;\n    padding: 15px;\n    text-align: center;\n}\n\n/* task pgs */\n.task-ul {\n    width: 80%;\n    margin: 15px auto;\n}\n\n.task-container {\n    display: flex;\n    align-items: center;\n    gap: 5px 40px;\n}\n\n.empty {\n    text-align: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 103%;\n\tvertical-align: baseline;\n    list-style: none;\n}\n\n#main-content h1, #main-content h2, #main-content h3 {\n    text-align: center;\n}\n\nh1 {\n    font-size: 5rem;\n    color: #0a0028;\n}\n\n#heading-check {\n    font-size: 5rem;\n    color: white;\n}\n\nh2 {\n    font-size: 3rem;\n    margin-top: 15px;\n}\n\nh3 {\n    font-size: 2rem;\n}\n\nbody {\n    background-color: lightgray;\n    color: #0a0028;\n}\ninput, textarea {\n    border: none;\n    border-radius: 15px;\n    padding: 10px;\n    vertical-align: middle;\n}\n#main {\n    display: flex;\n}\n\n#main-content {\n    flex-grow: 1;\n}\n\n#heading {\n    border-bottom: 2px #20008c solid;\n    background-color: #280c57;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#to {\n    color: #6628d2;\n}\n#do {\n    color: lightgray;\n}\n\n#add-project-input {\n    display: none;\n}\n\n#todo-form {\n    display: none;\n}\n#todo-form span, #edit-todo-form span {\n    font-size: 1.75rem;\n}\n\n#todo-form input, #edit-todo-form input {\n    font-size: 1rem;\n}\n\n#star-form {\n    grid-row: 4/5;\n    grid-column: 1/3;\n    justify-self: center;\n}\n#button-form {\n    grid-row: 5/6;\n    grid-column: 1/3;\n    justify-self: center;\n}\n\n#input-container {\n    display: grid;\n    grid-template-columns: 15% 20%;\n    row-gap: 15px;\n    width: 80%;\n    justify-content: center;\n    justify-items: start;\n    margin: 30px auto 15px auto;\n    border-bottom: 2px #0a0028 solid;\n}\n\n.task-list {\n    display: flex;\n    gap: 5px 80px;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.task-list > div > span {\n    padding: 15px;\n}\n\n.task-ul > li {\n    padding: 15px;\n    border-bottom: 2px #0f0421 solid;\n}\n\n.description {\n    margin-left: 15px;\n    color: #443082;\n    font-style: italic;\n    word-break: break-word;\n}\n\n.complete {\n    text-decoration: line-through;\n}\n\n.important {\n    color: yellow;\n}\n\n.material-symbols-outlined:hover {\n    color: white;\n}\n.material-symbols-outlined{\n    vertical-align: middle;\n}\n\n#sidepanel {\n    background-color: darkgray;\n    min-height: 600px;\n    padding: 15px;\n    min-width: 236px;\n}\n\n#sidepanel li:hover, #sidepanel span:hover {\n    color: white;\n}\n\n#sidepanel ul {\n    margin: 5px 0;\n}\n\n#sidepanel li {\n    margin-left: 10px;\n    padding: 5px;\n}\n\n#project-name-input {\n    font-size: 1rem;\n}\n\n/* All projects page */\n/* #all-proj-container {\n    text-align: center;\n} */\n\n.proj-card {\n    color: lightgrey;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n#proj-links {\n    text-align: right;\n}\n\n#add-project-form > div {\n    display: inline-block;\n}\n\n#add-project-form > h3 {\n    margin-bottom: 20px;\n}\n\n#add-project-form > div > span {\n    padding: 5px;\n    font-size: 2rem;\n}\n\n#all-proj-container span:hover {\n    color: white;\n}\n\n#all-proj-ul {\n    display: grid;\n    grid-template-columns: 200px 200px 200px;\n    grid-auto-rows: 240px;\n    gap: 25px;\n    justify-content: center;\n    margin: 0 auto;\n    width: 80%;\n    \n}\n\n.proj-card > div > form {\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n\n.proj-card > div > form > textarea {\n    font-size: 1.5rem;\n    text-align: center;\n    word-wrap: break-word;\n    border-radius: 15px;\n}\n\n#project-input-buttons > span {\n    font-size: 2rem;\n}\n#project-input-buttons {\n    padding: 5px;\n}\n\n.proj-card span {\n    text-align: right;\n}\n\n.proj-card {\n    background-color: #280c57;\n    border-radius: 20px;\n    border: 2px #0f0421 solid;\n    padding: 15px;\n}\n\n#all-proj-name-input {\n    font-size: 1.5rem;\n    padding: 8px;\n}\n\n#add-project-form {\n    width: fit-content;\n    margin: 10px auto;\n    padding: 15px;\n    padding-bottom: 40px;\n    display: none;\n}\n\n#add-task {\n    display: block;\n}\n\n#add-project-main, #add-project-main span, #add-task, #add-task span {\n    font-size: 2rem;\n    padding: 15px;\n    text-align: center;\n}\n\n/* task pgs */\n.task-ul {\n    width: 80%;\n    margin: 15px auto;\n}\n\n.task-container {\n    display: flex;\n    align-items: center;\n    gap: 5px 40px;\n}\n\n.empty {\n    text-align: center;\n}"],"sourceRoot":""}]);
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
        this.projects = [];
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
    constructor(name, description, date, important) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.important = important;
    }
}
// add project for testing
let todo1 = new Todo('Cut down to 100 photos');
todo1.description = 'make sure to include the photo of Sean and Sarah';
let todo2 = new Todo('Edit all photos');
let todo3 = new Todo('Make photo album');
let todo4 = new Todo('Get album printed')

let proj1 = new Project('Birthday Party Photo Album');
proj1.addTodo(todo1);
proj1.addTodo(todo2);
proj1.addTodo(todo3);
proj1.addTodo(todo4);
todo1.date = '2022-06-21'
todo2.date = '2022-06-28'
todo3.date = '2022-07-07'
const todoLists = new ToDoList;
todoLists.addProject(proj1);



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
        const inputDiv = document.getElementById('add-project-input');
        inputDiv.style.display != 'block' ? inputDiv.style.display = 'block':
            null
    }
    const hideProjectInput = () => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MscUVBQTBCO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlMNkM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVxQjtBQUM0QztBQUNKO0FBQ2hCO0FBQ1I7OztBQUdyQztBQUNBO0FBQ0EsUUFBUSxpRUFBdUI7QUFDL0I7QUFDQTtBQUNBLFFBQVEsK0RBQXlCO0FB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O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvY2xvbmVPYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlU3RyaWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hbGxQcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RQYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2lkZUhvbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDMlO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI21haW4tY29udGVudCBoMSwgI21haW4tY29udGVudCBoMiwgI21haW4tY29udGVudCBoMyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGNvbG9yOiAjMGEwMDI4O1xcbn1cXG5cXG4jaGVhZGluZy1jaGVjayB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMiB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuaDMge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxuICAgIGNvbG9yOiAjMGEwMDI4O1xcbn1cXG5pbnB1dCwgdGV4dGFyZWEge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbiNtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI21haW4tY29udGVudCB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuI2hlYWRpbmcge1xcbiAgICBib3JkZXItYm90dG9tOiAycHggIzIwMDA4YyBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MGM1NztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiN0byB7XFxuICAgIGNvbG9yOiAjNjYyOGQyO1xcbn1cXG4jZG8ge1xcbiAgICBjb2xvcjogbGlnaHRncmF5O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtaW5wdXQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuI3RvZG8tZm9ybSBzcGFuLCAjZWRpdC10b2RvLWZvcm0gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG59XFxuXFxuI3RvZG8tZm9ybSBpbnB1dCwgI2VkaXQtdG9kby1mb3JtIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4jc3Rhci1mb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDQvNTtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbiNidXR0b24tZm9ybSB7XFxuICAgIGdyaWQtcm93OiA1LzY7XFxuICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNSUgMjAlO1xcbiAgICByb3ctZ2FwOiAxNXB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIG1hcmdpbjogMzBweCBhdXRvIDE1cHggYXV0bztcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICMwYTAwMjggc29saWQ7XFxufVxcblxcbi50YXNrLWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweCA4MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrLWxpc3QgPiBkaXYgPiBzcGFuIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnRhc2stdWwgPiBsaSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCAjMGYwNDIxIHNvbGlkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgY29sb3I6ICM0NDMwODI7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcXG59XFxuXFxuLmNvbXBsZXRlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5pbXBvcnRhbnQge1xcbiAgICBjb2xvcjogeWVsbG93O1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZDpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWR7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbiNzaWRlcGFuZWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcXG4gICAgbWluLWhlaWdodDogNjAwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1pbi13aWR0aDogMjM2cHg7XFxufVxcblxcbiNzaWRlcGFuZWwgbGk6aG92ZXIsICNzaWRlcGFuZWwgc3Bhbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI3NpZGVwYW5lbCB1bCB7XFxuICAgIG1hcmdpbjogNXB4IDA7XFxufVxcblxcbiNzaWRlcGFuZWwgbGkge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1uYW1lLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4vKiBBbGwgcHJvamVjdHMgcGFnZSAqL1xcbi8qICNhbGwtcHJvai1jb250YWluZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAqL1xcblxcbi5wcm9qLWNhcmQge1xcbiAgICBjb2xvcjogbGlnaHRncmV5O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNwcm9qLWxpbmtzIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtID4gZGl2IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSA+IGgzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0gPiBkaXYgPiBzcGFuIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNhbGwtcHJvai1jb250YWluZXIgc3Bhbjpob3ZlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2FsbC1wcm9qLXVsIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAyMDBweCAyMDBweDtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDI0MHB4O1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgXFxufVxcblxcbi5wcm9qLWNhcmQgPiBkaXYgPiBmb3JtIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucHJvai1jYXJkID4gZGl2ID4gZm9ybSA+IHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1pbnB1dC1idXR0b25zID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuI3Byb2plY3QtaW5wdXQtYnV0dG9ucyB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnByb2otY2FyZCBzcGFuIHtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5wcm9qLWNhcmQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwYzU3O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IDJweCAjMGYwNDIxIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4jYWxsLXByb2otbmFtZS1pbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDEwcHggYXV0bztcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNhZGQtdGFzayB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4jYWRkLXByb2plY3QtbWFpbiwgI2FkZC1wcm9qZWN0LW1haW4gc3BhbiwgI2FkZC10YXNrLCAjYWRkLXRhc2sgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiB0YXNrIHBncyAqL1xcbi50YXNrLXVsIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4IDQwcHg7XFxufVxcblxcbi5lbXB0eSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wi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QUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isb0JBQW9CO0lBQ3BCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUEsYUFBYTtBQUNiO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMyU7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IGgxLCAjbWFpbi1jb250ZW50IGgyLCAjbWFpbi1jb250ZW50IGgzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgY29sb3I6ICMwYTAwMjg7XFxufVxcblxcbiNoZWFkaW5nLWNoZWNrIHtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgyIHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG5oMyB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXG4gICAgY29sb3I6ICMwYTAwMjg7XFxufVxcbmlucHV0LCB0ZXh0YXJlYSB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuI21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbi1jb250ZW50IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4jaGVhZGluZyB7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCAjMjAwMDhjIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgwYzU3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvIHtcXG4gICAgY29sb3I6ICM2NjI4ZDI7XFxufVxcbiNkbyB7XFxuICAgIGNvbG9yOiBsaWdodGdyYXk7XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbnB1dCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4jdG9kby1mb3JtIHNwYW4sICNlZGl0LXRvZG8tZm9ybSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xcbn1cXG5cXG4jdG9kby1mb3JtIGlucHV0LCAjZWRpdC10b2RvLWZvcm0gaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbiNzdGFyLWZvcm0ge1xcbiAgICBncmlkLXJvdzogNC81O1xcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuI2J1dHRvbi1mb3JtIHtcXG4gICAgZ3JpZC1yb3c6IDUvNjtcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbiNpbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE1JSAyMCU7XFxuICAgIHJvdy1nYXA6IDE1cHg7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMTVweCBhdXRvO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggIzBhMDAyOCBzb2xpZDtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4IDgwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRhc2stbGlzdCA+IGRpdiA+IHNwYW4ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4udGFzay11bCA+IGxpIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4ICMwZjA0MjEgc29saWQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBjb2xvcjogIzQ0MzA4MjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmltcG9ydGFudCB7XFxuICAgIGNvbG9yOiB5ZWxsb3c7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuI3NpZGVwYW5lbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xcbiAgICBtaW4taGVpZ2h0OiA2MDBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgbWluLXdpZHRoOiAyMzZweDtcXG59XFxuXFxuI3NpZGVwYW5lbCBsaTpob3ZlciwgI3NpZGVwYW5lbCBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jc2lkZXBhbmVsIHVsIHtcXG4gICAgbWFyZ2luOiA1cHggMDtcXG59XFxuXFxuI3NpZGVwYW5lbCBsaSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUtaW5wdXQge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi8qIEFsbCBwcm9qZWN0cyBwYWdlICovXFxuLyogI2FsbC1wcm9qLWNvbnRhaW5lciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICovXFxuXFxuLnByb2otY2FyZCB7XFxuICAgIGNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI3Byb2otbGlua3Mge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0gPiBkaXYge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1mb3JtID4gaDMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jYWRkLXByb2plY3QtZm9ybSA+IGRpdiA+IHNwYW4ge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2FsbC1wcm9qLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jYWxsLXByb2otdWwge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDIwMHB4IDIwMHB4O1xcbiAgICBncmlkLWF1dG8tcm93czogMjQwcHg7XFxuICAgIGdhcDogMjVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBcXG59XFxuXFxuLnByb2otY2FyZCA+IGRpdiA+IGZvcm0ge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5wcm9qLWNhcmQgPiBkaXYgPiBmb3JtID4gdGV4dGFyZWEge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxufVxcblxcbiNwcm9qZWN0LWlucHV0LWJ1dHRvbnMgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4jcHJvamVjdC1pbnB1dC1idXR0b25zIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ucHJvai1jYXJkIHNwYW4ge1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLnByb2otY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODBjNTc7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogMnB4ICMwZjA0MjEgc29saWQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbiNhbGwtcHJvai1uYW1lLWlucHV0IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDhweDtcXG59XFxuXFxuI2FkZC1wcm9qZWN0LWZvcm0ge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2FkZC10YXNrIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbiNhZGQtcHJvamVjdC1tYWluLCAjYWRkLXByb2plY3QtbWFpbiBzcGFuLCAjYWRkLXRhc2ssICNhZGQtdGFzayBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIHRhc2sgcGdzICovXFxuLnRhc2stdWwge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBtYXJnaW46IDE1cHggYXV0bztcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHggNDBweDtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGlydHlPYmplY3QsIHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDsiLCJpbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDEwMDAgKiA2MDtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDYwICogMjQ7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IE1JTlVURVNfSU5fREFZICogMzA7XG52YXIgTUlOVVRFU19JTl9ZRUFSID0gTUlOVVRFU19JTl9EQVkgKiAzNjU7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlU3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGZvcm1hdERpc3RhbmNlYCwgYnV0IGRvZXMgbm90IHVzZSBoZWxwZXJzIGxpa2UgJ2FsbW9zdCcsICdvdmVyJyxcbiAqICdsZXNzIHRoYW4nIGFuZCB0aGUgbGlrZS5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiA1OSBzZWNzICAgICAgICAgIHwgWzAuLjU5XSBzZWNvbmRzICAgICB8XG4gKiB8IDEgLi4uIDU5IG1pbnMgICAgICAgICAgfCBbMS4uNTldIG1pbnV0ZXMgICAgIHxcbiAqIHwgMSAuLi4gMjMgaHJzICAgICAgICAgICB8IFsxLi4yM10gaG91cnMgICAgICAgfFxuICogfCAxIC4uLiAyOSBkYXlzICAgICAgICAgIHwgWzEuLjI5XSBkYXlzICAgICAgICB8XG4gKiB8IDEgLi4uIDExIG1vbnRocyAgICAgICAgfCBbMS4uMTFdIG1vbnRocyAgICAgIHxcbiAqIHwgMSAuLi4gTiB5ZWFycyAgICAgICAgICB8IFsxLi5OXSAgeWVhcnMgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzU3RyaWN0YCB0byBgZm9ybWF0RGlzdGFuY2VTdHJpY3RgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdChcbiAqICAgICBuZXcgRGF0ZSgyMDE1LCAwLCAyKSxcbiAqICAgICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogICApIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgICAgbmV3IERhdGUoMjAxNSwgMCwgMilcbiAqICAgKSAvLz0+ICc2IG1vbnRocydcbiAqICAgYGBgXG4gKlxuICogLSBgcGFydGlhbE1ldGhvZGAgb3B0aW9uIGlzIHJlbmFtZWQgdG8gYHJvdW5kaW5nTWV0aG9kYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICB7IHBhcnRpYWxNZXRob2Q6ICdjZWlsJyB9XG4gKiAgICkgLy89PiAnMiBtaW51dGVzJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2VTdHJpY3QoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgcm91bmRpbmdNZXRob2Q6ICdjZWlsJyB9XG4gKiAgICkgLy89PiAnMiBtaW51dGVzJ1xuICogICBgYGBcbiAqXG4gKiAtIElmIGByb3VuZGluZ01ldGhvZGAgaXMgbm90IHNwZWNpZmllZCwgaXQgbm93IGRlZmF1bHRzIHRvIGByb3VuZGAgaW5zdGVhZCBvZiBgZmxvb3JgLlxuICpcbiAqIC0gYHVuaXRgIG9wdGlvbiBub3cgYWNjZXB0cyBvbmUgb2YgdGhlIHN0cmluZ3M6XG4gKiAgICdzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ21vbnRoJyBvciAneWVhcicgaW5zdGVhZCBvZiAncycsICdtJywgJ2gnLCAnZCcsICdNJyBvciAnWSdcbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMzLCAxKSxcbiAqICAgICB7IHVuaXQ6ICdtJyB9XG4gKiAgIClcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMywgMSksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IHVuaXQ6ICdtaW51dGUnIH1cbiAqICAgKVxuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7J3NlY29uZCd8J21pbnV0ZSd8J2hvdXInfCdkYXknfCdtb250aCd8J3llYXInfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3JvdW5kJ10gLSB3aGljaCB3YXkgdG8gcm91bmQgcGFydGlhbCB1bml0c1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5yb3VuZGluZ01ldGhvZGAgbXVzdCBiZSAnZmxvb3InLCAnY2VpbCcgb3IgJ3JvdW5kJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMudW5pdGAgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDIpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICcxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgaW4gbWludXRlcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbWludXRlJ1xuICogfSlcbiAqIC8vPT4gJzUyNTYwMCBtaW51dGVzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE1XG4gKiAvLyB0byAyOCBKYW51YXJ5IDIwMTUsIGluIG1vbnRocywgcm91bmRlZCB1cD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDI4KSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVN0cmljdChkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZS5mb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHJvdW5kaW5nTWV0aG9kID0gb3B0aW9ucy5yb3VuZGluZ01ldGhvZCA9PSBudWxsID8gJ3JvdW5kJyA6IFN0cmluZyhvcHRpb25zLnJvdW5kaW5nTWV0aG9kKTtcbiAgdmFyIHJvdW5kaW5nTWV0aG9kRm47XG5cbiAgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnZmxvb3InKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGguZmxvb3I7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdjZWlsJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmNlaWw7XG4gIH0gZWxzZSBpZiAocm91bmRpbmdNZXRob2QgPT09ICdyb3VuZCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5yb3VuZDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInJvdW5kaW5nTWV0aG9kIG11c3QgYmUgJ2Zsb29yJywgJ2NlaWwnIG9yICdyb3VuZCdcIik7XG4gIH1cblxuICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZVJpZ2h0LmdldFRpbWUoKSAtIGRhdGVMZWZ0LmdldFRpbWUoKTtcbiAgdmFyIG1pbnV0ZXMgPSBtaWxsaXNlY29uZHMgLyBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFO1xuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KTsgLy8gVXNlIERTVC1ub3JtYWxpemVkIGRpZmZlcmVuY2UgaW4gbWludXRlcyBmb3IgeWVhcnMsIG1vbnRocyBhbmQgZGF5cztcbiAgLy8gdXNlIHJlZ3VsYXIgZGlmZmVyZW5jZSBpbiBtaW51dGVzIGZvciBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcy5cblxuICB2YXIgZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPSAobWlsbGlzZWNvbmRzIC0gdGltZXpvbmVPZmZzZXQpIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIHVuaXQ7XG5cbiAgaWYgKG9wdGlvbnMudW5pdCA9PSBudWxsKSB7XG4gICAgaWYgKG1pbnV0ZXMgPCAxKSB7XG4gICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcbiAgICAgIHVuaXQgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgICAgdW5pdCA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRzdE5vcm1hbGl6ZWRNaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX1lFQVIpIHtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ3llYXInO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdCk7XG4gIH0gLy8gMCB1cCB0byA2MCBzZWNvbmRzXG5cblxuICBpZiAodW5pdCA9PT0gJ3NlY29uZCcpIHtcbiAgICB2YXIgc2Vjb25kcyA9IHJvdW5kaW5nTWV0aG9kRm4obWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFNlY29uZHMnLCBzZWNvbmRzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDYwIG1pbnNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xuICAgIHZhciByb3VuZGVkTWludXRlcyA9IHJvdW5kaW5nTWV0aG9kRm4obWludXRlcyk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCByb3VuZGVkTWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAyNCBob3Vyc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdob3VyJykge1xuICAgIHZhciBob3VycyA9IHJvdW5kaW5nTWV0aG9kRm4obWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4SG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2RheScpIHtcbiAgICB2YXIgZGF5cyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDEyIG1vbnRoc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtb250aCcpIHtcbiAgICB2YXIgbW9udGhzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBtb250aHMgPT09IDEyICYmIG9wdGlvbnMudW5pdCAhPT0gJ21vbnRoJyA/IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgMSwgbG9jYWxpemVPcHRpb25zKSA6IGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3llYXInKSB7XG4gICAgdmFyIHllYXJzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fWUVBUik7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInVuaXQgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXCIpO1xufSIsImltcG9ydCBmb3JtYXREaXN0YW5jZVN0cmljdCBmcm9tIFwiLi4vZm9ybWF0RGlzdGFuY2VTdHJpY3QvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHsnc2Vjb25kJ3wnbWludXRlJ3wnaG91cid8J2RheSd8J21vbnRoJ3wneWVhcid9IFtvcHRpb25zLnVuaXRdIC0gaWYgc3BlY2lmaWVkLCB3aWxsIGZvcmNlIGEgdW5pdFxuICogQHBhcmFtIHsnZmxvb3InfCdjZWlsJ3wncm91bmQnfSBbb3B0aW9ucy5yb3VuZGluZ01ldGhvZD0ncm91bmQnXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LCB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAyIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIHZhciByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSlcbiAqIClcbiAqIC8vPT4gJzIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdpbiAxIHllYXInXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI4IEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1LCBpbiBtb250aHMsIHJvdW5kZWQgdXA/P1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBBdWd1c3QgMjAxNiBpbiBFc3BlcmFudG8/XG4gKiB2YXIgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogdmFyIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBkaXJ0eU9wdGlvbnMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHByZXZpb3VzIGBwYXJzZWAgaW1wbGVtZW50YXRpb24gd2FzIHJlbmFtZWQgdG8gYHBhcnNlSVNPYC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBwYXJzZSgnMjAxNi0wMS0wMScpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIHBhcnNlSVNPKCcyMDE2LTAxLTAxJylcbiAqICAgYGBgXG4gKlxuICogLSBgcGFyc2VJU09gIG5vdyB2YWxpZGF0ZXMgc2VwYXJhdGUgZGF0ZSBhbmQgdGltZSB2YWx1ZXMgaW4gSVNPLTg2MDEgc3RyaW5nc1xuICogICBhbmQgcmV0dXJucyBgSW52YWxpZCBEYXRlYCBpZiB0aGUgZGF0ZSBpcyBpbnZhbGlkLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICBwYXJzZUlTTygnMjAxOC0xMy0zMicpXG4gKiAgIC8vPT4gSW52YWxpZCBEYXRlXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgZG9lc24ndCBmYWxsIGJhY2sgdG8gYG5ldyBEYXRlYCBjb25zdHJ1Y3RvclxuICogICBpZiBpdCBmYWlscyB0byBwYXJzZSBhIHN0cmluZyBhcmd1bWVudC4gSW5zdGVhZCwgaXQgcmV0dXJucyBgSW52YWxpZCBEYXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUlTTyhhcmd1bWVudCwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGFkZGl0aW9uYWxEaWdpdHMgPSBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMgPT0gbnVsbCA/IDIgOiB0b0ludGVnZXIob3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzKTtcblxuICBpZiAoYWRkaXRpb25hbERpZ2l0cyAhPT0gMiAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAxICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignYWRkaXRpb25hbERpZ2l0cyBtdXN0IGJlIDAsIDEgb3IgMicpO1xuICB9XG5cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuXG4gIGlmIChkYXRlU3RyaW5ncy5kYXRlKSB7XG4gICAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKTtcbiAgICBkYXRlID0gcGFyc2VEYXRlKHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZywgcGFyc2VZZWFyUmVzdWx0LnllYXIpO1xuICB9XG5cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG5cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICB0aW1lID0gcGFyc2VUaW1lKGRhdGVTdHJpbmdzLnRpbWUpO1xuXG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcblxuICAgIGlmIChpc05hTihvZmZzZXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRpcnR5RGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUpOyAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSgwKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIoZGlydHlEYXRlLmdldFVUQ0Z1bGxZZWFyKCksIGRpcnR5RGF0ZS5nZXRVVENNb250aCgpLCBkaXJ0eURhdGUuZ2V0VVRDRGF0ZSgpKTtcbiAgICByZXN1bHQuc2V0SG91cnMoZGlydHlEYXRlLmdldFVUQ0hvdXJzKCksIGRpcnR5RGF0ZS5nZXRVVENNaW51dGVzKCksIGRpcnR5RGF0ZS5nZXRVVENTZWNvbmRzKCksIGRpcnR5RGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5cbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7IC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cblxuICBpZiAoLzovLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzBdO1xuICB9IGVsc2Uge1xuICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBhcnJheVswXTtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV07XG5cbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZy5yZXBsYWNlKHRva2VuWzFdLCAnJyk7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lem9uZSA9IHRva2VuWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcblxuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4ge1xuICAgIHllYXI6IE5hTixcbiAgICByZXN0RGF0ZVN0cmluZzogJydcbiAgfTtcbiAgdmFyIHllYXIgPSBjYXB0dXJlc1sxXSA/IHBhcnNlSW50KGNhcHR1cmVzWzFdKSA6IG51bGw7XG4gIHZhciBjZW50dXJ5ID0gY2FwdHVyZXNbMl0gPyBwYXJzZUludChjYXB0dXJlc1syXSkgOiBudWxsOyAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG5cbiAgcmV0dXJuIHtcbiAgICB5ZWFyOiBjZW50dXJ5ID09PSBudWxsID8geWVhciA6IGNlbnR1cnkgKiAxMDAsXG4gICAgcmVzdERhdGVTdHJpbmc6IGRhdGVTdHJpbmcuc2xpY2UoKGNhcHR1cmVzWzFdIHx8IGNhcHR1cmVzWzJdKS5sZW5ndGgpXG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcblxuICBpZiAoaXNXZWVrRGF0ZSkge1xuICAgIGlmICghdmFsaWRhdGVXZWVrRGF0ZSh5ZWFyLCB3ZWVrLCBkYXlPZldlZWspKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG5cbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cblxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgbW9udGgsIE1hdGgubWF4KGRheU9mWWVhciwgZGF5KSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lKHRpbWV6b25lU3RyaW5nKSB7XG4gIGlmICh0aW1lem9uZVN0cmluZyA9PT0gJ1onKSByZXR1cm4gMDtcbiAgdmFyIGNhcHR1cmVzID0gdGltZXpvbmVTdHJpbmcubWF0Y2godGltZXpvbmVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiAwO1xuICB2YXIgc2lnbiA9IGNhcHR1cmVzWzFdID09PSAnKycgPyAtMSA6IDE7XG4gIHZhciBob3VycyA9IHBhcnNlSW50KGNhcHR1cmVzWzJdKTtcbiAgdmFyIG1pbnV0ZXMgPSBjYXB0dXJlc1szXSAmJiBwYXJzZUludChjYXB0dXJlc1szXSkgfHwgMDtcblxuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09XZWVrWWVhcihpc29XZWVrWWVhciwgd2VlaywgZGF5KSB7XG4gIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvV2Vla1llYXIsIDAsIDQpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5RGF5ID0gZGF0ZS5nZXRVVENEYXkoKSB8fCA3O1xuICB2YXIgZGlmZiA9ICh3ZWVrIC0gMSkgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheTtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpICsgZGlmZik7XG4gIHJldHVybiBkYXRlO1xufSAvLyBWYWxpZGF0aW9uIGZ1bmN0aW9uc1xuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG5cblxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuXG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRhdGUpIHtcbiAgcmV0dXJuIG1vbnRoID49IDAgJiYgbW9udGggPD0gMTEgJiYgZGF0ZSA+PSAxICYmIGRhdGUgPD0gKGRheXNJbk1vbnRoc1ttb250aF0gfHwgKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDI5IDogMjgpKTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVRpbWUoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHtcbiAgaWYgKGhvdXJzID09PSAyNCkge1xuICAgIHJldHVybiBtaW51dGVzID09PSAwICYmIHNlY29uZHMgPT09IDA7XG4gIH1cblxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b2RvTGlzdHMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQgcHJvamVjdENvbnRyb2wgZnJvbSBcIi4vcHJvamVjdFBhZ2VcIjtcbmltcG9ydCB7IGNvbnRlbnRDb250cm9sbGVyfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgc2lkZVJlbmRlciwgc2lkZUNvbnRyb2wgfSBmcm9tIFwiLi9zaWRlUHJvamVjdHNcIjtcblxuY29uc3QgbWFrZUljb24gPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgc3Bhbi5pbm5lclRleHQgPSBuYW1lO1xuICAgIHJldHVybiBzcGFuO1xufTtcblxuY29uc3QgYWxsUHJvakNvbnRyb2wgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VQYWdlID0gKCkgPT4ge1xuICAgICAgICBhbGxQcm9qUmVuZGVyLnBhZ2UoKTtcbiAgICB9XG4gICAgY29uc3QgcHJvakZ1bmN0aW9ucyA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RDbGlja2VkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGE7XG4gICAgICAgIGNvbnN0IGZ1bmNDbGlja2VkID0gIGUudGFyZ2V0LmRhdGE7XG4gICAgICAgIGlmIChmdW5jQ2xpY2tlZCA9PSAndmlldycpIHtcbiAgICAgICAgICAgIHZpZXdQcm9qZWN0KHByb2plY3RDbGlja2VkKTtcbiAgICAgICAgfSBlbHNlIGlmIChmdW5jQ2xpY2tlZCA9PSAncmVuYW1lJykge1xuICAgICAgICAgICAgcmVuYW1lUHJvamVjdChwcm9qZWN0Q2xpY2tlZCwgZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZnVuY0NsaWNrZWQgPT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdENsaWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHZpZXdQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29udGVudENvbnRyb2xsZXIuZ29Ub1Byb2plY3RQYWdlKHByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCByZW5hbWVQcm9qZWN0ID0gKHByb2plY3QsIGUpID0+IHtcbiAgICAgICAgY29uc3QgaDMgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZmlyc3RDaGlsZFxuICAgICAgICBhbGxQcm9qUmVuZGVyLmNoYW5nZVRvSW5wdXQocHJvamVjdCwgaDMpXG4gICAgfVxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0b2RvTGlzdHMucmVtb3ZlUHJvamVjdCh0b2RvTGlzdHMuZ2V0SW5kZXgocHJvamVjdCkpO1xuICAgICAgICBzaWRlUmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1ha2VFZGl0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvakNsaWNrZWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGE7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRbMF0udmFsdWU7XG4gICAgICAgIHByb2pDbGlja2VkLm5hbWUgPSBuZXdOYW1lID09ICcnID8gJ3VubmFtZWQgcHJvamVjdCcgOiBuZXdOYW1lO1xuICAgICAgICBzaWRlUmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBjYW5jZWxFZGl0ID0gKCkgPT4ge1xuICAgICAgICBhbGxQcm9qUmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBjYW5jZWxGb3JtID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGwtcHJvai1uYW1lLWlucHV0Jyk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIGNhbmNlbEVkaXQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge21ha2VQYWdlLCB2aWV3UHJvamVjdCwgcHJvakZ1bmN0aW9ucywgbWFrZUVkaXQsIGNhbmNlbEVkaXQsIGNhbmNlbEZvcm19O1xufSkoKVxuXG5jb25zdCBhbGxQcm9qQ3JlYXRlID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nID0gKCkgPT4geyBcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGhlYWQuaW5uZXJUZXh0ID0gJ015IFByb2plY3RzJztcbiAgICAgICAgcmV0dXJuIGhlYWQ7XG4gICAgICAgIH1cbiAgICBjb25zdCBpbnB1dEZvcm0gPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBjb25zdCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uRGl2LmlkID0gJ3Byb2plY3QtaW5wdXQtYnV0dG9ucydcblxuICAgICAgICBjb25zdCBjaGVjayA9IG1ha2VJY29uKCdjaGVja19jaXJjbGUnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gbWFrZUljb24oJ2NhbmNlbCcpO1xuICAgICAgICBjaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFByb2pDb250cm9sLm1ha2VFZGl0KTtcbiAgICAgICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWxsUHJvakNvbnRyb2wuY2FuY2VsRWRpdCk7XG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpO1xuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG4gICAgY29uc3QgcHJvakxpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RVbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIHByb2plY3RVbC5pZCA9ICdhbGwtcHJvai11bCdcbiAgICAgICAgdG9kb0xpc3RzLnByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQocHJvakNhcmQocHJvamVjdCkpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvamVjdFVsO1xuICAgIH1cbiAgICBjb25zdCBwcm9qQ2FyZCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpLmRhdGEgPSBwcm9qZWN0O1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKCdwcm9qLWNhcmQnKTtcblxuICAgICAgICBjb25zdCBwcm9qSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHByb2pIZWFkLmlubmVyVGV4dCA9IHByb2plY3QubmFtZS5sZW5ndGggPCAyOSA/IHByb2plY3QubmFtZTogXG4gICAgICAgICAgICBgJHtwcm9qZWN0Lm5hbWUuc2xpY2UoMCwyOCl9Li4uYDtcblxuICAgICAgICBjb25zdCBwcm9qSXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByb2pJdGVtcy5pbm5lclRleHQgPSBgJHtwcm9qZWN0LnRvZG9zLmxlbmd0aH0gdGFza3NgO1xuXG4gICAgICAgIGNvbnN0IHByb2pMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2pMaW5rLmlkID0gJ3Byb2otbGlua3MnO1xuICAgICAgICBjb25zdCB2aWV3ID0gbWFrZUljb24oJ29wZW5faW5fbmV3Jyk7XG4gICAgICAgIHZpZXcuZGF0YSA9ICd2aWV3JztcbiAgICAgICAgY29uc3QgcmVuYW1lID0gbWFrZUljb24oJ2VkaXQnKTtcbiAgICAgICAgcmVuYW1lLmRhdGEgPSAncmVuYW1lJztcbiAgICAgICAgY29uc3QgZGVsID0gbWFrZUljb24oJ2RlbGV0ZV9mb3JldmVyJyk7XG4gICAgICAgIGRlbC5kYXRhID0gJ2RlbGV0ZSc7XG5cbiAgICAgICAgY29uc3QgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgICAgICBwcm9qTGluay5hcHBlbmRDaGlsZCh2aWV3KTtcbiAgICAgICAgcHJvakxpbmsuYXBwZW5kQ2hpbGQocmVuYW1lKTtcbiAgICAgICAgcHJvakxpbmsuYXBwZW5kQ2hpbGQoZGVsKTtcbiAgICAgICAgcHJvakxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxQcm9qQ29udHJvbC5wcm9qRnVuY3Rpb25zKTtcblxuICAgICAgICB0b3BEaXYuYXBwZW5kQ2hpbGQocHJvakhlYWQpO1xuICAgICAgICB0b3BEaXYuYXBwZW5kQ2hpbGQocHJvakl0ZW1zKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9wRGl2KTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocHJvakxpbmspO1xuICAgICAgICByZXR1cm4gbGk7XG4gICAgfVxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkUHJvamVjdC5pbm5lclRleHQgPSAnQWRkIFByb2plY3QgJztcbiAgICAgICAgYWRkUHJvamVjdC5hcHBlbmRDaGlsZChtYWtlSWNvbignYWRkX2NpcmNsZScpKTtcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFsbFByb2pSZW5kZXIuc2hvd0Zvcm0pO1xuICAgICAgICBhZGRQcm9qZWN0LmlkID0gJ2FkZC1wcm9qZWN0LW1haW4nXG4gICAgICAgIHJldHVybiBhZGRQcm9qZWN0O1xuICAgIH1cbiAgICBjb25zdCBhZGRQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZERpdi5pZCA9ICdhZGQtcHJvamVjdC1mb3JtJ1xuXG4gICAgICAgIGNvbnN0IHByb2pGb3JtSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHByb2pGb3JtSGVhZGluZy5pbm5lclRleHQgPSAnQ3JlYXRlIGEgTmV3IFByb2plY3QnXG5cbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dC5pZCA9ICdhbGwtcHJvai1uYW1lLWlucHV0JztcbiAgICAgICAgaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgUHJvamVjdCBOYW1lJztcblxuICAgICAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGNoZWNrID0gbWFrZUljb24oJ2NoZWNrX2NpcmNsZScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSBtYWtlSWNvbignY2FuY2VsJyk7XG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lkZUNvbnRyb2wubWFrZU5ld1Byb2plY3QpO1xuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhbGxQcm9qQ29udHJvbC5jYW5jZWxGb3JtKTtcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjaGVjayk7XG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcblxuICAgICAgICBhZGREaXYuYXBwZW5kQ2hpbGQocHJvakZvcm1IZWFkaW5nKTtcbiAgICAgICAgYWRkRGl2LmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgYWRkRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuICAgICAgICByZXR1cm4gYWRkRGl2O1xuICAgIH1cbiAgICByZXR1cm4ge3Byb2pMaXN0LCBoZWFkaW5nLCBpbnB1dEZvcm0sIGFkZFByb2plY3QsIGFkZFByb2plY3RGb3JtfTtcbn0pKClcblxuY29uc3QgYWxsUHJvalJlbmRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgY2hhbmdlVG9JbnB1dCA9IChwcm9qZWN0LCB0b0JlQ2hhbmdlZCkgPT4ge1xuICAgICAgICB0b0JlQ2hhbmdlZC5pbm5lckhUTUwgPSAnJ1xuICAgICAgICB0b0JlQ2hhbmdlZC5hcHBlbmRDaGlsZChhbGxQcm9qQ3JlYXRlLmlucHV0Rm9ybShwcm9qZWN0KSk7XG4gICAgfVxuICAgIGNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jb250ZW50Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuZGF0YSA9ICdhbGwtcHJvamVjdHMnXG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IGFsbFByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsUHJvakNvbnRhaW5lci5pZCA9ICdhbGwtcHJvai1jb250YWluZXInO1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFsbFByb2pDb250YWluZXIpO1xuICAgICAgICBhbGxQcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFByb2pDcmVhdGUuaGVhZGluZygpKTtcbiAgICAgICAgYWxsUHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxQcm9qQ3JlYXRlLmFkZFByb2plY3RGb3JtKCkpO1xuICAgICAgICBhbGxQcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKGFsbFByb2pDcmVhdGUuYWRkUHJvamVjdCgpKTtcbiAgICAgICAgYWxsUHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGxQcm9qQ3JlYXRlLnByb2pMaXN0KCkpO1xuICAgIH1cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFByb2ogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtbWFpbicpXG4gICAgICAgIGFkZFByb2ogJiYgYWRkUHJvai5zdHlsZS5kaXNwbGF5ICE9ICdibG9jaycgPyBcbiAgICAgICAgICAgIGFkZFByb2ouc3R5bGUuZGlzcGxheSA9ICdub25lJyA6IG51bGw7XG4gICAgICAgIHBhZ2UoKVxuICAgIH1cbiAgICBjb25zdCBzaG93Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkUHJvaiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1tYWluJylcbiAgICAgICAgYWRkUHJvai5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtZm9ybScpO1xuICAgICAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgfVxuICAgIHJldHVybiB7cGFnZSwgdXBkYXRlLCBjaGFuZ2VUb0lucHV0LCBzaG93Rm9ybX07XG59KSgpXG5cbmV4cG9ydCB7YWxsUHJvakNvbnRyb2wsIGFsbFByb2pSZW5kZXIsIG1ha2VJY29ufTsiLCJpbXBvcnQgeyBhbGxQcm9qUmVuZGVyIH0gZnJvbSBcIi4vYWxsUHJvamVjdHNcIjtcblxuY2xhc3MgVG9Eb0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuICAgIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuICAgIGZpbmRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMucHJvamVjdHNcbiAgICAgICAgZm9yIChsZXQgb2JqIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEluZGV4KHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnByb2plY3RzLmZpbmRJbmRleCh4ID0+IHggPT0gcHJvamVjdCk7XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5zbGljZSgwLGluZGV4KS5jb25jYXQodGhpcy5wcm9qZWN0cy5zbGljZShpbmRleCsxKSk7XG4gICAgfVxufVxuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICB9XG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICB9XG4gICAgZmluZFRvZG8obmFtZSkge1xuICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgdGhpcy50b2Rvcykge1xuICAgICAgICAgICAgaWYgKG9iamVjdC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3Muc2xpY2UoMCxpbmRleCkuY29uY2F0KHRoaXMudG9kb3Muc2xpY2UoaW5kZXgrMSkpO1xuICAgIH1cbn1cblxuY2xhc3MgVG9kbyB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIGltcG9ydGFudCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuaW1wb3J0YW50ID0gaW1wb3J0YW50O1xuICAgIH1cbn1cbi8vIGFkZCBwcm9qZWN0IGZvciB0ZXN0aW5nXG5sZXQgdG9kbzEgPSBuZXcgVG9kbygnQ3V0IGRvd24gdG8gMTAwIHBob3RvcycpO1xudG9kbzEuZGVzY3JpcHRpb24gPSAnbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlIHBob3RvIG9mIFNlYW4gYW5kIFNhcmFoJztcbmxldCB0b2RvMiA9IG5ldyBUb2RvKCdFZGl0IGFsbCBwaG90b3MnKTtcbmxldCB0b2RvMyA9IG5ldyBUb2RvKCdNYWtlIHBob3RvIGFsYnVtJyk7XG5sZXQgdG9kbzQgPSBuZXcgVG9kbygnR2V0IGFsYnVtIHByaW50ZWQnKVxuXG5sZXQgcHJvajEgPSBuZXcgUHJvamVjdCgnQmlydGhkYXkgUGFydHkgUGhvdG8gQWxidW0nKTtcbnByb2oxLmFkZFRvZG8odG9kbzEpO1xucHJvajEuYWRkVG9kbyh0b2RvMik7XG5wcm9qMS5hZGRUb2RvKHRvZG8zKTtcbnByb2oxLmFkZFRvZG8odG9kbzQpO1xudG9kbzEuZGF0ZSA9ICcyMDIyLTA2LTIxJ1xudG9kbzIuZGF0ZSA9ICcyMDIyLTA2LTI4J1xudG9kbzMuZGF0ZSA9ICcyMDIyLTA3LTA3J1xuY29uc3QgdG9kb0xpc3RzID0gbmV3IFRvRG9MaXN0O1xudG9kb0xpc3RzLmFkZFByb2plY3QocHJvajEpO1xuXG5leHBvcnQge1RvRG9MaXN0LCBQcm9qZWN0LCBUb2RvLCB0b2RvTGlzdHN9IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3NpZGVSZW5kZXIsIHNpZGVDb250cm9sLCBzaWRlRnVuY30gZnJvbSAnLi9zaWRlUHJvamVjdHMnO1xuaW1wb3J0IHtUb0RvTGlzdCwgUHJvamVjdCwgVG9kbywgdG9kb0xpc3RzfSBmcm9tICcuL2NsYXNzZXMnO1xuaW1wb3J0IHtwcm9qZWN0Q29udHJvbH0gZnJvbSAnLi9wcm9qZWN0UGFnZSc7XG5pbXBvcnQgdGFza0NvbnRyb2wgZnJvbSAnLi9zaWRlSG9tZSc7XG5cblxuY29uc3QgY29udGVudENvbnRyb2xsZXIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGdvVG9Qcm9qZWN0UGFnZSA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIHByb2plY3RDb250cm9sLm1ha2VQYWdlKHByb2plY3QpO1xuICAgIH1cbiAgICBjb25zdCBnb1RvVGFza3MgPSAodGFza1R5cGUpID0+IHtcbiAgICAgICAgdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSh0YXNrVHlwZSk7XG4gICAgfSBcbiAgICByZXR1cm4ge2dvVG9Qcm9qZWN0UGFnZSwgZ29Ub1Rhc2tzfTtcbn0pKCk7XG5cbmV4cG9ydCB7Y29udGVudENvbnRyb2xsZXJ9O1xuIiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL2NsYXNzZXNcIjtcbmltcG9ydCB7IHNpZGVSZW5kZXIgfSBmcm9tIFwiLi9zaWRlUHJvamVjdHNcIjtcbmltcG9ydCB7IG1ha2VJY29uIH0gZnJvbSBcIi4vYWxsUHJvamVjdHNcIjtcbmltcG9ydCB0YXNrQ29udHJvbCBmcm9tIFwiLi9zaWRlSG9tZVwiO1xuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdCwgcGFyc2VJU08gfSBmcm9tICdkYXRlLWZucyc7XG5cbmxldCB0aGlzUHJvamVjdCA9IG51bGw7XG5cbmNvbnN0IHRvZG9DcmVhdGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRpbmcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRoaXNQcm9qZWN0Lm5hbWU7XG4gICAgICAgIHJldHVybiBoZWFkaW5nO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbHRlcnMgPSAocHJvamVjdCwgZmlsdGVyKSA9PiB7XG4gICAgICAgIGxldCBmaWx0ZXJlZFRvZG9zID0gcHJvamVjdC50b2RvcztcbiAgICAgICAgaWYgKGZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkVG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uaW1wb3J0YW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsdGVyID09ICd0b2RheScpIHtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRkID0gU3RyaW5nKHRvZGF5LmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtbSA9IFN0cmluZyh0b2RheS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRUb2RheSA9IHl5eXkgKyAnLScgKyBtbSArICctJyArIGRkO1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkVG9kb3MgPSBwcm9qZWN0LnRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZGF0ZSA9PSBmb3JtYXRUb2RheSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRUb2RvcyA9IHByb2plY3QudG9kb3MuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXIodG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gICh0b2RvLmRhdGUgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChwYXJzZUlTTyh0b2RvLmRhdGUpKS5zcGxpdCgnICcpWzBdIDw9IDcpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9kbyA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZFRvZG9zO1xuICAgIH1cbiAgICBjb25zdCBsaXN0ID0gKHByb2plY3QsIGZpbHRlcj1udWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC11bCcpO1xuICAgICAgICBpZiAocHJvamVjdC50b2Rvcykge1xuICAgICAgICAgICAgbGV0IGkgPSAxO1xuICAgICAgICAgICAgbGV0IGZpbHRlcmVkVG9kb3MgPSBmaWx0ZXJzKHByb2plY3QsIGZpbHRlcik7XG4gICAgICAgICAgICBmb3IgKGxldCB0YXNrIG9mIGZpbHRlcmVkVG9kb3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIGxpLmlkID0gaTtcbiAgICAgICAgICAgICAgICBsaS5kYXRhID0gdGFzaztcbiAgICAgICAgICAgICAgICBsZXQgdG9wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5hbWVEaXYuaW5uZXJUZXh0ID0gdGFzay5uYW1lLmxlbmd0aCA8IDMxID8gdGFzay5uYW1lIDpcbiAgICAgICAgICAgICAgICBgJHt0YXNrLm5hbWUuc2xpY2UoMCwzMCl9Li4uYDtcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlRGl2LmlubmVyVGV4dCA9IGBEdWU6ICR7dGFzay5kYXRlfWA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZURpdi5pbm5lclRleHQgPSAnTm8gRHVlIERhdGUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCB0YXNrQ2hhbmdlRGl2ID0gY2hhbmdlckRpdihwcm9qZWN0LCB0YXNrKTtcbiAgICAgICAgICAgICAgICB0YXNrQ2hhbmdlRGl2LmRhdGEgPSBpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgcmlnaHRDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2stY29udGFpbmVyJ1xuICAgICAgICAgICAgICAgIGxlZnRDb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2stY29udGFpbmVyJ1xuXG4gICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCh0YXNrKSk7XG4gICAgICAgICAgICAgICAgbGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChuYW1lRGl2KTtcbiAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlRGl2KTtcbiAgICAgICAgICAgICAgICByaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ2hhbmdlRGl2KTtcbiAgICAgICAgICAgICAgICB0b3BEaXYuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG4gICAgICAgICAgICAgICAgdG9wRGl2LmFwcGVuZENoaWxkKGxlZnRDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHRvcERpdi5hcHBlbmRDaGlsZChyaWdodENvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQodG9wRGl2KTtcbiAgICAgICAgICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5kZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb24ubGVuZ3RoIDwgMzAxID8gXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3Rhc2suZGVzY3JpcHRpb24uc2xpY2UoMCwzMDApfS4uLmA7XG5cbiAgICAgICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrLmNvbXBsZXRlID8gXG4gICAgICAgICAgICAgICAgICAgIChuYW1lRGl2LmNsYXNzTmFtZSA9ICdjb21wbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpKSA6XG4gICAgICAgICAgICAgICAgICAgIChuYW1lRGl2LmNsYXNzTmFtZSA9ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgaSArKztcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdG9kb0xpc3QgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgdWwuY2xhc3NMaXN0LmFkZCgndGFzay11bCcpO1xuICAgICAgICB1bC5pZCA9ICd0b2RvLWxpc3QtdWwnO1xuICAgICAgICByZXR1cm4gdWxcbiAgICB9XG4gICAgXG4gICAgY29uc3QgY2hlY2tCb3ggPSAodGFzaykgPT4ge1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IHRhc2suY29tcGxldGUgPyBtYWtlSWNvbignY2hlY2tfYm94JykgOlxuICAgICAgICAgICAgbWFrZUljb24oJ2NoZWNrX2JveF9vdXRsaW5lX2JsYW5rJyk7XG4gICAgICAgIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuY2hhbmdlU3RhdHVzKTtcbiAgICAgICAgY2hlY2tCb3guZGF0YSA9IHRhc2s7XG4gICAgICAgIHJldHVybiBjaGVja0JveDtcbiAgICB9XG4gICAgY29uc3Qgc3Rhckljb24gPSAodGFzaykgPT4ge1xuICAgICAgICBsZXQgc3RhciA9IG51bGw7XG4gICAgICAgIGlmICh0YXNrICYmIHRhc2suaW1wb3J0YW50KSB7XG4gICAgICAgICAgICBzdGFyID0gbWFrZUljb24oJ3N0YXInKTtcbiAgICAgICAgICAgIHN0YXIuY2xhc3NMaXN0LmFkZCgnaW1wb3J0YW50Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFyID0gbWFrZUljb24oJ2dyYWRlJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3Rhci5kYXRhID0gdGFzaztcbiAgICAgICAgcmV0dXJuIHN0YXI7XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlckRpdiA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGxldCBjaGFuZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICBcbiAgICAgICAgbGV0IGVkaXQgPSBtYWtlSWNvbignZWRpdCcpO1xuICAgICAgICBsZXQgcmVtb3ZlID0gbWFrZUljb24oJ2RlbGV0ZV9mb3JldmVyJyk7XG4gICAgICAgIHJlbW92ZS5kYXRhID0gcHJvamVjdDtcbiAgICAgICAgbGV0IHN0YXIgPSBzdGFySWNvbih0YXNrKTtcbiAgICAgICAgXG5cbiAgICAgICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDb250cm9sLnN0YXJDbGljayk7XG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByb2plY3RDb250cm9sLnJlbW92ZVRvZG8pO1xuICAgICAgICBlZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuZWRpdFRvZG8pO1xuXG4gICAgICAgIGNoYW5nZURpdi5hcHBlbmRDaGlsZChzdGFyKTtcbiAgICAgICAgY2hhbmdlRGl2LmFwcGVuZENoaWxkKGVkaXQpO1xuICAgICAgICBjaGFuZ2VEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbiAgICAgICAgcmV0dXJuIGNoYW5nZURpdjtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgdG9kb0Zvcm0gPSAoZWRpdGluZz1mYWxzZSwgc2VsZWN0ZWRUb2RvPW51bGwpID0+IHtcbiAgICAgICAgY29uc3QgZm9ybUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBcblxuICAgICAgICBjb25zdCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgdG9kb0Zvcm0uYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIHRvZG9Gb3JtLmlkID0gJ3RvZG8tZm9ybSc7XG4gICAgXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9ICdUaXRsZTogJztcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndG9kby1pbnB1dCcpO1xuICAgIFxuICAgICAgICBjb25zdCBkZXRhaWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGRldGFpbExhYmVsLmlubmVyVGV4dCA9ICdEZXRhaWxzOiAnO1xuICAgICAgICBjb25zdCBkZXRhaWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIGRldGFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5wdXQnKTtcbiAgICBcbiAgICAgICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgZGF0ZUxhYmVsLmlubmVyVGV4dCA9ICdEYXRlOiAnO1xuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5wdXQnKTtcblxuICAgICAgICBjb25zdCBzdGFyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBzdGFyTGFiZWwuYXBwZW5kQ2hpbGQoc3Rhckljb24oc2VsZWN0ZWRUb2RvKSk7XG4gICAgICAgIGNvbnN0IHN0YXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHN0YXJJbnB1dC50eXBlID0gJ2hpZGRlbidcbiAgICAgICAgc3RhckxhYmVsLmlkID0gJ3N0YXItZm9ybSdcbiAgICAgICAgc3RhckxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuc3RhckZvcm0pO1xuXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbiA9IG1ha2VJY29uKCdjaGVja19jaXJjbGUnKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gbWFrZUljb24oJ2NhbmNlbCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVkaXRpbmcpIHtcbiAgICAgICAgICAgIGZvcm1IZWFkaW5nLmlubmVyVGV4dCA9ICdFZGl0IGEgVGFzaydcbiAgICAgICAgICAgIHRvZG9Gb3JtLmRhdGEgPSBzZWxlY3RlZFRvZG87XG4gICAgICAgICAgICB0b2RvRm9ybS5pZCA9ICdlZGl0LXRvZG8tZm9ybSc7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gc2VsZWN0ZWRUb2RvLm5hbWU7XG4gICAgICAgICAgICBkZXRhaWxJbnB1dC52YWx1ZSA9IHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbiA/IFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbiA6ICcnO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gc2VsZWN0ZWRUb2RvLmRhdGU7XG4gICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0Q29udHJvbC5tYWtlVG9kb0VkaXQpO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuY2FuY2VsRWRpdFRvZG9Gb3JtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcm1IZWFkaW5nLmlubmVyVGV4dCA9ICdBZGQgYSBUYXNrJ1xuICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wubWFrZU5ld1RvZG8pO1xuICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdENvbnRyb2wuY2FuY2VsVG9kb0Zvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmlkID0gJ2J1dHRvbi1mb3JtJ1xuICAgICAgICBpbnB1dENvbnRhaW5lci5pZCA9ICdpbnB1dC1jb250YWluZXInXG5cbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRpbmcpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRldGFpbExhYmVsKTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsSW5wdXQpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFyTGFiZWwpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChzdGFySW5wdXQpO1xuXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB0b2RvRm9ybTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYWRkVG9kb0J0biA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhZGRUb2RvLmlubmVyVGV4dCA9ICdBZGQgVGFzayAnO1xuICAgICAgICBhZGRUb2RvLmFwcGVuZENoaWxkKG1ha2VJY29uKCdhZGRfY2lyY2xlJykpO1xuICAgICAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFJlbmRlci5zaG93VG9kb0Zvcm0pO1xuICAgICAgICBhZGRUb2RvLmlkID0gJ2FkZC10YXNrJ1xuICAgICAgICByZXR1cm4gYWRkVG9kbztcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZFRvZG9CdG4sIHRvZG9Gb3JtLCB0b2RvTGlzdCwgaGVhZGluZywgbGlzdH07XG59KSgpXG5cblxuXG5jb25zdCBwcm9qZWN0UmVuZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RQYWdlID0gKCkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb250ZW50RGl2LmRhdGEgPSAncHJvamVjdC1wYWdlJztcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRlLmhlYWRpbmcoKSk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0NyZWF0ZS50b2RvRm9ybSgpKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0b2RvQ3JlYXRlLmFkZFRvZG9CdG4oKSk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodG9kb0NyZWF0ZS50b2RvTGlzdCgpKTtcbiAgICAgICAgdG9kb0NyZWF0ZS5saXN0KHRoaXNQcm9qZWN0KTtcblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuICAgICAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICAgICAgY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJyk7XG4gICAgICAgIHRvZG9Gb3JtLnN0eWxlLmRpc3BsYXkgIT0gJ2Jsb2NrJyA/IFxuICAgICAgICAgICAgdG9kb0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc6IG51bGw7XG4gICAgfVxuICAgIGNvbnN0IGhpZGVUb2RvRm9ybSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkVGFza0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuICAgICAgICBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgICAgIGNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZm9ybScpO1xuICAgICAgICB0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID09ICdibG9jaycgPyBcbiAgICAgICAgICAgICh0b2RvRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnLCBjbGVhclRvZG9Gb3JtKTogbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKTtcbiAgICAgICAgYWRkVGFza0RpdiAmJiBhZGRUYXNrRGl2LnN0eWxlLmRpc3BsYXkgIT0gJ2Jsb2NrJyA/IGFkZFRhc2tEaXYuc3R5bGUuZGlzcGxheSA9PSAnYmxvY2snIDogbnVsbDtcbiAgICAgICAgY29udGVudERpdi5kYXRhID09ICdwcm9qZWN0LXBhZ2UnID8gcHJvamVjdFBhZ2UodGhpc1Byb2plY3QpIDpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuZGF0YSA9PSAnYWxsLXRhc2tzJyA/IHRhc2tDb250cm9sLm1ha2VUYXNrc1BhZ2UoJ2FsbCcpIDpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuZGF0YSA9PSAnaW1wb3J0YW50JyA/IHRhc2tDb250cm9sLm1ha2VUYXNrc1BhZ2UoJ2ltcG9ydGFudCcpIDpcbiAgICAgICAgICAgIGNvbnRlbnREaXYuZGF0YSA9PSAndG9kYXknID8gdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSgndG9kYXknKSA6XG4gICAgICAgICAgICBjb250ZW50RGl2LmRhdGEgPT0gJ3dlZWsnID8gdGFza0NvbnRyb2wubWFrZVRhc2tzUGFnZSgnd2VlaycpIDogbnVsbDsgXG4gICAgICAgIH1cblxuICAgIGNvbnN0IGNsZWFyVG9kb0Zvcm0gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWlucHV0Jyk7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IGlucHV0LnZhbHVlID0gJycpXG4gICAgfTtcbiAgICBjb25zdCBjaGFuZ2VMaVRvRm9ybSA9IChzZWxlY3RlZFRvZG8sIHNlbGVjdGVkTGkpID0+IHtcbiAgICAgICAgc2VsZWN0ZWRMaS5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBzZWxlY3RlZExpLmFwcGVuZENoaWxkKHRvZG9DcmVhdGUudG9kb0Zvcm0odHJ1ZSwgc2VsZWN0ZWRUb2RvKSk7XG4gICAgfVxuICAgIHJldHVybiB7cHJvamVjdFBhZ2UsIHNob3dUb2RvRm9ybSwgaGlkZVRvZG9Gb3JtLCB1cGRhdGUsIGNsZWFyVG9kb0Zvcm0sXG4gICAgICAgIGNoYW5nZUxpVG9Gb3JtfTtcbn0pKClcblxuY29uc3QgcHJvamVjdENvbnRyb2wgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VQYWdlID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgc2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdFJlbmRlci5wcm9qZWN0UGFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldFByb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICB0aGlzUHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgY29uc3QgbWFrZU5ld1RvZG8gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0b2RvSW5mbyA9IGdldFRvZG9JbmZvKGUpO1xuICAgICAgICBsZXQgbmV3VG9kbyA9IGNyZWF0ZVRvZG8odG9kb0luZm9bMF0sIHRvZG9JbmZvWzFdLCB0b2RvSW5mb1syXSwgdG9kb0luZm9bM10pO1xuICAgICAgICB0aGlzUHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnNob3dUb2RvRm9ybSgpO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldFRvZG9JbmZvID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbLi4uZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRdXG4gICAgICAgIGNvbnN0IG5hbWUgPSB2YWx1ZXNbMF0udmFsdWUgPT0gJycgPyAndW5uYW1lZCB0YXNrJyA6IHZhbHVlc1swXS52YWx1ZVxuICAgICAgICBjb25zdCBkZXRhaWxzID0gdmFsdWVzWzJdLnZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gdmFsdWVzWzFdLnZhbHVlO1xuICAgICAgICBjb25zdCBpbXBvcnRhbnQgPSAodmFsdWVzWzNdLnByZXZpb3VzU2libGluZy5cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzWzBdLmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50JykpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gW25hbWUsIGRldGFpbHMsIGRhdGUsIGltcG9ydGFudF07XG4gICAgfVxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAobmFtZSwgZGVzY3JpcHRpb24sIGRhdGUsIGltcG9ydGFudCkgPT4ge1xuICAgICAgICBuYW1lID09ICcnID8gbmFtZSA9ICd1bm5hbWVkIHRhc2snIDogbnVsbDtcbiAgICAgICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lLCBkZXNjcmlwdGlvbiwgZGF0ZSwgaW1wb3J0YW50KTtcbiAgICAgICAgcmV0dXJuIG5ld1RvZG87XG4gICAgfVxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoZSkgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGEgLSAxO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZS50YXJnZXQuZGF0YTtcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKGluZGV4KTtcbiAgICAgICAgcHJvamVjdFJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsVG9kb0Zvcm0gPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHByb2plY3RSZW5kZXIuaGlkZVRvZG9Gb3JtKCk7XG4gICAgICAgIHByb2plY3RSZW5kZXIuY2xlYXJUb2RvRm9ybSgpO1xuICAgIH1cbiAgICBjb25zdCBlZGl0VG9kbyA9IChlKSA9PiB7XG4gICAgICAgIGxldCBzZWxMaSA9IGZpbmRTZWxlY3RlZExpKGUpO1xuICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvID0gc2VsTGkuZGF0YTtcbiAgICAgICAgcHJvamVjdFJlbmRlci5jaGFuZ2VMaVRvRm9ybShzZWxlY3RlZFRvZG8sIHNlbExpKTtcbiAgICB9XG4gICAgY29uc3QgZmluZFNlbGVjdGVkTGkgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgaWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGE7XG4gICAgICAgIGxldCBzZWxlY3RlZExpID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWRMaTtcbiAgICB9XG4gICAgY29uc3QgY2FuY2VsRWRpdFRvZG9Gb3JtID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBtYWtlVG9kb0VkaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVG9kbyA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmRhdGE7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBnZXRUb2RvSW5mbyhlKTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLm5hbWUgPSB2YWx1ZXNbMF07XG4gICAgICAgIHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbiA9IHZhbHVlc1sxXTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmRhdGUgPSB2YWx1ZXNbMl07XG4gICAgICAgIHNlbGVjdGVkVG9kby5pbXBvcnRhbnQgPSB2YWx1ZXNbM107XG4gICAgICAgIHByb2plY3RSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJDbGljayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG8gPSBlLnRhcmdldC5kYXRhO1xuICAgICAgICB0b2RvLmltcG9ydGFudCA/IFxuICAgICAgICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2ltcG9ydGFudCcpLFxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICdncmFkZScsXG4gICAgICAgICAgICAgICAgdG9kby5pbXBvcnRhbnQgPSBmYWxzZSkgOlxuICAgICAgICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ltcG9ydGFudCcpLFxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICdzdGFyJyxcbiAgICAgICAgICAgICAgICB0b2RvLmltcG9ydGFudCA9IHRydWUpO1xuICAgICAgICBwcm9qZWN0UmVuZGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvID0gZS50YXJnZXQuZGF0YTtcbiAgICAgICAgdG9kby5jb21wbGV0ZSA/IHRvZG8uY29tcGxldGUgPSBmYWxzZTogdG9kby5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIHByb2plY3RSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJGb3JtID0gKGUpID0+IHtcbiAgICAgICAgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaW1wb3J0YW50JykpID9cbiAgICAgICAgICAgIChlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdpbXBvcnRhbnQnKSxcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICdncmFkZScpIDpcbiAgICAgICAgICAgIChlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdpbXBvcnRhbnQnKSxcbiAgICAgICAgICAgIGUudGFyZ2V0LmlubmVyVGV4dCA9ICdzdGFyJylcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHttYWtlTmV3VG9kbywgc2V0UHJvamVjdCwgbWFrZVBhZ2UsIGNhbmNlbFRvZG9Gb3JtLCBlZGl0VG9kbywgXG4gICAgICAgICAgICBjYW5jZWxFZGl0VG9kb0Zvcm0sIG1ha2VUb2RvRWRpdCwgcmVtb3ZlVG9kbywgc3RhckNsaWNrLCBjaGFuZ2VTdGF0dXMsIHN0YXJGb3JtfTtcblxufSkoKVxuXG5leHBvcnQge3Byb2plY3RDb250cm9sLCB0b2RvQ3JlYXRlfTsiLCJpbXBvcnQgeyB0b2RvTGlzdHMgfSBmcm9tIFwiLi9jbGFzc2VzXCI7XG5pbXBvcnQge2FsbFByb2pDb250cm9sfSBmcm9tIFwiLi9hbGxQcm9qZWN0c1wiO1xuaW1wb3J0IHsgdG9kb0NyZWF0ZSB9IGZyb20gXCIuL3Byb2plY3RQYWdlXCI7XG5cbmNvbnN0IHRhc2tDb250cm9sID0gKCgpID0+IHtcbiAgICBjb25zdCBtYWtlVGFza3NQYWdlID0gKHR5cGUpID0+IHtcbiAgICAgICAgbGV0IGZpbHRlciA9IHR5cGU7XG4gICAgICAgIC8vaW5zZXJ0IHRoZSBjb3JyZWN0IGNvbnRlbnQgaW4gdGhlIHVsXG4gICAgICAgIGlmICh0eXBlID09ICdhbGwnKSB7XG4gICAgICAgICAgICByZW5kZXIudGFza3NQYWdlKCdhbGwtdGFza3MnLCAnQWxsIFRhc2tzJyk7XG4gICAgICAgICAgICBjb25zdCB1bFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0LXVsJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9qIG9mIHRvZG9MaXN0cy5wcm9qZWN0cykge1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGUubGlzdChwcm9qKTsgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWxUYXNrLmlubmVySFRNTCA9PSAnJyA/IHJlbmRlci5lbXB0eUxpc3QoJycpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnaW1wb3J0YW50Jykge1xuICAgICAgICAgICAgICAgIHJlbmRlci50YXNrc1BhZ2UoJ2ltcG9ydGFudCcsICdJbXBvcnRhbnQgVGFza3MnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1bFRhc2sgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC11bCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgdG9kb0xpc3RzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DcmVhdGUubGlzdChwcm9qLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWxUYXNrLmlubmVySFRNTCA9PSAnJyA/IHJlbmRlci5lbXB0eUxpc3QoJ2ltcG9ydGFudCcpIDogbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSAnd2VlaycpIHtcbiAgICAgICAgICAgICAgICByZW5kZXIudGFza3NQYWdlKCd3ZWVrJywgJ1Rhc2tzIER1ZSBUaGlzIFdlZWsnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1bFRhc2sgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC11bCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgdG9kb0xpc3RzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DcmVhdGUubGlzdChwcm9qLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWxUYXNrLmlubmVySFRNTCA9PSAnJyA/IHJlbmRlci5lbXB0eUxpc3QoJyBkdWUgdGhpcyB3ZWVrJykgOiBudWxsO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09ICd0b2RheScpIHtcbiAgICAgICAgICAgICAgICByZW5kZXIudGFza3NQYWdlKCd0b2RheScsICdUYXNrcyBEdWUgVG9kYXknKTtcbiAgICAgICAgICAgICAgICBjb25zdCB1bFRhc2sgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tbGlzdC11bCcpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb2ogb2YgdG9kb0xpc3RzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9DcmVhdGUubGlzdChwcm9qLCBmaWx0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdWxUYXNrLmlubmVySFRNTCA9PSAnJyA/IHJlbmRlci5lbXB0eUxpc3QoJyBkdWUgdG9kYXknKSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlID09ICdwcm9qZWN0cycpIHtcbiAgICAgICAgICAgICAgICBhbGxQcm9qQ29udHJvbC5tYWtlUGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICByZXR1cm4ge21ha2VUYXNrc1BhZ2V9O1xufSkoKVxuXG5cbmNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGluZyA9IChoZWFkaW5nVGV4dCkgPT4geyBcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkLmlubmVyVGV4dCA9IGhlYWRpbmdUZXh0O1xuICAgIHJldHVybiBoZWFkO1xuICAgIH1cbiAgICBjb25zdCB1bCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB1bC5jbGFzc0xpc3QuYWRkKCd0YXNrLXVsJyk7XG4gICAgICAgIHVsLmlkID0gJ3RvZG8tbGlzdC11bCc7XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9XG4gICAgY29uc3QgZW1wdHlMaXN0ID0gKHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCBlbXB0eVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGVtcHR5VGV4dC5jbGFzc0xpc3QuYWRkKCdlbXB0eScpO1xuICAgICAgICBlbXB0eVRleHQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZW1wdHlUZXh0LmlubmVyVGV4dCA9IHN0cmluZyAhPSAnaW1wb3J0YW50JyA/IFxuICAgICAgICAgICAgYFRoZXJlIGFyZSBubyB0YXNrcyR7c3RyaW5nfS5gOlxuICAgICAgICAgICAgYFRoZXJlIGFyZSBubyAke3N0cmluZ30gdGFza3MuYDtcbiAgICAgICAgcmV0dXJuIGVtcHR5VGV4dDtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtoZWFkaW5nLCB1bCwgZW1wdHlMaXN0fTtcbn0pKClcblxuY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xuICAgIGNvbnN0IHRhc2tzUGFnZSA9IChkYXRhVHlwZSwgaGVhZGluZ1RleHQpID0+IHtcbiAgICAgICAgY29udGVudERpdi5kYXRhID0gZGF0YVR5cGVcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJ1xuICAgICAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZS5oZWFkaW5nKGhlYWRpbmdUZXh0KSk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlLnVsKCkpO1xuICAgIH1cbiAgICBjb25zdCBlbXB0eUxpc3QgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHVsVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWxpc3QtdWwnKTtcbiAgICAgICAgdWxUYXNrLmFwcGVuZENoaWxkKGNyZWF0ZS5lbXB0eUxpc3Qoc3RyaW5nKSk7XG4gICAgfVxuICAgIHJldHVybiB7dGFza3NQYWdlLCBlbXB0eUxpc3R9O1xufSkoKVxuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ29udHJvbDsiLCJpbXBvcnQge1RvRG9MaXN0LCBQcm9qZWN0LCBUb2RvLCB0b2RvTGlzdHN9IGZyb20gJy4vY2xhc3Nlcyc7XG5pbXBvcnQge2NvbnRlbnRDb250cm9sbGVyfSBmcm9tICcuJztcbmltcG9ydCB7IGFsbFByb2pSZW5kZXIgfSBmcm9tICcuL2FsbFByb2plY3RzJztcblxuY29uc3Qgc2lkZUZ1bmMgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSAobmFtZSkgPT4ge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG4gICAgY29uc3QgZ2V0SW5wdXROYW1lID0gKGUpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgbmV3IHByb2plY3QgaXMgYWRkZWQgZnJvbSBzaWRlIG5hdiBvciBwcm9qZWN0cyBwYWdlXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQuaWQgPT0gJ2FkZC1idXR0b24nID8gXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lLWlucHV0Jyk6XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxsLXByb2otbmFtZS1pbnB1dCcpO1xuICAgICAgICBjb25zdCBuYW1lID0gaW5wdXQudmFsdWUgPT0gJycgPyAndW5uYW1lZCBwcm9qZWN0JyA6IGlucHV0LnZhbHVlO1xuICAgICAgICByZXR1cm4gbmFtZTtcbiAgICB9XG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChlKSA9PiB7XG4gICAgICAgIHJldHVybiBlLnRhcmdldC5kYXRhO1xuICAgIH1cbiAgICBjb25zdCBnZXRUYXNrVHlwZSA9IChlKSA9PiB7XG4gICAgICAgIHJldHVybiBlLnRhcmdldC5hdHRyaWJ1dGVzWzBdLm5vZGVWYWx1ZTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0LCBnZXRJbnB1dE5hbWUsIGdldFByb2plY3QsIGdldFRhc2tUeXBlfTtcbn0pKClcblxuY29uc3Qgc2lkZUNvbnRyb2wgPSAoKCkgPT4ge1xuICAgIGNvbnN0IG1ha2VOZXdQcm9qZWN0ID0gKGUpID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHNpZGVGdW5jLmdldElucHV0TmFtZShlKTtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBzaWRlRnVuYy5jcmVhdGVQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0b2RvTGlzdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgICAgc2lkZVJlbmRlci5oaWRlUHJvamVjdElucHV0KCk7XG4gICAgICAgIHNpZGVSZW5kZXIudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRvZG9MaXN0cy5maW5kSW5kZXgocHJvamVjdCk7XG4gICAgICAgIHRvZG9MaXN0cy5yZW1vdmVQcm9qZWN0KGluZGV4KTtcbiAgICAgICAgc2lkZVJlbmRlci51cGRhdGUoKTtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0VGFzayA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tUeXBlID0gc2lkZUZ1bmMuZ2V0VGFza1R5cGUoZSk7XG4gICAgICAgIGNvbnRlbnRDb250cm9sbGVyLmdvVG9UYXNrcyh0YXNrVHlwZSk7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2xpY2tlZCA9IHNpZGVGdW5jLmdldFByb2plY3QoZSk7XG4gICAgICAgIGNvbnRlbnRDb250cm9sbGVyLmdvVG9Qcm9qZWN0UGFnZShwcm9qZWN0Q2xpY2tlZCk7XG4gICAgfVxuICAgIGNvbnN0IGNhbmNlbFByb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgc2lkZVJlbmRlci5jbGVhcklucHV0KCk7XG4gICAgICAgIHNpZGVSZW5kZXIuaGlkZVByb2plY3RJbnB1dCgpO1xuICAgIH1cblxuICAgIHJldHVybiB7bWFrZU5ld1Byb2plY3QsIHJlbW92ZVByb2plY3QsIHNlbGVjdFByb2plY3QsIGNhbmNlbFByb2plY3RJbnB1dCxcbiAgICAgICAgc2VsZWN0VGFza307XG59KSgpXG5cbmNvbnN0IHNpZGVSZW5kZXIgPSAoKCkgPT4ge1xuICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tY29udGVudCcpO1xuICAgIGxldCBwcm9qZWN0VWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUtaW5wdXQnKTtcbiAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIHNpZGViYXIoKTtcbiAgICAgICAgY29udGVudERpdi5kYXRhID09ICdhbGwtcHJvamVjdHMnID8gYWxsUHJvalJlbmRlci51cGRhdGUoKTogbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzaWRlYmFyID0gKCkgPT4ge1xuICAgICAgICB0b2RvTGlzdHMucHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IFxuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lLmxlbmd0aCA8IDI5ID8gcHJvamVjdC5uYW1lOiBcbiAgICAgICAgICAgIGAke3Byb2plY3QubmFtZS5zbGljZSgwLDI4KX0uLi5gO1xuICAgICAgICAgICAgbGkuZGF0YSA9IHByb2plY3Q7XG4gICAgICAgICAgICBwcm9qZWN0VWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgcHJvamVjdFVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjbGVhcklucHV0KClcbiAgICB9XG4gICAgY29uc3QgY2xlYXJJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgY29uc3Qgc2hvd1Byb2plY3RJbnB1dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgaW5wdXREaXYuc3R5bGUuZGlzcGxheSAhPSAnYmxvY2snID8gaW5wdXREaXYuc3R5bGUuZGlzcGxheSA9ICdibG9jayc6XG4gICAgICAgICAgICBudWxsXG4gICAgfVxuICAgIGNvbnN0IGhpZGVQcm9qZWN0SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0LWlucHV0Jyk7XG4gICAgICAgIGlucHV0RGl2LnN0eWxlLmRpc3BsYXkgPT0gJ2Jsb2NrJyA/IGlucHV0RGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc6XG4gICAgICAgICAgICBudWxsXG4gICAgfVxuICAgIHJldHVybiB7dXBkYXRlLCBzaG93UHJvamVjdElucHV0LCBoaWRlUHJvamVjdElucHV0LCBjbGVhcklucHV0fTtcbn0pKCk7XG5cbmNvbnN0IGV2ZW50TGlzdGVuZXJzID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC1wcm9qZWN0Jyk7XG4gICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGVSZW5kZXIuc2hvd1Byb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJ1dHRvbicpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtYnV0dG9uJyk7XG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2lkZUNvbnRyb2wubWFrZU5ld1Byb2plY3QpO1xuICAgIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGVDb250cm9sLmNhbmNlbFByb2plY3RJbnB1dCk7XG5cbiAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XG4gICAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNpZGVDb250cm9sLnNlbGVjdFByb2plY3QpO1xuXG4gICAgY29uc3QgdGFza1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLXZpZXcnKVxuICAgIHRhc2tTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaWRlQ29udHJvbC5zZWxlY3RUYXNrKVxufSkoKTtcblxuc2lkZVJlbmRlci51cGRhdGUoKVxuLy8gc3RhcnQgd2l0aCBhbGwgcHJvamVjdHMgcGFnZVxuYWxsUHJvalJlbmRlci5wYWdlKCk7XG5cbmV4cG9ydCB7c2lkZVJlbmRlciwgc2lkZUNvbnRyb2wsIHNpZGVGdW5jfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==