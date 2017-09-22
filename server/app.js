const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const session = require("express-session")
app.use(express.static('public'))
app.use(bodyParser.json())

const users = require("./routes/users")
app.use(users)

const decks = require("./routes/decks")
app.use(decks)

const cards = require("./routes/cards")
app.use(cards)

const login = require("./routes/login")
app.use(login)

app.listen(3000, function(req, res){
  console.log("Flipcards works!");
})
