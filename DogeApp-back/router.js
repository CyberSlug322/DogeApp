import Router from 'express';
const router = new Router();


router.get('/',  (req, res) => {
    res.send('ss')
  })

export default router;