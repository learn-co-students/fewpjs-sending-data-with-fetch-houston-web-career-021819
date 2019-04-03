const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
      method: "POST",
      body: {
        "firstName": "Jo",
        "registryMessage": "Congrats!"
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (content) {
      return content.message
    })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
      method: "POST",
      body: {
        "firstName": "Jo",
        "registryMessage": "Congrats!"
      }
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (content) {
      return content.message
    })
    .catch(function (error) {
      alert("Error");
      return ":(";
    })
}