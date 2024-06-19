const express = require('express');
const router = express.Router();
const { setTokensFromSession } = require('../app/middlewares/setToken');

const adminController = require('../app/controllers/adminController');

router.get('/login', adminController.login);
router.get('/auth', adminController.authenticate);
router.get('/authCallBack', adminController.authCallBack);
router.get('/lists', adminController.listFolderItems);
router.post('/signup', adminController.signUp);

module.exports = router;
