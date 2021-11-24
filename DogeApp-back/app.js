import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './router.js';
const PORT = process.env.PORT || 3001;
const url = 'mongodb+srv://admin:admin@cluster0.dptsl.mongodb.net/dog-app?retryWrites=true&w=majority';
//const fetch = require('node-fetch');

const app = express();

const breedSchema = new mongoose.Schema({
  title: String
}, { versionKey: false })
const dogSchema = new mongoose.Schema({
  breed: mongoose.Schema.Types.ObjectId,
  image: String,
  title: String
}, { versionKey: false });


app.use(cors());
app.use('/',router);
app.use(express.json());
const start = async() => {
  try {
    await mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT, () => {
      console.log(`server works on port ${PORT}`)
    })

    const Breed = mongoose.model('Breed', breedSchema);
    const breed = new Breed({ title: "terrorer" });
    await breed.save();
    //const dbReturn = await Example.find();
    console.log();
  } catch(err) {
    console.log(err);
  }
}

 start();

 

