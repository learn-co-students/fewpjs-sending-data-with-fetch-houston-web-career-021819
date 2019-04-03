function registerSelf(){
  const testVar = 'http://guestbook.example.com/register'
  return fetch(testVar, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      "firstName": "Rochell",
      "registryMessage": "I sent a message"
    })
  })
    .then(function(response) {
      return response.json()
    })
    .then(function(returnedMessage){
      console.log(returnedMessage)
      return returnedMessage.message
    })
  }

  function errorSelf() {
    return fetch("http://guestbook.example.com/register-error", {
  "method": "POST",
    "body": {
      "firstName": "Byron the Poodle",
      "registryMessage": "Bite!"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(x) {
    // console.log(x) // If you want to see the error message that came in
    return ":(";
  });
}