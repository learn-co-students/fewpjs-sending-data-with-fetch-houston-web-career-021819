const testVar = {}

function testFunc() {
  return "hi"
}
function registerSelf(){
  return fetch('http://guestbook.example.com/register',{
    'method':'POST',
    'body': {
    'firstName':'Jessica', 
    'registryMessage':'You have been added to the guest book'}
  })
  .then(function(res){
    return res.json();
  }).then(function(stuff) {
    return stuff.message})
}

function errorSelf(){
  return fetch('http://guestbook.example.com/register-error',{
    'method':'POST',
    'body': {
    'firstName':'Jessica', 
    'registryMessage':'You have been added to the guest book'}
  })
  .then(function(res){
    return res.json();
  }).then(function(stuff) {

    return stuff.message})
    .catch(function(error){
      alert("you've yeed yer last haw")
      return ':('
  
    })
}
