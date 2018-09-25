const express = require('express')
const PORT = process.env.PORT || 5000
var app = express();
var fire = require('./fire')

app.get('/', (req, res) => {
  res.send('<h1>Salam dari Lintang & Heroku!</h1>')
})

app.get('/:lintang', (req, res) => {
  res.send('<h1>Anda merequest GET /'+req.params.lintang+'</h1>')
})

app.listen(PORT, () => {
  console.log(`Listening on ${ PORT }`)
})
