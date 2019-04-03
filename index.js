const testVar = {}

function testFunc() {
  return "hi"
}

const firstName = 'Adam'
const registryMessage = 'I did it!'
function registerSelf(firstName) {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: firstName,
      message: registryMessage
    })
  })
  .then(res => res.json())
  .then(res => res.message)
}

function errorSelf(firstName) {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: firstName,
      message: registryMessage
    })
  })
  .then(res => res.json())
  .then(res => res.message)
  .catch(error => ":(")
}
