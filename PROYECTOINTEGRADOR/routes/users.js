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

module.exports = router;
