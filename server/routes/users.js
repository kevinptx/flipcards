const express = require("express")
const router = express.Router()
const models = require("../models")
const bcrypt = require("bcryptjs")

router.get("/users", function(req,res){
  models.users.findAll()
  .then(function(users){
    res.json(users)
  })
})

router.post("/users", function(req,res){
  const newUser = models.users.build({
    username: req.body.username,
  })
  newUser.password = bcrypt.hashSync(req.body.password, 8)
  newUser.save().then(function(){
    res.json({success: true})
  })
})

module.exports = router
