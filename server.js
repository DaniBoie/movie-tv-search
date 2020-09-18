const express = require('express')
const app = express()
const { join } = require('path')

if (process.env.NODE_ENV  === 'production') {
  app.use(express.static(join(__dirname, 'client', 'public')))
}

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(join(__dirname, 'client', 'public', 'index.html'))
  })
}

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))

