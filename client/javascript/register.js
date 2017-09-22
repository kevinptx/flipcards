
function saveNewUser(username,password){

  //fetch to your local server where you wrote your post function on the backend
  fetch('http://localhost:3000/users', {
    method: 'POST',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}

var newUserButton = document.querySelector("#newUserButton")
newUserButton.addEventListener('click', function(){

  let username = document.querySelector('#usernameInputArea').value
  let password = document.querySelector('#passwordInputArea').value

  console.log(username)
  console.log(password)

  saveNewUser(username, password)
})
