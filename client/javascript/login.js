
function loginNewUser(username,password){

  //fetch to your local server where you wrote your post function on the backend
  fetch('http://localhost:3000/login', {
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


var loginButton = document.querySelector("#loginButton")
loginButton.addEventListener('click', function(){

  let username = document.querySelector('#usernameLogin').value
  let password = document.querySelector('#passwordLogin').value

  console.log(username)
  console.log(password)

  loginUser(username, password)
})
