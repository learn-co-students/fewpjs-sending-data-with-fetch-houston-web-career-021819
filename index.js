const testVar = {}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "firstName": "Bobby",
      "message": "I am Bobby"
    })
  })
    .then(function(res){
      return res.json()
    })
    .then(function(string){
      return string.message
    })
}


function errorSelf() {
  return fetch('http://guestbook.example.com/register-error',{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      "firstName": "Thanos",
      "message": "bout to get clapped"
    })
  })
    .then(function(res){
      return res.json()
    })
    .then(function(string){
      return string.message
    })
    .catch(function(errpr){
      alert("this is a bad request");
      return (":(")
    })  
}
