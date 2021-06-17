var express = require('express');
var router = express.Router();
let homeController = require ('../controllers/homeController');
let productController = require ('../controllers/productController');
const { Router } = require('express');

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/products')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage: storage
})

router.get('/:id', productController.detalle);

router.get('/modify/:id', productController.updateRender);
router.get('/add/new', homeController.productAdd);
router.post('/modify/:id', productController.updateProducto);
router.post('/add/new', homeController.agregarProducto);
router.post('/comentar', productController.comentar);
router.post('/borrar', homeController.borrar);


module.exports = router;
