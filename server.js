const express = require('express')
const app = express()
const { join } = require('path')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))