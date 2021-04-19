var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/register', homeController.register); // esto crea el siguiente link "/register/"

router.get('/login', homeController.login);

router.get('/product/', homeController.product);

router.get('/profile', homeController.profile);

router.get('/headerLogueado', homeController.headerLogueado);

router.get('/searchResults', homeController.searchResults);

router.get('/productAdd', homeController.productAdd);

router.get('/profileEdit', homeController.profileEdit);







module.exports = router;
