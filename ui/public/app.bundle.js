/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _graphQLFetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphQLFetch */ \"./src/graphQLFetch.js\");\n// React Application\n\nvar element = React.createElement(IssueList, null);\nReactDOM.render(element, document.getElementById(\"contents\"));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\nvar dateRegex = new RegExp(\"^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d\");\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nfunction graphQLFetch(query) {\n  var variables,\n      response,\n      body,\n      result,\n      error,\n      details,\n      _args = arguments;\n  return regeneratorRuntime.async(function graphQLFetch$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n          _context.prev = 1;\n          _context.next = 4;\n          return regeneratorRuntime.awrap(fetch(\"http://localhost:3000/graphql\", {\n            method: \"POST\",\n            headers: {\n              \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              query: query,\n              variables: variables\n            })\n          }));\n\n        case 4:\n          response = _context.sent;\n          _context.next = 7;\n          return regeneratorRuntime.awrap(response.text());\n\n        case 7:\n          body = _context.sent;\n          result = JSON.parse(body, jsonDateReviver);\n\n          if (result.errors) {\n            error = result.errors[0];\n\n            if (error.extensions.code == \"BAD_USER_INPUT\") {\n              details = error.extensions.exception.errors.join(\"\\n \");\n              alert(\"\".concat(error.message, \":\\n \").concat(details));\n            } else {\n              alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n            }\n          }\n\n          return _context.abrupt(\"return\", result.data);\n\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](1);\n          alert(\"Error in sending data to server: \".concat(_context.t0.message));\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[1, 13]]);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ })

/******/ });