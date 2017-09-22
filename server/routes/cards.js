const express = require("express")
const router = express.Router()
const models = require("../models")

router.get("/cards", function(req,res){
  models.flipcards.findAll()
  .then(function(card){
    res.json(card)
  })
})

router.post("/cards", function(req,res){
  const newCard = models.flipcards.build({
    question: req.body.question,
    answer: req.body.answer
  })
  newCard.save().then(function(newCard){
    res.json({success: true})
  })
})

module.exports = router
