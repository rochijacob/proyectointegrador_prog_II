var express = require('express');
var router = express.Router();
let loginController = require ('../controllers/loginController');

/* GET home page. */
router.get('/', loginController.index);

// router.get('/register', homeController.register);


module.exports = router;