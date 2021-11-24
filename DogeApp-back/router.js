import Router from 'express';
import {handleDog} from './mongo.js';
const router = new Router();


router.get('/',  (req, res) => {
    res.send('ss')
  })

export default router;