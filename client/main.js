function loadFlipCardUsers() {
  fetch('http://localhost:3000/users')
  .then(function(response) {
    return response.json()
  })
  .then(function(json){
    console.log(json)
  })
  .catch(function(error){
    console.log('parsing failed', error)
  })
}

loadFlipCardUsers()
