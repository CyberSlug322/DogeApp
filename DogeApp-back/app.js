const express = require('express')
const cors = require('cors');
const fetch = require('node-fetch');

const app = express()
const port = 3001
const dogData = JSON.stringify({"message":"https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_3848.jpg","status":"success"})
app.use(cors());


app.get('/', async (req, res) => {
  res.send(dogData)
})

app.listen(port, () => {
  console.log(`server works on port ${port}`)
})