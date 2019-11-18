let aboutMessage = "Issue Tracker API v1.0";

function setMessage(_, { Message }) {
  return aboutMessage = message;
}

function getMessage() {
  return aboutMessage;
}

module.exports = { getMessage, setMessage };
