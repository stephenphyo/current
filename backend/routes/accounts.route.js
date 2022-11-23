const router = require('express').Router();

/* Controllers Imports */
const accountCtrl = require('../controllers/accounts.controller');

/* POST */
router.post('/login', accountCtrl.postLogin);
router.post('/register', accountCtrl.postRegister);
router.post('/resetpassword', accountCtrl.postForgotPassword);

module.exports = router;