const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const url = 'mongodb+srv://admin:admin@cluster0.dptsl.mongodb.net/dog-app?retryWrites=true&w=majority';
//const fetch = require('node-fetch');

const app = express()

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

const start = async() => {
  try {
    await mongoose.connect(url)
    app.use(cors());
    app.listen(PORT, () => {
      console.log(`server works on port ${PORT}`)
    })
  } catch(err) {
    console.log(err);
  }
}

 start();

app.get('/',  (req, res) => {
  res.send(dogs)
})

