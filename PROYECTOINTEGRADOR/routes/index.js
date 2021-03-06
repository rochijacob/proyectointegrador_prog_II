//logica que maneja los request de los clientes
//requiero variables necesarias para el proyecto
var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');
let searchController = require ('../controllers/searchController');
let productController = require ('../controllers/productController');
const logController = require('../controllers/logController');
let usuarioController = require('../controllers/usuarioController');
const { Router } = require('express');

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage: storage
})

/* GET home page. */
router.get('/', homeController.index); //render del index y trae resultados por fecha


router.get('/profile/:id', usuarioController.detalle); //perfil segun id



router.get('/buscar', searchController.search); 

router.get('/todosProductos', homeController.todosProductos);

router.post('/comentar', productController.comentar);



//router.get('/profileEdit', homeController.profileEdit);
router.get('/profileEdit/:id', usuarioController.detalleProfile); //editar perfil segun id
//necesito dos metodos. 
router.post('/profileEdit/:id', upload.single('avatar'), usuarioController.profileEdit);
router.post('/borrar', usuarioController.borrarPerfil )


router.get('/register', logController.registerForm);
router.post('/register', logController.registerCreateUser); //toma los datos del formulario y los usa para crear el usuario en la base de datos

router.get('/login', logController.loginForm);
router.post('/login', logController.loginValidate);

router.post('/logout', logController.logout);


module.exports = router;
