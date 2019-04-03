const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: {
      firstName: 'Trey',
      registryMessage: "You've been addedto the guest book"
    }
  })
  .then(function(response){
    return response.json();
  })
  .then (function(registryMessage){
    return registryMessage.message
  })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: {
      firstName: 'Trey',
      registryMessage: "You've been addedto the guest book"
    }
  })
  .then(function(response){
    return response.json();
  })
  .then (function(registryMessage){
    return registryMessage.message
  })
  .catch(function(error){
    alert("Error");
    return ":("
 
  })
}