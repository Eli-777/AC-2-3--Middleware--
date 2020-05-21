// app.js
const express = require('express')
const app = express()
const port = 3000


app.use('/', function (req, res, next) {
  let start_time = new Date()
  let timeNow = start_time
  const dd = String(timeNow.getDate()).padStart(2, '0')
  const mm = String(timeNow.getMonth() + 1).padStart(2, '0') //January is 0!
  const yyyy = timeNow.getFullYear()
  const hh = String(timeNow.getHours()).padStart(2, '0')
  const minutes = String(timeNow.getMinutes()).padStart(2, '0')
  const seconds = String(timeNow.getSeconds()).padStart(2, '0')
  timeNow = yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + minutes + ':' + seconds
  
  const verb = req.method
  const router = req.originalUrl
  const first_question = timeNow + " | " + verb + " from " + router
  console.log(first_question)

  res.on("finish", () => {
    let finish_time = new Date()
    const duration = finish_time - start_time
    const responsetimes = "total time: " + duration + 'ms'
    const second_question = first_question + " | " + responsetimes
    console.log(second_question)
  })

  next()
})



app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})