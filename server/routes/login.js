const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")


router.post("/login", function (req,res){
  const username = req.body.username
  const password = req.body.password
  let users = models.users

  users.find({
    where {
      username: username
    }
  })
  .then(function(user){
    if(!user) {
      res.json({success: false})
    } else {
      if (bcrypt.compareSync(password, user.password)){
        req.session.user = user
      } else 
    }

  })
}






module.exports = router
