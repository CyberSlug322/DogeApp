import Router from 'express';
import {getAllDogs} from './mongo.js';
const router = new Router();

router.get('/', async (req, res) => {
    const data = await getAllDogs();
    res.send(JSON.stringify(data));
  })

export default router;