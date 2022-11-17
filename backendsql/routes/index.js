const router = require('express').Router();
const userRouter = require('./users.routes');
const memRouter = require('./mems.routes');
const auth = require('../middlewares/auth');
const { signup, signin } = require('../controllers/users.controller');

router.post('/signin', signin );
router.post('/signup', signup);
router.use('/users', auth, userRouter);
router.use('/mems', auth, memRouter);

module.exports = router;