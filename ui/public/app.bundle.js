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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n// React Application\nvar dateRegex = new RegExp(\"^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d\");\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nfunction graphQLFetch(query) {\n  var variables,\n      response,\n      body,\n      result,\n      error,\n      details,\n      _args = arguments;\n  return regeneratorRuntime.async(function graphQLFetch$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n          _context.prev = 1;\n          _context.next = 4;\n          return regeneratorRuntime.awrap(fetch(\"http://localhost:3000/graphql\", {\n            method: \"POST\",\n            headers: {\n              \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n              query: query,\n              variables: variables\n            })\n          }));\n\n        case 4:\n          response = _context.sent;\n          _context.next = 7;\n          return regeneratorRuntime.awrap(response.text());\n\n        case 7:\n          body = _context.sent;\n          result = JSON.parse(body, jsonDateReviver);\n\n          if (result.errors) {\n            error = result.errors[0];\n\n            if (error.extensions.code == \"BAD_USER_INPUT\") {\n              details = error.extensions.exception.errors.join(\"\\n \");\n              alert(\"\".concat(error.message, \":\\n \").concat(details));\n            } else {\n              alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n            }\n          }\n\n          return _context.abrupt(\"return\", result.data);\n\n        case 13:\n          _context.prev = 13;\n          _context.t0 = _context[\"catch\"](1);\n          alert(\"Error in sending data to server: \".concat(_context.t0.message));\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, null, null, [[1, 13]]);\n}\n\nvar IssueList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(IssueList, _React$Component);\n\n  function IssueList() {\n    var _this;\n\n    _classCallCheck(this, IssueList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));\n    _this.state = {\n      issues: []\n    };\n    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function loadData() {\n      var query, data;\n      return regeneratorRuntime.async(function loadData$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \" query {\\n      issueList {id title status owner created effort due}\\n    }\";\n              _context2.next = 3;\n              return regeneratorRuntime.awrap(graphQLFetch(query));\n\n            case 3:\n              data = _context2.sent;\n\n              if (data) {\n                this.setState({\n                  issues: data.issueList\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"createIssue\",\n    value: function createIssue(issue) {\n      var query, data;\n      return regeneratorRuntime.async(function createIssue$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              query = \"mutation {\\n     issueAdd(issue:{\\n      title: \\\"\".concat(issue.title, \"\\\",\\n      owner: \\\"\").concat(issue.owner, \"\\\",\\n      due: \\\"\").concat(issue.due.toISOString(), \"\\\",\\n      }) {\\n      id\\n      }\\n      }\");\n              _context3.next = 3;\n              return regeneratorRuntime.awrap(graphQLFetch(query, {\n                issue: issue\n              }));\n\n            case 3:\n              data = _context3.sent;\n\n              if (data) {\n                this.loadData();\n              }\n\n            case 5:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, null, this);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(React.Fragment, null, React.createElement(\"h1\", null, \"Issue Tracker\"), React.createElement(IssueFilter, null), React.createElement(\"hr\", null), React.createElement(IssueTable, {\n        issues: this.state.issues\n      }), React.createElement(\"hr\", null), React.createElement(IssueAdd, {\n        createIssue: this.createIssue\n      }));\n    }\n  }]);\n\n  return IssueList;\n}(React.Component);\n\nvar IssueFilter =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(IssueFilter, _React$Component2);\n\n  function IssueFilter() {\n    _classCallCheck(this, IssueFilter);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));\n  }\n\n  _createClass(IssueFilter, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, \"Placeholder for Filters\");\n    }\n  }]);\n\n  return IssueFilter;\n}(React.Component);\n\nfunction IssueTable(props) {\n  var issueRows = props.issues.map(function (issue) {\n    return React.createElement(IssueRow, {\n      key: issue.id,\n      issue: issue\n    });\n  });\n  return React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, React.createElement(\"thead\", null, React.createElement(\"tr\", null, React.createElement(\"th\", null, \"ID\"), React.createElement(\"th\", null, \"Status\"), React.createElement(\"th\", null, \"Owner\"), React.createElement(\"th\", null, \"Created\"), React.createElement(\"th\", null, \"Effort\"), React.createElement(\"th\", null, \"Due Date\"), React.createElement(\"th\", null, \"Title\"))), React.createElement(\"tbody\", null, issueRows));\n}\n\nfunction IssueRow(props) {\n  var issue = props.issue;\n  return React.createElement(\"tr\", null, React.createElement(\"td\", null, issue.id), React.createElement(\"td\", null, issue.status), React.createElement(\"td\", null, issue.owner), React.createElement(\"td\", null, issue.created.toDateString()), React.createElement(\"td\", null, issue.effort), React.createElement(\"td\", null, issue.due ? issue.due.toDateString() : \"\"), React.createElement(\"td\", null, issue.title));\n}\n\nvar IssueAdd =\n/*#__PURE__*/\nfunction (_React$Component3) {\n  _inherits(IssueAdd, _React$Component3);\n\n  function IssueAdd() {\n    var _this2;\n\n    _classCallCheck(this, IssueAdd);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));\n    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(IssueAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.issueAdd;\n      var issue = {\n        owner: form.owner.value,\n        title: form.title.value,\n        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n      };\n      this.props.createIssue(issue);\n      form.owner.value = \"\";\n      form.title.value = \"\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"form\", {\n        name: \"issueAdd\",\n        onSubmit: this.handleSubmit\n      }, React.createElement(\"input\", {\n        type: \"text\",\n        name: \"owner\",\n        placeholder: \"Owner\"\n      }), React.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        placeholder: \"Title\"\n      }), React.createElement(\"button\", null, \"Add\"));\n    }\n  }]);\n\n  return IssueAdd;\n}(React.Component);\n\nvar element = React.createElement(IssueList, null);\nReactDOM.render(element, document.getElementById(\"contents\"));\n\n//# sourceURL=webpack:///./public/App.js?");

/***/ })

/******/ });