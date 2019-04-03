const testVar = {}

function testFunc() {
  return "hi"
}

let formData = JSON.stringify({
  "firstName": "Mark",
  "registryMessage": "Test registry message"
})

let configObj = {
  method: "POST",
  headers: { 'Content-Type': 'application/json' },
  body: formData
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', configObj)
    .then(function (res) {
      return res.json()
    })
    .then(function (returnedData) {
      console.log(returnedData)
      return returnedData.message
    })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', configObj)
    .then(function (res) {
      return res.json()
    })
    .then(function (returnedData) {
      console.log(returnedData)
      return returnedData.message
    })
    .catch(function (error) {
      return ":("
    })
}