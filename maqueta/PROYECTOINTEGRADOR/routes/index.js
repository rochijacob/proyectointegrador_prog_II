var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/register', homeController.register);


module.exports = router;
