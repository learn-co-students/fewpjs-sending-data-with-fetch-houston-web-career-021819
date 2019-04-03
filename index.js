const testVar = {}
const url = "http://guestbook.example.com/register"
const url2 = "http://guestbook.example.com/register-error"




function registerSelf() {
    return fetch(url, {
        method: "POST",
        header: {"content-type": "application/json"},
        body: JSON.stringify({
            "firstName" : "Jack",
            message : "You have been added to the guestbook",
        }),
    })
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            return data.message
       })
}

function errorSelf() {
    return fetch(url2, {
        method: "POST",
        header: {"content-type": "application/json"},
        body: JSON.stringify({
            "firstName" : "Jack",
            registyMessage : "Swagger",
        }),
    })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            return data.registryMessage
        })
        .catch(function(error){
            return ":("
        })

}

/*

function registerSelf(name, message) {
    fetch(url, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
            [name] : message,
        }),
    })
        .then(function(res){
            return res.json();
        })
        .then(function(data) {
            console.log(data);
        })
}



fetch(url, {
    method: "POST",
    headers: {"content-type": "application/json"},
    body: JSON.stringify({
        "message":
    })
})
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
    })

function testFunc() {
  return "hi"
}

*/

