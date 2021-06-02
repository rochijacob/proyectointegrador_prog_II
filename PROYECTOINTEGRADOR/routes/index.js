var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');
let searchController = require ('../controllers/searchController');
let productController = require ('../controllers/productController');
const logController = require('../controllers/logController');
const { Router } = require('express');
// const logController = require('../controllers/logController');

/* GET home page. */
router.get('/', homeController.index);

router.get('/register', homeController.register); // esto crea el siguiente link "/register/"

router.get('/login', homeController.login);

router.get('/product/:id', productController.detalle);
router.post('/borrar', homeController.borrar);

router.get('/profile', homeController.profile);

// router.get('/headerLogueado', homeController.headerLogueado);

//router.get('/searchResults', homeController.searchResults);
router.get('/buscar', searchController.search); 

router.get('/productAdd', homeController.productAdd);
router.post('/productAdd', homeController.agregarProducto);

router.get('/profileEdit', homeController.profileEdit);

//necesito dos metodos. 

router.get('/register', logController.registerForm);
router.post('/register', logController.registerCreateUser); //toma los datos del formulario y los usa para crear el usuario en la base de datos

router.get('/login', logController.loginForm);
router.post('/login', logController.loginValidate);

router.post('/logout', logController.logout);


module.exports = router;
