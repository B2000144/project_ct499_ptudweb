const express = require('express');
const router = express.Router();
const {getTestpage, getHomepage} = require('../controllers/testController')
// router.Method('/route, handler)
router.get('/', getHomepage);
router.get('/test', getTestpage);

module.exports = router;