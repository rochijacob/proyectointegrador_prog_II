var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/register', homeController.register); // esto crea el siguiente link "/register/"

router.get('/login', homeController.login);


module.exports = router;
