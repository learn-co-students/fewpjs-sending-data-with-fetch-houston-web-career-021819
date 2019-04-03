const testVar = {};

function testFunc() {
  return "hi";
}

function registerSelf(firstName, registryMessage) {
  return fetch("http://guestbook.example.com/register", {
    method: "POST",
    body: {
      firstName: firstName,
      registryMessage: registryMessage
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.message;
    });
}

function errorSelf(firstName, registryMessage) {
  return fetch("http://guestbook.example.com/register-error", {
    method: "POST",
    body: {
      firstName: firstName,
      registryMessage: registryMessage
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return json.message;
    })
    .catch(function(error) {
      alert("You've yee'd your last haw.");
      return ":(";
    });
}
