const router = require('express').Router()
const { Media } = require('../models')

// GET all Media
router.get('/media', (req, res) => {
  Media.find()
    .then(Media => res.json(Media))
    .catch(err => console.log(err))
})

// POST one Media
router.post('/media', (req, res) => {
  Media.create({
    text: req.body.text,
    user: req.user._id
  })
    .then(media => {
       res.json(media))
    })
    .catch(err => console.log(err))
})

// PUT one Media
router.put('/media/:id', (req, res) => {
  Media.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE one Media
router.delete('/media/:id', (req, res) => {
  Media.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router