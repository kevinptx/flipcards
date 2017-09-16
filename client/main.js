

function loadFlipCardUsers() {
  fetch('http://localhost:3000/users')
  .then(function(response) {
    return response.json()
  })
  .then(function(json){
    console.log(json)
    let users = json
    var usersList = document.querySelector("#usersList")
    for (var i = 0; i < users.length; i++) {
      let li = document.createElement("li")
      li.innerHTML = users[i].username
      usersList.appendChild(li)
    }
  })
  .catch(function(error){
    console.log('parsing failed', error)
  })
}

var userButton = document.querySelector("#userButton")

userButton.addEventListener('click', function(){
  loadFlipCardUsers()
})
