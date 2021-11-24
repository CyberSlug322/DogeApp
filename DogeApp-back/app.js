import express from 'express';
import cors from 'cors';
import router from './router.js';
import {handleDog} from './mongo.js';
const PORT = process.env.PORT || 3001;

//const fetch = require('node-fetch');

const app = express();

app.use(cors());
app.use('/',router);
app.use(express.json());
const start = async() => {
  try {
   
    app.listen(PORT, () => {
      console.log(`server works on port ${PORT}`)
    })
    handleDog();
    console.log();
  } catch(err) {
    console.log(err);
  }
}

 start();

 

