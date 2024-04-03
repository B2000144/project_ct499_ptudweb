const express = require('express');
const router = express.Router();
const {postCreateUser, getHomepage} = require('../controllers/testController')
// router.Method('/route, handler)
router.get('/', getHomepage);
router.post('/create-user', postCreateUser);

module.exports = router;