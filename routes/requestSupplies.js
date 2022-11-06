const router = require('express').Router();
const requestSupply = require('../controller/requestSupply');


router.route('/').post(requestSupply);

module.exports = router;