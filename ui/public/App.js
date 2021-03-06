"use strict";

var _graphQLFetch = _interopRequireDefault(require("./graphQLFetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IssueList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IssueList, _React$Component);

  function IssueList() {
    var _this;

    _classCallCheck(this, IssueList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IssueList).call(this));
    _this.state = {
      issues: []
    };
    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IssueList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadData",
    value: function loadData() {
      var query, data;
      return regeneratorRuntime.async(function loadData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = " query {\n      issueList {id title status owner created effort due}\n    }";
              _context.next = 3;
              return regeneratorRuntime.awrap((0, _graphQLFetch.default)(query));

            case 3:
              data = _context.sent;

              if (data) {
                this.setState({
                  issues: data.issueList
                });
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createIssue",
    value: function createIssue(issue) {
      var query, data;
      return regeneratorRuntime.async(function createIssue$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              query = "mutation {\n     issueAdd(issue:{\n      title: \"".concat(issue.title, "\",\n      owner: \"").concat(issue.owner, "\",\n      due: \"").concat(issue.due.toISOString(), "\",\n      }) {\n      id\n      }\n      }");
              _context2.next = 3;
              return regeneratorRuntime.awrap((0, _graphQLFetch.default)(query, {
                issue: issue
              }));

            case 3:
              data = _context2.sent;

              if (data) {
                this.loadData();
              }

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement("h1", null, "Issue Tracker"), React.createElement(IssueFilter, null), React.createElement("hr", null), React.createElement(IssueTable, {
        issues: this.state.issues
      }), React.createElement("hr", null), React.createElement(IssueAdd, {
        createIssue: this.createIssue
      }));
    }
  }]);

  return IssueList;
}(React.Component);

var IssueFilter =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(IssueFilter, _React$Component2);

  function IssueFilter() {
    _classCallCheck(this, IssueFilter);

    return _possibleConstructorReturn(this, _getPrototypeOf(IssueFilter).apply(this, arguments));
  }

  _createClass(IssueFilter, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null, "Placeholder for Filters");
    }
  }]);

  return IssueFilter;
}(React.Component);

function IssueTable(props) {
  var issueRows = props.issues.map(function (issue) {
    return React.createElement(IssueRow, {
      key: issue.id,
      issue: issue
    });
  });
  return React.createElement("table", {
    className: "bordered-table"
  }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "ID"), React.createElement("th", null, "Status"), React.createElement("th", null, "Owner"), React.createElement("th", null, "Created"), React.createElement("th", null, "Effort"), React.createElement("th", null, "Due Date"), React.createElement("th", null, "Title"))), React.createElement("tbody", null, issueRows));
}

function IssueRow(props) {
  var issue = props.issue;
  return React.createElement("tr", null, React.createElement("td", null, issue.id), React.createElement("td", null, issue.status), React.createElement("td", null, issue.owner), React.createElement("td", null, issue.created.toDateString()), React.createElement("td", null, issue.effort), React.createElement("td", null, issue.due ? issue.due.toDateString() : ""), React.createElement("td", null, issue.title));
}

var IssueAdd =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(IssueAdd, _React$Component3);

  function IssueAdd() {
    var _this2;

    _classCallCheck(this, IssueAdd);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(IssueAdd).call(this));
    _this2.handleSubmit = _this2.handleSubmit.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(IssueAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.issueAdd;
      var issue = {
        owner: form.owner.value,
        title: form.title.value,
        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)
      };
      this.props.createIssue(issue);
      form.owner.value = "";
      form.title.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("form", {
        name: "issueAdd",
        onSubmit: this.handleSubmit
      }, React.createElement("input", {
        type: "text",
        name: "owner",
        placeholder: "Owner"
      }), React.createElement("input", {
        type: "text",
        name: "title",
        placeholder: "Title"
      }), React.createElement("button", null, "Add"));
    }
  }]);

  return IssueAdd;
}(React.Component);

var element = React.createElement(IssueList, null);
ReactDOM.render(element, document.getElementById("contents"));