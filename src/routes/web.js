const express = require('express');
const router = express.Router();
const {postCreateUser, getHomepage,getCreatePage} = require('../controllers/testController')
// router.Method('/route, handler)
router.get('/', getHomepage);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);

module.exports = router;