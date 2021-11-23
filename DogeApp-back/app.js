const express = require('express')
const cors = require('cors');
//const fetch = require('node-fetch');

const app = express()
const port = 3001
const dogs = JSON.stringify({
  "_id" : "random generated id",
  "breed" : "random generated id",
  "image":"https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_3848.jpg",
  "title" : "terrier-dandie"
});
const breeds = JSON.stringify({
  "_id" : "random generated id",
  "title" : "terrier-dandie"
});
app.use(cors());


app.get('/',  (req, res) => {
  res.send(dogs)
})

app.listen(port, () => {
  console.log(`server works on port ${port}`)
})