var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');
let searchController = require ('../controllers/searchController');
let productController = require ('../controllers/productController');
const logController = require('../controllers/logController');
// const logController = require('../controllers/logController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/register', homeController.register); // esto crea el siguiente link "/register/"

router.get('/login', homeController.login);

router.get('/product/:id', productController.detalle);

router.get('/profile', homeController.profile);

// router.get('/headerLogueado', homeController.headerLogueado);

//router.get('/searchResults', homeController.searchResults);
router.get('/buscar', searchController.search); 

router.get('/productAdd', homeController.productAdd);

router.get('/profileEdit', homeController.profileEdit);

// router.get('/register', logController.registerForm);
// router.post('/register', logController.registerCreateUser);

// router.get('/login', logController.loginForm);
// router.post('/login', logController.loginValidate);

// router.get('/logout', logController.logout);

module.exports = router;
