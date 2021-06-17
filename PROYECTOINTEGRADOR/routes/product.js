var express = require('express');
var router = express.Router();
let productController = require ('../controllers/productController');


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


router.get('/product/:id', productController.detalle);
router.post('/comentar', productController.comentar);
router.post('/borrar', homeController.borrar);


router.get('/productModify/:id', productController.updateRender);
router.get('/productAdd', homeController.productAdd);
router.post('/productModify/:id', productController.updateProducto);
router.post('/productAdd', homeController.agregarProducto);
router.post('/comentar', productController.comentar);

router.get('/todosProductos', homeController.todosProductos);



//router.get('/profileEdit', homeController.profileEdit);
router.get('/profileEdit/:id', usuarioController.detalleProfile); //editar perfil segun id
//necesito dos metodos. 
router.post('/profileEdit/:id', upload.single('avatar'), usuarioController.profileEdit);



module.exports = router;
