import { WSASERVICE_NOT_FOUND } from "constants";

const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf(){
  return fetch("http://guestbook.example.com/register",{
    method: "POST",
    body: JSON.stringify( {
      name: "Zoe",
      message: "You have been added to the guest book"
    })
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    return data.message
  }) 
  
} 

function errorSelf(){
  return fetch("http://guestbook.example.com/register")
  .then(function(response){
    return response.json()
  })
  .then(function(data){
   if(response == "OK"){
    console.log("OK")
   }
  })
  .catch(function(error){
   return ":("
  })

}

