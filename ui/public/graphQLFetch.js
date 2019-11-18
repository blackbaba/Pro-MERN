"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = graphQLFetch;
var dateRegex = new RegExp("^\\d\\d\\d\\d-\\d\\d-\\d\\d");

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

function graphQLFetch(query) {
  var variables,
      response,
      body,
      result,
      error,
      details,
      _args = arguments;
  return regeneratorRuntime.async(function graphQLFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(fetch("http://localhost:3000/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              query: query,
              variables: variables
            })
          }));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(response.text());

        case 7:
          body = _context.sent;
          result = JSON.parse(body, jsonDateReviver);

          if (result.errors) {
            error = result.errors[0];

            if (error.extensions.code == "BAD_USER_INPUT") {
              details = error.extensions.exception.errors.join("\n ");
              alert("".concat(error.message, ":\n ").concat(details));
            } else {
              alert("".concat(error.extensions.code, ": ").concat(error.message));
            }
          }

          return _context.abrupt("return", result.data);

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](1);
          alert("Error in sending data to server: ".concat(_context.t0.message));

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 13]]);
}