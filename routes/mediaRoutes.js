const router = require('express').Router()
const { Media } = require('../models')

// GET all Media
router.get('/media', (req, res) => {
  Media.find()
    .then(Media => res.json(Media))
    .catch(err => console.log(err))
})

// POST Media
router.post('/media', (req, res) => {
  Media.create(req.body)
    .then(media => {
       res.json(media)
    })
    .catch(err => console.log(err))
})

// PUT Media
router.put('/media/:id', (req, res) => {
  Media.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

// DELETE Media
router.delete('/media/:id', (req, res) => {
  Media.findById(req.params.id)
    .then(media => media.remove())
    .then(media => res.json)
    .catch(err => console.log(err))
})

//http://www.omdbapi.com/?apikey=trilogy&t=${search}

module.exports = router