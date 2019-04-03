const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(){
  let formData = {
    "firstName": "Jing",
    "registryMessage": "You have been added to the guest book"
  };

  let configObj = {
    method: "POST",
    body:formData
  };
//in order to get the result of this function, we need to add return before the function  
  return fetch("http://guestbook.example.com/register", configObj)
    .then (function(response){
      return response.json();
    })
    .then(function(content){
      return content["message"]
    })
}


function errorSelf(){
  let formData = {
    "firstName": "Jing",
    "registryMessage": "You have been added to the guest book"
  };

  let configObj = {
    method: "POST",
    body: formData
  };
  //in order to get the result of this function, we need to add return before the function  
  return fetch("http://guestbook.example.com/register-error", configObj)
    .then(function (response) {
      return response.json();
    })
    .then(function (content) {
      return content["message"]
    })
    .catch(function(error){
      return ":("
    })
}
