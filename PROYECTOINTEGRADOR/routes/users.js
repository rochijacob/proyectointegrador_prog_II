var express = require('express');
var router = express.Router();

let db = require('../database/models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => { //donde almaceno el archivo
        cb(null, 'public/images/users') //ruta donde almaceno el archivo
    },
    filename: (req, file, cb) => { //como se va a guardar
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({ //generico, variable upload q contenga multer
    storage: storage
})

module.exports = router;
