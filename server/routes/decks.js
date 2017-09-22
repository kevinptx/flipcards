const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/decks", function(req,res){
  models.decks.findAll()
  .then(function(decks){
    res.json(decks)
  })
})

router.post("/decks", function(req,res){
  const newDeck = models.decks.build({
    topic: req.body.topic,
  })
  newDeck.save().then(function(){
    res.json({success: true})
  })
})

module.exports = router
